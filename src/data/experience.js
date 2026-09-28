import capitalone from "../images/capitalone.png";
import texas from "../images/texas.png";

export const experience = [

  {
    title: "Software Engineer | Technology Development Program | OpenTelemetry",
    company: "Capital One",
    logo: capitalone,
    period: "Feb 2026 - Present",
    location: "Mclean, VA",
    bullets: [
      "Owned and scaled multi-tenant traces and metrics clusters in Golang and OpenTelemetry, processing 500M+ telemetry data hourly and delivering full-stack observability to engineering teams through New Relic and Observe platforms.",
      "Led the re-architecture of telemetry routing from 22 per-tenant clusters to two shared multi-tenant clusters, eliminating per-cluster upgrade and patch cycles and cutting configuration rollout time from 21+ hours to 90 minutes.",
      "Migrated all of our team’s cluster workloads to ECS Managed Instances, offloading EC2 patching and host lifecycle management to AWS while retaining full control over instance family and hardware shape.",
      "Architected event-driven failover and failback runbooks for an enterprise-scale OpenTelemetry pipeline, reducing recovery time while ensuring 99.9% data persistence and preventing large-scale telemetry loss during regional outage.",
    ],
  },
  {
    title: "Software Engineer | Technology Development Program | Small Business Banking",
    company: "Capital One",
    logo: capitalone,
    period: "Feb 2025 - Feb 2026",
    location: "Mclean, VA",
    bullets: [
      "Contributed to the launch of Melio widgets developed with Angular on the Capital One official website for small business bank (SBB) accounts to increase outbound digital money movement engagement rate to 56%",
      "Assembled a digital assistant leveraging the GenAI model Llama 4 Scout and Gradio to help architects at Capital One explore existing software as a service catalog to avoid redundant development work while maximizing existing solutions",
      "Aided the launch of Angular-based Melio widgets on Capital Ones website for small business bank accounts where it reached over 25k users and increased outbound digital money movement engagement rate to 56%",
      "Launched a Melio Fraud Processing component utilizing Python that automates instant account freezes for fraudulent payments, replacing manual fraud intervention while scaling risk posture to support projected 30% Melio usage growth",
      "Lead engineer for the Melio Fraud Processing database, leveraging a low-latency DynamoDB datastore to filter duplicate records across cross-region replication and ensure data integrity."
    ],
  },
  {
    title: "Software Engineer | Capital One Developer Academy",
    company: "Capital One",
    logo: capitalone,
    period: "Aug 2024 - Feb 2025",
    location: "Mclean, VA",
    bullets: [
      "Achieved a 6-month intensive software engineering training focused on full stack development, AWS, DevOps, and Cyber Security, where I completed 60+ full stack apps with colleagues and mentors.",
      "Redesigned an internal fargate managed app previously running on Python into Scala that supports consumption and storage of data topics from Capital Ones main data pipeline to increase message processing performance.",
      "Utilized Jira and an Agile software development framework to achieve collaboration and continual feedback with mentors"
    ],
  },
  {
    title: "Elements of Computing Teaching Assistant",
    company: "University of Texas at Austin",
    logo: texas,
    period: "Jan 2023 - May 2024",
    location: "Austin, TX",
    bullets: [
      "Moderated with instructor and 11 TAs to facilitate recitations, grade programs, and address 550+ students over Introduction to Programming topics taught in Python while fostering a collaborative learning environment over Piazza",
    ],
  },
];
