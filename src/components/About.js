import portrait from "../images/portrait.png"
function About() {
  return (
    <section id="about" className="section">
      <div className="kicker"><span className="kicker-num">01</span><span>About</span></div>

      <h2 className="about-headline">
        Software engineer at Capital One, working across the full stack.
      </h2>

      <div className="about-body">
        <figure className="about-portrait">
          <img src={portrait} alt="Chase Pham"/>
        </figure>

        <div className="about-text">
          <p>
            Currently working at Capital One in DC as a software engineer focused on
            full-stack development. I recently graduated from the University of Texas
            at Austin, where I studied neuroscience alongside programming.
          </p>
          <p>
            Most of my learning has come from tinkering on a wide range of projects and
            networking with other like-minded engineers. I'm always looking for new ways
            to expand my skillset.
          </p>

          <div className="about-tags">
            <span className="tag">React</span>
            <span className="tag">Java</span>
            <span className="tag">Python</span>
            <span className="tag">Go</span>
            <span className="tag">JavaScript</span> 

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
