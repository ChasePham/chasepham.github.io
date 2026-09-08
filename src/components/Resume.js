import resume from "../data/chasepham_resume.pdf";

function Resume() {
  return (
    <section id="resume" className="section">
      <div className="resume-head">
        <div>
          <div className="kicker">
            <span className="kicker-num">04</span>
            <span>Resume</span>
          </div>
          <h2>The one-pager</h2>
        </div>

        <a className="btn btn-primary" href={resume} download="Chase-Pham-Resume.pdf">
          Download PDF ↓
        </a>
      </div>

      <div className="resume-preview">
        <object data={resume} type="application/pdf" aria-label="Chase Pham resume">
          <p>
            Your browser can't display PDFs inline.{" "}
            <a href={resume} target="_blank" rel="noreferrer">Open the resume in a new tab</a>.
          </p>
        </object>
      </div>
    </section>
  );
}

export default Resume;
