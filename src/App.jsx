import React, { useState, useEffect } from 'react';
import { Code2, Database, Server, Mail, Github, Linkedin, Calendar, ArrowRight, Terminal, Cpu, Globe, Clock, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github-dark.css';
import { getAllPosts } from './blogPosts';
import { getAllProjects } from './projects';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loadingBlog, setLoadingBlog] = useState(false);
  const [loadingProjects, setLoadingProjects] = useState(false);

  useEffect(() => {
    if (activeSection === 'blog' && blogPosts.length === 0) {
      setLoadingBlog(true);
      getAllPosts()
        .then(posts => {
          setBlogPosts(posts);
          setLoadingBlog(false);
        })
        .catch(err => {
          console.error('Error loading blog posts:', err);
          setLoadingBlog(false);
        });
    }
  }, [activeSection, blogPosts.length]);

  useEffect(() => {
    if (activeSection === 'projects' && projects.length === 0) {
      setLoadingProjects(true);
      getAllProjects()
        .then(projs => {
          setProjects(projs);
          setLoadingProjects(false);
        })
        .catch(err => {
          console.error('Error loading projects:', err);
          setLoadingProjects(false);
        });
    }
  }, [activeSection, projects.length]);

  const skills = [
    { 
      category: "Languages", 
      items: ["Python", "SQL", "Go", "JavaScript"],
      icon: <Terminal className="w-4 h-4" />
    },
    { 
      category: "Frameworks & Libraries", 
      items: ["Flask", "Django", "FastAPI", "ReactJS"],
      icon: <Code2 className="w-4 h-4" />
    },
    { 
      category: "Databases", 
      items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "ElasticSearch", "Cassandra"],
      icon: <Database className="w-4 h-4" />
    },
    { 
      category: "DevOps & Cloud", 
      items: ["Docker", "Kubernetes", "AWS", "GCP", "Terraform", "Jenkins", "GitHub Actions"],
      icon: <Server className="w-4 h-4" />
    },
    { 
      category: "Tools & Technologies", 
      items: ["RabbitMQ", "Kafka", "GraphQL", "gRPC"],
      icon: <Cpu className="w-4 h-4" />
    }
  ];

  const markdownComponents = {
    h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-zinc-100 mt-8 mb-4" {...props} />,
    h2: ({node, ...props}) => <h2 className="text-2xl font-semibold text-zinc-100 mt-6 mb-3" {...props} />,
    h3: ({node, ...props}) => <h3 className="text-xl font-semibold text-zinc-200 mt-4 mb-2" {...props} />,
    p: ({node, ...props}) => <p className="text-zinc-300 leading-relaxed mb-4" {...props} />,
    ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-zinc-300" {...props} />,
    ol: ({node, ...props}) => <ol className="list-decimal list-inside space-y-2 ml-4 mb-4 text-zinc-300" {...props} />,
    li: ({node, ...props}) => <li className="text-zinc-300" {...props} />,
    code: ({node, inline, ...props}) => 
      inline ? (
        <code className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-sm text-emerald-400 font-mono" {...props} />
      ) : (
        <code className="text-sm" {...props} />
      ),
    pre: ({node, ...props}) => (
      <pre className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto mb-4" {...props} />
    ),
    img: ({node, ...props}) => (
      <img className="rounded-lg border border-zinc-800 my-6 w-full" {...props} alt={props.alt || ''} />
    ),
    a: ({node, ...props}) => (
      <a className="text-emerald-400 hover:text-emerald-300 underline" target="_blank" rel="noopener noreferrer" {...props} />
    ),
    blockquote: ({node, ...props}) => (
      <blockquote className="border-l-4 border-emerald-400 pl-4 italic text-zinc-400 my-4" {...props} />
    ),
    strong: ({node, ...props}) => <strong className="text-zinc-100 font-semibold" {...props} />,
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-lg font-bold">
              <div className="p-1.5 bg-emerald-400/10 rounded">
                <Code2 className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-zinc-100">Rujeet J.</span>
            </div>
            <div className="flex gap-6 text-sm font-medium">
              <button 
                onClick={() => { setActiveSection('about'); setSelectedArticle(null); setSelectedProject(null); }}
                className={`transition-colors ${activeSection === 'about' ? 'text-emerald-400' : 'text-zinc-400 hover:text-zinc-100'}`}
              >
                About
              </button>
              <button 
                onClick={() => { setActiveSection('projects'); setSelectedArticle(null); setSelectedProject(null); }}
                className={`transition-colors ${activeSection === 'projects' ? 'text-emerald-400' : 'text-zinc-400 hover:text-zinc-100'}`}
              >
                Projects
              </button>
              <button 
                onClick={() => { setActiveSection('blog'); setSelectedArticle(null); setSelectedProject(null); }}
                className={`transition-colors ${activeSection === 'blog' ? 'text-emerald-400' : 'text-zinc-400 hover:text-zinc-100'}`}
              >
                Blog
              </button>
              <button 
                onClick={() => { setActiveSection('contact'); setSelectedArticle(null); setSelectedProject(null); }}
                className={`transition-colors ${activeSection === 'contact' ? 'text-emerald-400' : 'text-zinc-400 hover:text-zinc-100'}`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {activeSection === 'about' && (
          <div className="space-y-16">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Software Engineer<br />
                <span className="text-zinc-500">Building Scalable Systems</span>
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
                Specialized in designing and building high-performance APIs, distributed systems, and data infrastructure.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/rujeetjahagirdar" target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/rujeet-jahagirdar/" target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:r1jahagirdar@gmail.com" className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://rujeetjahagirdar.github.io/" target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Server className="w-7 h-7 text-emerald-400" />
                Technical Skills
              </h2>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.category} className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="text-emerald-400">{skill.icon}</div>
                      <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                        {skill.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span 
                          key={item}
                          className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-md text-sm text-zinc-300 hover:border-zinc-700 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Work Experience</h2>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-emerald-400">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-emerald-400 rounded-full"></div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl text-zinc-100">Software Engineer</h3>
                    <p className="text-emerald-400 text-sm font-medium">SwipeSwipe • January 2025 - Present</p>
                    <ul className="text-zinc-400 space-y-2 mt-3">
                      <li className="flex gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>Developed and maintained backend APIs supporting a product recommendation system.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>Implemented recommendation service logic to generate personalized product suggestions.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>Improved backend performance and response times by introducing a caching layer.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative pl-8 border-l-2 border-zinc-700">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-zinc-700 rounded-full"></div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl text-zinc-100">Research Assistant, Software Developer</h3>
                    <p className="text-zinc-400 text-sm font-medium">The University of Texas at Arlington • June 2024 - December 2024</p>
                    <ul className="text-zinc-400 space-y-2 mt-3">
                      <li className="flex gap-2">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>Built data pipelines for automated data collection from multiple sources.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>Implemented data cleaning and preprocessing workflows to improve data quality.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>Organized and structured datasets to support downstream analysis and research tasks.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative pl-8 border-l-2 border-zinc-700">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-zinc-700 rounded-full"></div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl text-zinc-100">Software Engineer</h3>
                    <p className="text-zinc-400 text-sm font-medium">PNC Bank • June 2019 - March 2022</p>
                    <ul className="text-zinc-400 space-y-2 mt-3">
                      <li className="flex gap-2">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>Designed and implemented tokenization solutions to protect PII data for a banking client.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>Integrated tokenization workflows with existing systems to ensure secure data handling.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-zinc-600 mt-1">•</span>
                        <span>Collaborated with upstream and downstream teams to align data flow and compliance requirements.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'projects' && !selectedProject && (
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold flex items-center gap-3">
                <Database className="w-8 h-8 text-emerald-400" />
                Projects
              </h1>
              <p className="text-zinc-400 text-lg">A collection of my backend engineering work</p>
            </div>
            
            {loadingProjects ? (
              <div className="text-center py-12 text-zinc-400">Loading projects...</div>
            ) : projects.length === 0 ? (
              <div className="text-center py-12 text-zinc-400">No projects yet. Check back soon!</div>
            ) : (
              <div className="grid gap-6">
                {projects.map((project) => (
                  <div 
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="border border-zinc-800 rounded-lg p-6 hover:border-emerald-400/50 transition-all bg-zinc-900/30 hover:bg-zinc-900/50 group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="space-y-1 flex-1">
                        <h3 className="text-xl font-semibold group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-zinc-500">{project.year}</span>
                          <span className="text-zinc-700">•</span>
                          <span className="text-emerald-400 font-medium">{project.metrics}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-zinc-400 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech && project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2.5 py-1 bg-emerald-400/10 border border-emerald-400/20 rounded text-xs text-emerald-400 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium pt-4">
                      View details 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeSection === 'projects' && selectedProject && (
          <article className="space-y-8">
            <button
              onClick={() => setSelectedProject(null)}
              className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors group"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to all projects
            </button>

            <header className="space-y-4 pb-8 border-b border-zinc-800">
              <h1 className="text-4xl font-bold leading-tight text-zinc-100">
                {selectedProject.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm">
                <span className="text-zinc-500">{selectedProject.year}</span>
                <span className="text-zinc-700">•</span>
                <span className="text-emerald-400 font-medium">{selectedProject.metrics}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tech && selectedProject.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2.5 py-1 bg-emerald-400/10 border border-emerald-400/20 rounded text-xs text-emerald-400 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(selectedProject.github || selectedProject.demo) && (
                <div className="flex gap-3 pt-2">
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all text-sm"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a 
                      href={selectedProject.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-400/10 border border-emerald-400/20 rounded-lg text-emerald-400 hover:bg-emerald-400/20 transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </header>

            <div className="prose prose-invert prose-zinc max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight, rehypeRaw]}
                components={markdownComponents}
              >
                {selectedProject.content}
              </ReactMarkdown>
            </div>

            <footer className="border-t border-zinc-800 pt-8 mt-12">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-zinc-500">Built by</p>
                  <p className="font-semibold text-zinc-100">Rujeet J.</p>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/rujeetjahagirdar" target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/rujeet-jahagirdar/" target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </footer>

            {projects.length > 1 && (
              <div className="border-t border-zinc-800 pt-8 mt-8">
                <h3 className="text-2xl font-bold mb-6">More Projects</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {projects
                    .filter(proj => proj.id !== selectedProject.id)
                    .slice(0, 2)
                    .map((project) => (
                      <div
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="border border-zinc-800 rounded-lg p-4 hover:border-emerald-400/50 transition-all cursor-pointer group bg-zinc-900/30"
                      >
                        <span className="text-xs text-emerald-400 font-medium">{project.year}</span>
                        <h4 className="font-semibold mt-2 group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-sm text-zinc-500 mt-1 line-clamp-2">{project.description}</p>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </article>
        )}

        {activeSection === 'blog' && !selectedArticle && (
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Technical Blog</h1>
              <p className="text-zinc-400 text-lg">Thoughts on backend development, system design, and engineering practices</p>
            </div>
            
            {loadingBlog ? (
              <div className="text-center py-12 text-zinc-400">Loading blog posts...</div>
            ) : blogPosts.length === 0 ? (
              <div className="text-center py-12 text-zinc-400">No blog posts yet. Check back soon!</div>
            ) : (
              <div className="space-y-6">
                {blogPosts.map((post) => (
                  <article 
                    key={post.id}
                    onClick={() => setSelectedArticle(post)}
                    className="border border-zinc-800 rounded-lg p-6 hover:border-emerald-400/50 transition-all cursor-pointer group bg-zinc-900/30 hover:bg-zinc-900/50"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="px-2 py-0.5 bg-emerald-400/10 border border-emerald-400/20 rounded text-emerald-400 font-medium text-xs">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-zinc-500">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="text-zinc-700">•</span>
                        <span className="flex items-center gap-1.5 text-zinc-500">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold group-hover:text-emerald-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-zinc-400 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium pt-2">
                        Read article 
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}

        {activeSection === 'blog' && selectedArticle && (
          <article className="space-y-8">
            <button
              onClick={() => setSelectedArticle(null)}
              className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors group"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to all articles
            </button>

            <header className="space-y-4 pb-8 border-b border-zinc-800">
              <div className="flex items-center gap-3 text-sm">
                <span className="px-3 py-1 bg-emerald-400/10 border border-emerald-400/20 rounded text-emerald-400 font-medium">
                  {selectedArticle.category}
                </span>
                <span className="flex items-center gap-1.5 text-zinc-500">
                  <Calendar className="w-4 h-4" />
                  {selectedArticle.date}
                </span>
                <span className="text-zinc-700">•</span>
                <span className="flex items-center gap-1.5 text-zinc-500">
                  <Clock className="w-4 h-4" />
                  {selectedArticle.readTime}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold leading-tight text-zinc-100">
                {selectedArticle.title}
              </h1>

              {selectedArticle.author && (
                <div className="flex items-center gap-2 text-zinc-400">
                  <span>By</span>
                  <span className="font-medium text-zinc-300">{selectedArticle.author}</span>
                </div>
              )}
            </header>

            <div className="prose prose-invert prose-zinc max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight, rehypeRaw]}
                components={markdownComponents}
              >
                {selectedArticle.content}
              </ReactMarkdown>
            </div>

            <footer className="border-t border-zinc-800 pt-8 mt-12">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-zinc-500">Written by</p>
                  <p className="font-semibold text-zinc-100">{selectedArticle.author || 'Rujeet J.'}</p>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/rujeetjahagirdar" target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/rujeet-jahagirdar/" target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </footer>

            {blogPosts.length > 1 && (
              <div className="border-t border-zinc-800 pt-8 mt-8">
                <h3 className="text-2xl font-bold mb-6">More Articles</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {blogPosts
                    .filter(post => post.id !== selectedArticle.id)
                    .slice(0, 2)
                    .map((post) => (
                      <div
                        key={post.id}
                        onClick={() => setSelectedArticle(post)}
                        className="border border-zinc-800 rounded-lg p-4 hover:border-emerald-400/50 transition-all cursor-pointer group bg-zinc-900/30"
                      >
                        <span className="text-xs text-emerald-400 font-medium">{post.category}</span>
                        <h4 className="font-semibold mt-2 group-hover:text-emerald-400 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-sm text-zinc-500 mt-1">{post.readTime}</p>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </article>
        )}

        {activeSection === 'contact' && (
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Get In Touch</h1>
              <p className="text-zinc-400 text-lg">Let's discuss your next project or opportunity</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <a href="mailto:r1jahagirdar@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors group">
                      <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-emerald-400/50 transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span>r1jahagirdar@gmail.com</span>
                    </a>
                    
                    <a href="https://github.com/rujeetjahagirdar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors group">
                      <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-emerald-400/50 transition-colors">
                        <Github className="w-5 h-5" />
                      </div>
                      <span>github.com/rujeetjahagirdar</span>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/rujeet-jahagirdar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors group">
                      <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-emerald-400/50 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <span>linkedin.com/in/rujeet-jahagirdar</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 focus:border-emerald-400 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 focus:border-emerald-400 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 focus:border-emerald-400 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button className="w-full px-6 py-3 bg-emerald-400 text-zinc-950 font-semibold rounded-lg hover:bg-emerald-500 transition-colors">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="border-t border-zinc-800 mt-24">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-sm">
              © 2025 Rujeet J. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/rujeetjahagirdar" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/rujeet-jahagirdar/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm">
                LinkedIn
              </a>
              <a href="mailto:r1jahagirdar@gmail.com" className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
