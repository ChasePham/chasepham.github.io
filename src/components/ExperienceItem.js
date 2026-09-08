function ExperienceItem({ title, company, period, location, bullets, logo }) {
  return (
    <article className="experience-item">
      <div className="experience-period">
        <span>{period}</span>
        {logo && <img className="experience-logo" src={logo} alt={company} />}
      </div>

      <div className="experience-detail">
        <h3>{title} · {company}</h3>
        <p className="experience-location">{location}</p>

        {bullets && (
          <ul className="experience-bullets">
            {bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
          </ul>
        )}
      </div>
    </article>
  );
}

export default ExperienceItem;
