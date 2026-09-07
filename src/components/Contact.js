import resume from "../data/chasepham_resume.pdf";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="contact-main">
        <div className="kicker">
          <span className="kicker-num">05</span>
          <span>Contact</span>
        </div>
        <h2>Tell me what you're building.</h2>

        <a className="contact-email" href="mailto:chase9659@gmail.com">
          chase9659@gmail.com
        </a>
      </div>

      <div className="contact-links">
        <a href="https://www.linkedin.com/in/chasepham/" target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a href="https://github.com/ChasePham" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={resume} download="Chase-Pham-Resume.pdf">
          Resume ↓
        </a>
      </div>
    </section>
  );
}

export default Contact;
