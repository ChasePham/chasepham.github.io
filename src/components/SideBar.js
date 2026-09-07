function SideBar() {
  return (
    <aside className="sidebar" aria-label="Section navigation">
      <div className="sidebar-head">
        <a href="#about" className="monogram">CP</a>
      </div>

      <div className="sidebar-intro">
        <h1>Chase<br />Pham</h1>
        <p>Software Engineer</p>
      </div>

      <nav className="sidebar-nav">
        <a href="#about"><span className="num">01</span><span>About</span></a>
        <a href="#experience"><span className="num">02</span><span>Experience</span></a>
        <a href="#reel"><span className="num">03</span><span>Reel</span></a>
        <a href="#resume"><span className="num">04</span><span>Resume</span></a>
        <a href="#contact"><span className="num">05</span><span>Contact</span></a>
      </nav>

      <div className="sidebar-links">
      </div>
    </aside>
  );
}

export default SideBar;
