import capitalone from "../images/capitalone.png";
import texas from "../images/texas.png";

export const experience = [
  {
    title: "Software Engineer | Technology Development Program",
    company: "Capital One",
    logo: capitalone,
    period: "Feb 2025 - Present",
    location: "Mclean, VA",
    bullets: [
      "Contributed to the launch of Melio widgets developed with Angular on the Capital One official website for small business bank (SBB) accounts, increasing outbound digital money movement engagement rate to 56%.",
      "Spearheaded the development of live dependency tests for widgets, including creating feature toggles on Optimizely.",
      "Quarterbacked the migration of SBB's Accounts Payables Insights API from Gen2 to Gen3 to lower the blast radius of the application and reduce technical debt, by segmenting Capital One's workload environment into smaller AWS units.",
      "Configured the small business banking fraud check API to OpenTelemetry standards, enabling distributed tracing to enhance the full stack observability journey and reduce mean time to detect and repair.",
    ],
  },
  {
    title: "Software Engineer | Capital One Developer Academy",
    company: "Capital One",
    logo: capitalone,
    period: "Aug 2024 - Feb 2025",
    location: "Mclean, VA",
    bullets: [
      "Completed a 6-month intensive software engineering training focused on full stack development, AWS, DevOps, and cyber security.",
      "Built 60+ full stack applications alongside colleagues and mentors.",
    ],
  },
  {
    title: "Elements of Computing Teaching Assistant",
    company: "University of Texas at Austin",
    logo: texas,
    period: "Jan 2023 - May 2024",
    location: "Austin, TX",
    bullets: [
      "Moderated with the instructor and 11 TAs to facilitate recitations, grade programs, and address 550+ students on Introduction to Programming topics taught in Python.",
      "Fostered a collaborative learning environment over Piazza.",
    ],
  },
];
