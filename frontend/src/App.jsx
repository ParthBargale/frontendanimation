import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Zap, CheckCircle2, ChevronDownCircle, Code2, Github, Twitter } from 'lucide-react';
import './index.css';

const stackData = {
  layers: [
    { 
      id: "oxc", label: "OXC", side: "left", description: "language toolchain", 
      level: 0, lineLen: 100, color: "#00e0ff",
      gradient: "linear-gradient(135deg, #11dfd9 0%, #00f2fe 100%)", shadow: "rgba(0, 200, 255, 0.4)"
    },
    { 
      id: "vite", label: "VITE", side: "left", description: "build tool", 
      level: 1, lineLen: 160, color: "#9A30FF",
      gradient: "linear-gradient(135deg, #8a2be2 0%, #d866ff 100%)", shadow: "rgba(154, 48, 255, 0.4)"
    },
    { 
      id: "rolldown", label: "ROLLDOWN", side: "right", description: "bundler", 
      level: 2, lineLen: 160, color: "#FF512F",
      gradient: "linear-gradient(135deg, #FF512F 0%, #F09819 100%)", shadow: "rgba(255, 81, 47, 0.4)"
    },
    { 
      id: "vitest", label: "VITEST", side: "right", description: "test runner", 
      level: 3, lineLen: 200, color: "#00E676",
      gradient: "linear-gradient(135deg, #00E676 0%, #1DE9B6 100%)", shadow: "rgba(0, 230, 118, 0.4)"
    },
    { 
      id: "vite_plus", label: "VITE+", side: "left", description: "unified toolchain", 
      level: 4, lineLen: 120, color: "#4A00E0",
      gradient: "linear-gradient(135deg, #4A00E0 0%, #8E2DE2 100%)", shadow: "rgba(74, 0, 224, 0.4)"
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


const SolidVolume = ({ type, gradient, shadow }) => {
  const depth = 25; 
  const isBlank = type === 'blank';
  return (
    <>
      {Array.from({ length: depth }).map((_, i) => {
        const isBottom = i === depth - 1;
        return (
          <motion.div
            key={`vol-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              width: '100%', height: '100%', borderRadius: '24px',
              background: isBlank ? (i > 0 && !isBottom ? '#fff' : 'transparent') : gradient,
              border: isBlank && isBottom ? '1.5px solid #888' : 'none',
              transform: `translateZ(-${i + 1}px)`,
              boxShadow: (!isBlank && isBottom) ? `-10px 10px 30px ${shadow}` : 'none',
              filter: (!isBlank && i > 0 && !isBottom) ? 'brightness(0.9)' : 'none',
            }}
          />
        );
      })}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}
        style={{
          position: 'absolute', width: '100%', height: '100%', borderRadius: '24px',
          background: isBlank ? '#fff' : 'rgba(255, 255, 255, 0.98)',
          border: isBlank ? '1.5px solid #888' : '1.5px solid rgba(0,0,0,0.05)',
          transform: 'translateZ(0px)',
        }}
      />
    </>
  );
};

const CenterIcon = ({ id, color }) => {
  switch(id) {
    case 'vite':
    case 'vite_plus':
      return <Zap size={48} color={color} strokeWidth={2} fill="url(#viteGradient)" />;
    case 'rolldown':
       return <ChevronDownCircle size={48} color={color} strokeWidth={2} />;
    case 'vitest':
       return <CheckCircle2 size={48} color={color} strokeWidth={2} />;
    case 'oxc':
       return <Code2 size={48} color={color} strokeWidth={2} />;
    default: return null;
  }
};

const LabelIcon = ({ id, color, isActive }) => {
  const c = isActive ? color : '#777';
  switch(id) {
    case 'oxc': return <Code2 size={12} color={c} strokeWidth={2.5} />;
    case 'vite': 
    case 'vite_plus': return <Zap size={10} color={c} strokeWidth={2.5} />;
    case 'vitest': return <CheckCircle2 size={10} color={c} strokeWidth={2.5} />;
    case 'rolldown': return <ChevronDownCircle size={10} color={c} strokeWidth={2.5} />;
    default: return <Layers size={10} color={c} />;
  }
};

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stackData.layers.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const spacing = 45; 
  
  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="nav-bar">
        <div className="nav-logo">
          <svg viewBox="0 0 100 100" width="24" height="24" fill="#111">
             <path d="M50 20 C 30 30, 20 60, 40 70 C 60 80, 80 60, 70 40 C 60 20, 50 20, 50 20 Z" />
          </svg>
          VoidZero
        </div>
        <div className="nav-links">
          <a href="#">Open Source</a>
          <a href="#">Blog</a>
          <a href="#">About</a>
          <a href="#"><Github size={16} /></a>
          <a href="#"><Twitter size={16} /></a>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="hero-title">
            The <span className="gradient-text">JavaScript Tooling</span> Company
          </h1>
          <p className="hero-subtitle">
            Our mission is to make the next generation of JavaScript developers more productive than ever before.
          </p>
        </div>

        {/* The 3D Animation Component seamlessly integrated below the title */}
        <div className="scene-container">
          <motion.div 
            className="isometric-stack"
            initial={{ rotateX: 60, rotateZ: -45, scale: 0.8, opacity: 0, y: 0 }}
            animate={{ rotateX: 60, rotateZ: -45, scale: 1.0, opacity: 1, y: [0, -10, 0] }}
            transition={{ y: { duration: 6, ease: "easeInOut", repeat: Infinity }, scale: { duration: 1.2, ease: "easeOut" }, opacity: { duration: 1.2 } }}
          >
            {stackData.layers.map((layer, index) => {
              const zTranslate = layer.level * spacing;
              const status = index < activeIndex ? 'past' : index === activeIndex ? 'active' : 'future';
              const isBlank = status === 'past';
              const isActive = status === 'active';
              const isWireframe = status === 'future';
              const posLeft = layer.side === 'left' ? '0%' : '100%';
              const posTop = layer.side === 'left' ? '100%' : '0%';

              return (
                <motion.div
                  key={layer.id}
                  className="layer"
                  initial={{ z: zTranslate + 400, opacity: 0 }}
                  animate={{ z: zTranslate, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.2 + (4 - layer.level) * 0.15, type: "spring", stiffness: 70, damping: 14 }}
                  style={{ 
                    zIndex: layer.level,
                    borderStyle: isWireframe ? 'dashed' : 'solid',
                    borderWidth: isWireframe ? '2px' : '0px',
                    borderColor: isWireframe ? 'rgba(150, 150, 150, 0.4)' : 'transparent',
                    background: 'transparent',
                    transition: 'border-color 0.8s ease'
                  }}
                >
                  <AnimatePresence>
                    {(isActive || isBlank) && (
                      <SolidVolume type={isBlank ? 'blank' : 'color'} gradient={layer.gradient} shadow={layer.shadow} />
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%", z: 1 }} 
                        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%", z: 1 }} 
                        exit={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%", z: 1 }}
                        transition={{ duration: 0.6, ease: "backOut" }}
                        style={{ position: 'absolute', top: '50%', left: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                      >
                        <CenterIcon id={layer.id} color={layer.color} />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="annotation-wrapper" style={{ left: posLeft, top: posTop, transform: `translate(-50%, -50%) rotateZ(45deg) rotateX(-60deg)` }}>
                    <div className="annotation-line" style={{
                        width: `${layer.lineLen}px`, [layer.side === 'left' ? 'right' : 'left']: '0',
                        top: '50%', transform: 'translateY(-50%)',
                        borderBottom: isActive ? `2px solid ${layer.color}` : '2px dotted rgba(120, 120, 120, 0.5)', transition: 'border-color 0.8s ease'
                      }}
                    >
                      <AnimatePresence>
                        {isActive && layer.description && (
                           <motion.div 
                             initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}
                             style={{
                                position: 'absolute', top: '10px', 
                                right: layer.side === 'left' ? '40px' : 'auto', left: layer.side === 'left' ? 'auto' : '40px',
                                color: '#999', fontSize: '11px', fontWeight: '600', whiteSpace: 'nowrap'
                             }}
                           >
                             {layer.description}
                           </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <div className={`annotation-content ${isActive ? 'dark' : ''}`}
                      style={{
                        position: 'absolute', top: '50%', transform: 'translateY(-50%)',
                        [layer.side === 'left' ? 'right' : 'left']: `${layer.lineLen}px`,
                        background: isActive ? '#0A0A0A' : '#fff', color: isActive ? '#fff' : '#666',
                        transition: 'all 0.6s ease',
                        boxShadow: isActive ? '0 4px 15px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.02)',
                        border: isActive ? 'none' : '1px solid rgba(0,0,0,0.08)'
                      }}
                    >
                      <span style={{ 
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: isActive ? `rgba(255,255,255,0.1)` : '#f5f5f5',
                        borderRadius: '50%', width: '24px', height: '24px', transition: 'background 0.6s ease'
                      }}>
                        <LabelIcon id={layer.id} color={layer.color} isActive={isActive} />
                      </span>
                      <span style={{ textTransform: layer.id === 'oxc' ? 'lowercase' : 'uppercase', letterSpacing: layer.id === 'oxc' ? '0' : '0.5px' }}>
                        {layer.label}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
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
                     <LabelIcon id={tool.id} color={layerConfig?.color || '#000'} isActive={true} />
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
      <section className="section" style={{ background: '#fafafa', borderRadius: '40px', marginBottom: '80px' }}>
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

      {/* SVG Definitions */}
      <svg style={{ width: 0, height: 0 }}>
        <defs>
          <linearGradient id="viteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#9A30FF" offset="0%" />
            <stop stopColor="#d866ff" offset="100%" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default App;
