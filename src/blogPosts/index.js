// Import all markdown files
const blogPostFiles = import.meta.glob('./posts/*.md', { 
  query: '?raw', 
  import: 'default' 
});

export async function getAllPosts() {
  const posts = await Promise.all(
    Object.entries(blogPostFiles).map(async ([path, resolver]) => {
      const content = await resolver();
      const metadata = parseMetadata(content);
      return {
        ...metadata,
        content: content.split('---').slice(2).join('---').trim(),
        slug: path.split('/').pop().replace('.md', '')
      };
    })
  );
  
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function parseMetadata(markdown) {
  const metadataRegex = /^---\n([\s\S]*?)\n---/;
  const match = markdown.match(metadataRegex);
  
  if (!match) return {};
  
  const metadata = {};
  match[1].split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
      metadata[key.trim()] = value;
    }
  });
  
  return metadata;
}
