
const products = [
  { title: 'Vite+', desc: 'Unified toolchain for modern frontend development.' },
  { title: 'Vite', desc: 'Next-gen frontend tooling for fast reload and build times.' },
  { title: 'Vitest', desc: 'Fast and modern test runner with built-in watch mode.' },
  { title: 'Rolldown', desc: 'Blazing fast JavaScript bundler with simple configuration.' },
  { title: 'Oxc', desc: 'Super-fast JS toolchain with linting, parsing, and minification.' }
];

const posts = [
  { tag: 'Announcements', title: 'Announcing Vite+ Alpha' },
  { tag: 'Ecosystem', title: 'VoidZero and npmx: Building Better Tools Together' },
  { tag: 'Updates', title: 'What’s New in ViteLand: February 2026 Recap' },
  { tag: 'Updates', title: 'What’s New in ViteLand: January 2026 Recap' }
];

export default function App() {
  return (
    <div className="page">
      <header className="hero-nav">
        <div className="brand">VoidZero</div>
        <nav className="links">
          <a href="#">Open Source</a>
          <a href="#">Blog</a>
          <a href="#">About</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">JavaScript infrastructure</p>
            <h1>The <span>JavaScript tooling</span> company</h1>
            <p className="subtitle">We build the fastest open source toolchain for modern web apps and frameworks.</p>
            <div className="cta-row">
              <button className="btn primary">Get started</button>
              <button className="btn secondary">View open source</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="stack">
              <div className="block block1">OXC</div>
              <div className="block block2">VITE</div>
              <div className="block block3">ROLLDOWN</div>
              <div className="block block4">VITEST</div>
              <div className="block block5">VITE+</div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-head">
            <p className="eyebrow">Open source</p>
            <h2>Critical infrastructure for JavaScript.</h2>
          </div>
          <div className="cards">
            {products.map((p) => (
              <article className="card" key={p.title}>
                <div className="dot" />
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section news">
          <div className="section-head">
            <p className="eyebrow">Featured resources & updates</p>
            <h2>Stay up to date with VoidZero.</h2>
          </div>
          <div className="news-list">
            {posts.map((post) => (
              <a className="news-item" href="#" key={post.title}>
                <span className="tag">{post.tag}</span>
                <span>{post.title}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
