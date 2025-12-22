import React, { useState } from 'react';
import { Code2, Database, Server, Mail, Github, Linkedin, Calendar, ArrowRight, Terminal, Cpu, Globe } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "E-Commerce API Gateway",
      description: "Scalable API gateway handling 15M+ daily requests with rate limiting, caching, and load balancing across multiple microservices",
      tech: ["Flask", "Python", "AWS","PostgreSQL"],
      year: "2024",
      metrics: "99.99% uptime"
    },
  ];

  const blogPosts = [
    {
      title: "Designing APIs for Scale: From 1K to 10M Requests",
      date: "Dec 18, 2024",
      excerpt: "Deep dive into architectural patterns, caching strategies, and database optimization techniques that enabled our API to scale 10,000x.",
      readTime: "12 min read",
      category: "Architecture"
    },
  ];

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

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
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
                onClick={() => setActiveSection('about')}
                className={`transition-colors ${activeSection === 'about' ? 'text-emerald-400' : 'text-zinc-400 hover:text-zinc-100'}`}
              >
                About
              </button>
              <button 
                onClick={() => setActiveSection('projects')}
                className={`transition-colors ${activeSection === 'projects' ? 'text-emerald-400' : 'text-zinc-400 hover:text-zinc-100'}`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveSection('blog')}
                className={`transition-colors ${activeSection === 'blog' ? 'text-emerald-400' : 'text-zinc-400 hover:text-zinc-100'}`}
              >
                Blog
              </button>
              <button 
                onClick={() => setActiveSection('contact')}
                className={`transition-colors ${activeSection === 'contact' ? 'text-emerald-400' : 'text-zinc-400 hover:text-zinc-100'}`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* About Section */}
        {activeSection === 'about' && (
          <div className="space-y-16">
            {/* Hero */}
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Software Engineer<br />
                <span className="text-zinc-500">Building Scalable Systems</span>
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
                Specialized in designing and building high-performance APIs, distributed systems, and data infrastructure.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/rujeetjahagirdar" className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/rujeet-jahagirdar/" className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:r1jahagirdar@example.com" className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://github.com/rujeetjahagirdar" className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>


            {/* Skills */}
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

            {/* Experience */}
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

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold flex items-center gap-3">
                <Database className="w-8 h-8 text-emerald-400" />
                Projects
              </h1>
            </div>
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="border border-zinc-800 rounded-lg p-6 hover:border-emerald-400/50 transition-all bg-zinc-900/30 hover:bg-zinc-900/50 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="space-y-1">
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
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2.5 py-1 bg-emerald-400/10 border border-emerald-400/20 rounded text-xs text-emerald-400 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Blog Section */}
        {activeSection === 'blog' && (
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Technical Blog</h1>
              <p className="text-zinc-400 text-lg">Thoughts on backend development, system design, and engineering practices</p>
            </div>
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <article 
                  key={index}
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
                      <span className="text-zinc-500">{post.readTime}</span>
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
          </div>
        )}

        {/* Contact Section */}
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
                    <a href="mailto:yourname@example.com" className="flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors group">
                      <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-emerald-400/50 transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span>r1jahagirdar@gmail.com</span>
                    </a>
                    
                    <a href="https://github.com" className="flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors group">
                      <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-emerald-400/50 transition-colors">
                        <Github className="w-5 h-5" />
                      </div>
                      <span>github.com/rujeetjahagirdar</span>
                    </a>
                    
                    <a href="https://linkedin.com" className="flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors group">
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

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-24">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-sm">
              © 2025 Rujeet J. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/rujeetjahagirdar" className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm">
                GitHub
              </a>
              <a href="https://linkedin.com/in/rujeet-jahagirdar" className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm">
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
