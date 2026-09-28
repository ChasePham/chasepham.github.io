import portrait from "../images/IMG_7479.png"

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
            Hello World! I'm Chase, and I'm currently living near the Washington D.C area where I currently work as a Software Engineer. Prior to that, I got my bachelors from the University of Texas at Austin where i studied Neuroscience,
            and I have always had a passion for software and creating. A little about me is that I was born and raised from Houston, TX, I have a side passion for traveling, and I'm a huge music person!
          </p>
          <p>
            Feel free to shoot me with any questions and lets connect!
          </p>

          <div className="about-tags">
            <span className="tag">AI Automation</span>
            <span className="tag">REST APIs</span>
            <span className="tag">Cloud Computing</span>
            <span className="tag">Object-Oriented Programming</span>
            <span className="tag">System Design</span>
            <span className="tag">Full Stack</span>
            <span className="tag">Testing</span>
            <span className="tag">Python</span>
            <span className="tag">Java</span>
            <span className="tag">JavaScript</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Scala</span>
            <span className="tag">Go</span>
            <span className="tag">Swift</span>
            <span className="tag">Node</span>
            <span className="tag">SQL</span>
            <span className="tag">NoSQL</span>
            <span className="tag">Docker</span>
            <span className="tag">Kubernetes</span>
            <span className="tag">Terraform</span>
            <span className="tag">OpenTofu</span>
            <span className="tag">AWS</span>
            <span className="tag">Splunk</span>
            <span className="tag">Jenkins</span>
            <span className="tag">New Relic</span>
            <span className="tag">Observe</span>
            <span className="tag">Snowflake</span>
            <span className="tag">ServiceNow</span>
            <span className="tag">Claude</span>
            <span className="tag">Windsurf</span>
            <span className="tag">OpenTelemetry</span>
            <span className="tag">React</span>
            <span className="tag">Flask</span>
            <span className="tag">Express</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">Jest</span>
            <span className="tag">ScalaTest</span>
            <span className="tag">Mockito</span>
            <span className="tag">Mongoose</span>
            <span className="tag">Boto3</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
