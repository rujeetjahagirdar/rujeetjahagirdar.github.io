import project1 from "../assets/assets/projects/leetcode.png";
import project2 from "../assets/assets/projects/llm.jpg";
import project3 from "../assets/assets/projects/chatbot.jpg";
import project4 from "../assets/assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a Software Developer with 3+ years of experience in backend development, API integration, and scalable ML solutions along with 2 years of Masters in CS. Proficient in Python, Java, JavaScript, and RESTful APIs, with a strong focus on building secure, reliable applications and optimizing system performance. Skilled in collaborative, fast-paced environments with expertise in both server-side development and system design.`;

export const ABOUT_TEXT = `I am a dedicated software developer based in San Jose, CA, with a strong focus on building secure and scalable applications. My background includes a Master's in Computer Science, where I honed skills in distributed systems and cloud computing. Proficient in Python, Java, Golang, and JavaScript, I have experience leveraging frameworks like React, Flask, and FastAPI. My passion lies in backend development, system design, and applying machine learning techniques to create innovative solutions. When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Jan 2025",
    role: "Software Developer",
    company: "SwipeSwipe Inc.",
    description: `Developed a highly available backend system using Python and Flask to support scalable REST APIs for real-time product recommendations, improving response time by 30%. Built and integrated web services using JSON and REST APIs, ensuring seamless data exchange. Designed and implemented a collaborative filtering-based recommendation engine, leveraging AI techniques to identify cost-effective alternatives. Engineered backend database structures in MongoDB to store and retrieve large-scale e-commerce data, optimizing query performance, and led full-stack development efforts using ReactJS, JavaScript, and AWS services.`,
    technologies: ["Python", "Flask", "JavaScript", "ReactJS", "MongoDB", "AWS", "LLM", "OpenAI"],
  },
  {
    year: "June 2019 - March 2022",
    role: "System Engineer (Backend Engineering)",
    company: "PNC Bank (Tata Consultancy Services)",
    description: `Designed and deployed scalable ETL pipelines using Python and Spark, improving data processing efficiency by 25%. Automated data workflows using Bash scripts, reducing manual intervention. Collaborated with cross-functional teams in an Agile environment to ensure data traceability and quality, leveraging SQL and data modeling techniques for critical analysis. Worked on integration workflows and build systems to streamline data pipeline processes and ensure operational reliability.`,
    technologies: ["Python", "Scala", "Spark", "Hadoop", "MySQL", "Impala", "Teradata", "Data Modeling"],
  },
  // {
  //   year: "XXXX - XXXX",
  //   role: "Placeholder Role",
  //   company: "Placeholder Company",
  //   description: `Placeholder description for a previous role or experience. Please update with actual details if available.`,
  //   technologies: ["Placeholder Tech 1", "Placeholder Tech 2"],
  // },
  // {
  //   year: "XXXX - XXXX",
  //   role: "Placeholder Role",
  //   company: "Placeholder Company",
  //   description: `Placeholder description for another previous role or experience. Please update with actual details if available.`,
  //   technologies: ["Placeholder Tech 1", "Placeholder Tech 2"],
  // },
];

export const PROJECTS = [
  {
    title: "LeetCode Helper",
    image: project1,
    description:
      "Developed a full stack application using ReactJS, JavaScript, Flask, and OpenAI GPT to enhance coding practice on LeetCode by integrating efficient REST APIs for real-time solution generation, boosting user productivity.",
    technologies: ["ReactJS", "JavaScript", "Flask", "Python", "OpenAI GPT", "REST API", "LLM"],
  },
  {
    title: "LLM Based Code Document Generator",
    image: project2,
    description:
      "Designed and implemented a scalable API using Flask, AST, and OpenAI GPT to automate the generation of high-quality Python docstrings, ensuring maintainability and adherence to modern software development practices.",
    technologies: ["Flask", "Python", "OpenAI GPT", "REST API", "LLM", "AST"],
  },
  {
    title: "Hospital Chatbot System",
    image: project3,
    description:
      "Built an AI-powered hospital system chatbot using LangChain and Neo4j, improving patient inquiry response times by 40% and reducing query response time by 30% through optimized data integration and real-time interactions.",
    technologies: ["Python", "LangChain", "Neo4j AuraDB", "Graph Databases", "RAG", "Streamlit"],
  },
  // {
  //   title: "Placeholder Project",
  //   image: project4,
  //   description:
  //     "Placeholder description for an additional project. Please replace with actual project details if available.",
  //   technologies: ["Placeholder Tech 1", "Placeholder Tech 2"],
  // },
];

export const CONTACT = {
  address: "San Jose, CA",
  phoneNo: "XXX-XXX-XXXX",
  email: "rujeet.jaha@gmail.com",
};
