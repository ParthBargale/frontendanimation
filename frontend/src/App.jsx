import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, CheckCircle2, ChevronDownCircle, Code2, Github, Twitter } from 'lucide-react';
import './index.css';

const stackData = {
  layers: [
    { 
      id: "vite_plus", label: "VITE+", side: "left", description: "unified toolchain", 
      level: 4, width: 140, lineLen: 120, color: "#8E2DE2", type: "aurora"
    },
    { 
      id: "vitest", label: "VITEST", side: "right", description: "test runner", 
      level: 3, width: 160, lineLen: 160, color: "#00E676", type: "normal"
    },
    { 
      id: "rolldown", label: "ROLLDOWN", side: "left", description: "bundler", 
      level: 2, width: 180, lineLen: 140, color: "#FF512F", type: "pulse"
    },
    { 
      id: "vite", label: "VITE", side: "right", description: "build tool", 
      level: 1, width: 200, lineLen: 120, color: "#9A30FF", type: "normal"
    },
    { 
      id: "oxc", label: "OXC", side: "left", description: "language toolchain", 
      level: 0, width: 220, lineLen: 100, color: "#00e0ff", type: "normal"
    }
  ]
};

const openSourceTools = [
  { id: 'vite_plus', name: 'Vite+', desc: 'The unified toolchain for the web. Vite+ is the entry point that manages your frontend toolchain.' },
  { id: 'vite', name: 'Vite', desc: 'The build tool for the web. Default choice for SPAs and fullstack frameworks like Nuxt & SvelteKit.' },
  { id: 'vitest', name: 'Vitest', desc: 'The next-generation test runner. Feature-rich, Jest-compatible, natively supports ESM.' },
  { id: 'rolldown', name: 'Rolldown', desc: 'The blazing fast JavaScript bundler. Rust-based bundler with Rollup-compatible API.' },
  { id: 'oxc', name: 'Oxc', desc: 'The fastest JavaScript language toolchain. Includes linter, formatter, parser, resolver, minifier.' },
];

const blogPosts = [
  { tag: "announcements", title: "Announcing Vite+ Alpha", link: "#" },
  { tag: "ecosystem", title: "VoidZero and npmx: Building Better Tools Together", link: "#" },
  { tag: "updates", title: "What’s New in ViteLand: February 2026 Recap", link: "#" },
  { tag: "updates", title: "What’s New in ViteLand: January 2026 Recap", link: "#" },
  { tag: "announcements", title: "Announcing Rolldown 1.0 RC", link: "#" },
];

const CenterIcon = ({ id, color }) => {
  switch(id) {
    case 'vite':
    case 'vite_plus':
      return <Zap size={36} color={color} strokeWidth={2.5} />;
    case 'rolldown':
       return <ChevronDownCircle size={36} color={color} strokeWidth={2.5} />;
    case 'vitest':
       return <CheckCircle2 size={36} color={color} strokeWidth={2.5} />;
    case 'oxc':
       return <Code2 size={36} color={color} strokeWidth={2.5} />;
    default: return null;
  }
};

const LabelIcon = ({ id, color }) => {
  switch(id) {
    case 'oxc': return <Code2 size={14} color={color} strokeWidth={2.5} />;
    case 'vite': 
    case 'vite_plus': return <Zap size={14} color={color} strokeWidth={2.5} />;
    case 'vitest': return <CheckCircle2 size={14} color={color} strokeWidth={2.5} />;
    case 'rolldown': return <ChevronDownCircle size={14} color={color} strokeWidth={2.5} />;
    default: return <Layers size={14} color={color} />;
  }
};

const BoxLayer = ({ layer }) => {
  const depth = 20;
  const { width, color, type } = layer;

  return (
    <div className={`box-render ${type === 'pulse' ? 'pulse-box' : ''}`} style={{ width, height: width, margin: `-${width/2}px 0 0 -${width/2}px` }}>
      {type === 'aurora' && (
        <div className="aurora-wrapper"><div className="aurora-glow"></div></div>
      )}
      <div className="box-top" style={{ borderColor: type === 'normal' ? `${color}60` : undefined }}></div>
      <div className="box-side-right" style={{ width: depth, transform: `rotateY(90deg) translateZ(${width}px)`, borderColor: `${color}60` }}></div>
      <div className="box-side-bottom" style={{ height: depth, transform: `rotateX(-90deg) translateZ(${width}px)`, borderColor: `${color}60` }}></div>
      <div className="center-icon-container">
         <CenterIcon id={layer.id} color={color} />
      </div>
    </div>
  );
};

function App() {
  const spacing = 70; 
  
  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="nav-bar">
        <div className="nav-logo">
          <svg viewBox="0 0 100 100" width="24" height="24" fill="#fff">
             <path d="M50 20 C 30 30, 20 60, 40 70 C 60 80, 80 60, 70 40 C 60 20, 50 20, 50 20 Z" />
          </svg>
          VoidZero
        </div>
        <div className="nav-links">
          <a href="#">Open Source</a>
          <a href="#">Blog</a>
          <a href="#">About</a>
          <a href="#"><Github size={18} /></a>
          <a href="#"><Twitter size={18} /></a>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="hero-section">
        <div className="prod-badge">
          <span className="blink-dot"></span>
          prod server / running
        </div>
        <div className="hero-text">
          <h1 className="hero-title">
            The <span className="gradient-text">JavaScript Tooling</span> Company
          </h1>
          <p className="hero-subtitle">
            Our mission is to make the next generation of JavaScript developers more productive than ever before.
          </p>
        </div>

        {/* The 3D Animation Component */}
        <div className="scene-container">
          <div className="isometric-stack">
            {stackData.layers.map((layer) => {
              const zTranslate = layer.level * spacing;
              const posLeft = layer.side === 'left' ? '0%' : '100%';
              const posTop = layer.side === 'left' ? '100%' : '0%';

              return (
                <motion.div
                  key={layer.id}
                  className="layer"
                  initial={{ opacity: 0, z: layer.level * spacing - 100 }}
                  animate={{ opacity: 1, z: layer.level * spacing }}
                  transition={{ delay: (4 - layer.level) * 0.1, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ translateZ: layer.level * spacing + 10 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <BoxLayer layer={layer} />

                  {/* Lines and Annotations using unrotate technique */}
                  <div style={{ position: 'absolute', left: posLeft, top: posTop, margin: `-${layer.width/2}px 0 0 -${layer.width/2}px`, transformStyle: 'preserve-3d' }}>
                    <div className="connection-line" style={{ 
                        width: layer.lineLen, 
                        [layer.side === 'left' ? 'right' : 'left']: '0',
                        top: '50%',
                        transform: `rotateZ(${layer.side === 'left' ? '0' : '0'}deg)`
                    }}>
                      <svg className="line-svg" viewBox={`0 0 ${layer.lineLen} 4`} preserveAspectRatio="none">
                        <line x1="0" y1="2" x2="100%" y2="2" strokeWidth="2" className={`line-path ${layer.side === 'left' ? 'forward' : 'backward'}`} stroke={layer.color} />
                      </svg>
                      
                      {/* Subtitle Annotation (Optional Description) */}
                      <div className={`badge-desc ${layer.side === 'left' ? 'left-desc' : 'right-desc'} unrotate`}>
                        {layer.description}
                      </div>
                      
                      {/* Pill Badge */}
                      <div className="annotation-badge unrotate" style={{ 
                        position: 'absolute', top: '50%',
                        [layer.side === 'left' ? 'left' : 'right']: `-${layer.lineLen}px`,
                        borderColor: `${layer.color}40`,
                        boxShadow: `0 0 15px ${layer.color}10`
                      }}>
                        <div className="badge-icon" style={{ background: `${layer.color}20` }}>
                           <LabelIcon id={layer.id} color={layer.color} />
                        </div>
                        <span className="badge-text" style={{ textTransform: layer.id === 'oxc' ? 'lowercase' : 'uppercase' }}>
                          {layer.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Source Products Grid */}
      <section className="section">
        <h2 className="section-title">Open Source</h2>
        <p className="section-subtitle">
          We are the creators, maintainers, and contributors of some of the most critical infrastructure projects in the JavaScript ecosystem.
        </p>
        <div className="tools-grid">
          {openSourceTools.map((tool) => {
            const layerConfig = stackData.layers.find(l => l.id === tool.id);
            return (
              <div key={tool.id} className="tool-card">
                <div className="tool-header">
                  <div className="tool-icon" style={{ background: layerConfig ? layerConfig.color + '1A' : '#eee' }}>
                     <LabelIcon id={tool.id} color={layerConfig?.color || '#fff'} />
                  </div>
                  <h3 className="tool-name">{tool.name}</h3>
                </div>
                <p className="tool-desc">{tool.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Blog & News */}
      <section className="section" style={{ borderRadius: '40px', marginBottom: '80px', background: '#0a0a0a' }}>
        <h2 className="section-title">Featured resources & updates</h2>
        <p className="section-subtitle" style={{marginBottom: '40px'}}>Stay up to date with the latest from VoidZero ecosystem.</p>
        
        <div className="news-list">
          {blogPosts.map((post, idx) => (
            <a href={post.link} key={idx} className="news-item">
              <span className="news-tag">{post.tag}</span>
              <span className="news-title">{post.title}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
