// Import all markdown files from projectFiles directory
const projectFiles = import.meta.glob('./projectFiles/*.md', { 
  query: '?raw', 
  import: 'default',
  eager: false
});

export async function getAllProjects() {
  const projects = await Promise.all(
    Object.entries(projectFiles).map(async ([path, resolver]) => {
      const content = await resolver();
      const metadata = parseMetadata(content);
      const slug = path.split('/').pop().replace('.md', '');
      
      return {
        ...metadata,
        content: content.split('---').slice(2).join('---').trim(),
        slug
      };
    })
  );
  
  // Sort by year (newest first)
  return projects.sort((a, b) => {
    const yearA = parseInt(a.year) || 0;
    const yearB = parseInt(b.year) || 0;
    return yearB - yearA;
  });
}

export async function getProjectBySlug(slug) {
  const projects = await getAllProjects();
  return projects.find(project => project.slug === slug);
}

function parseMetadata(markdown) {
  const metadataRegex = /^---\n([\s\S]*?)\n---/;
  const match = markdown.match(metadataRegex);
  
  if (!match) return {};
  
  const metadata = {};
  match[1].split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;
    
    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();
    
    // Remove quotes if present
    value = value.replace(/^["']|["']$/g, '');
    
    if (key && value) {
      // Handle tech array - split by comma
      if (key === 'tech') {
        metadata[key] = value.split(',').map(item => item.trim());
      } else if (key === 'id') {
        metadata[key] = parseInt(value, 10);
      } else {
        metadata[key] = value;
      }
    }
  });
  
  return metadata;
}
