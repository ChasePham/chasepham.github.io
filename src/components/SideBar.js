function SideBar({ navOpen, onToggle }) {
  return (
    <aside className="sidebar" aria-label="Section navigation">
      <div className="sidebar-head">
        <a href="#about" className="monogram" title="Top">CP</a>

        <button
          className="sidebar-toggle"
          onClick={onToggle}
          aria-label={navOpen ? "Collapse navigation" : "Expand navigation"}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2"
               strokeLinecap="square" strokeLinejoin="miter">
            <rect x="3" y="3" width="18" height="18" />
            <path d="M9 3v18" />
            <path d="M17 12H12" />
            <path d="M14 9l-3 3 3 3" />
          </svg>
        </button>
      </div>

      <div className="sidebar-intro">
        <h1>Chase<br />Pham</h1>
        <p>Software Engineer</p>
      </div>

      <nav className="sidebar-nav">
        <a href="#about"><span className="num">01</span><span className="label">About</span></a>
        <a href="#experience"><span className="num">02</span><span className="label">Experience</span></a>
        <a href="#reel"><span className="num">03</span><span className="label">Reel</span></a>
        <a href="#resume"><span className="num">04</span><span className="label">Resume</span></a>
        <a href="#contact"><span className="num">05</span><span className="label">Contact</span></a>
      </nav>

      <div className="sidebar-links">
        <a href="mailto:chasejpham@gmail.com">chasejpham@gmail.com</a>
        <a href="https://www.linkedin.com/in/chasepham/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="https://github.com/ChasePham" target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </aside>
  );
}

export default SideBar;
