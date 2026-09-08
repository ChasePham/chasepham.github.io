import { experience } from "../data/experience";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="kicker">
        <span className="kicker-num">02</span>
        <span>Experience</span>
      </div>
      <h2>My Professional Journey</h2>

      {experience.map(job => (
        <ExperienceItem key={job.title + job.period} {...job} />
      ))}
    </section>
  );
}

export default Experience;
