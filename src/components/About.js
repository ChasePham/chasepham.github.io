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
            <span className="tag">Java</span>
            <span className="tag">Python</span>
            <span className="tag">Go</span>
            <span className="tag">JavaScript</span> 
            <span className="tag">TypeScript</span>
            <span className="tag">Scala</span>
            <span className="tag">Swift</span>
            <span className="tag">React</span>
            <span className="tag">SQL</span>
            <span className="tag">NoSQL</span>
            <span className="tag">Docker</span>
            <span className="tag">OpenTelemetry</span>
            <span className="tag">Software Observability</span>
            <span className="tag">Observe</span>
            <span className="tag">Snowflake</span>
            <span className="tag">New Relic</span>
            <span className="tag">Splunk</span>
            <span className="tag">ServiceNow</span>
            <span className="tag">Claude</span>
            <span className="tag">AWS</span>
            <span className="tag">ECS</span>
            <span className="tag">DynamoDB</span>
            <span className="tag">Fargate</span>
            <span className="tag">Lambda</span>
            <span className="tag">Kubernetes</span>
            <span className="tag">Jenkins</span>
            <span className="tag">Node</span>
            <span className="tag">GRPC</span>
            <span className="tag">Cloud Computing</span>
            <span className="tag">Full Stack Development</span>
            <span className="tag">Agile Development</span>
            <span className="tag">AI Automation</span>
            <span className="tag">DevOps</span>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
