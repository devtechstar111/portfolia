import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import PageTitle from "@/components/PageTitle";

const experienceData = [
  {
    company: "Wolfpack Digital",
    position: "Senior Full-Stack Developer",
    location: "Cluj-Napoca, Romania (Remote Collaboration)",
    duration: "2023 - Present",
    type: "Full-time",
    description: "Leading development of AI-powered learning platform with real-time recommendations and personalized course suggestions, integrating Open AI GPT APIs and recommendation engines.",
    achievements: [
      "Built scalable microservices-based backend in Node.js + PostgreSQL, deployed on AWS ECS with CI/CD pipelines, improving system reliability and reducing deployment time by 40%",
      "Developed responsive React + Next.js dashboards with advanced data visualization (Recharts/D3.js) for educational analytics and progress tracking",
      "Optimized database queries and caching layers (Redis) that improved backend performance by ~65%",
      "Mentored junior developers in React patterns, Git workflows, and clean API design"
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS ECS", "Redis", "D3.js", "Recharts", "OpenAI API"]
  },
  {
    company: "OST Agency",
    position: "Full-Stack Developer (Contract)",
    location: "London, UK (Remote)",
    duration: "2019 - 2021",
    type: "Contract",
    description: "Developed AI Assistant Platform for enterprise clients, integrating chatbots, NLP models, and speech-to-text services (Google Dialogflow, OpenAI, Twilio).",
    achievements: [
      "Built scalable backend using Express.js, GraphQL, and MongoDB, designed to handle 100k+ concurrent requests",
      "Implemented real-time communication features using WebSockets and SignalR for live chat and support dashboards",
      "Built admin dashboards and client-facing portals using React + Redux, ensuring mobile responsiveness and accessibility compliance (WCAG 2.1)",
      "Introduced CI/CD automation and Dockerized development, reducing environment setup time by 70%"
    ],
    technologies: ["Express.js", "GraphQL", "MongoDB", "React", "Redux", "WebSockets", "SignalR", "Google Dialogflow", "OpenAI", "Twilio", "Docker"]
  },
  {
    company: "The Brick Factory",
    position: "Full-Stack Developer",
    location: "Washington, DC, USA (Remote Collaboration)",
    duration: "2017 - 2019",
    type: "Full-time",
    description: "Delivered multiple enterprise and nonprofit web solutions, including CMS-driven websites and campaign tools.",
    achievements: [
      "Built modular WordPress + custom PHP plugins, later migrating clients to Node.js/React stacks for scalability",
      "Designed RESTful APIs and integrated with Salesforce, HubSpot, and third-party CRMs for marketing automation",
      "Implemented Elasticsearch for content-heavy sites, reducing search latency from seconds to milliseconds",
      "Collaborated with cross-functional teams in Agile sprints, consistently delivering features ahead of deadlines"
    ],
    technologies: ["WordPress", "PHP", "Node.js", "React", "Elasticsearch", "Salesforce", "HubSpot", "REST APIs", "Agile"]
  }
];

const educationData = [
  {
    institution: "University of Malaya",
    degree: "Bachelor of Science",
    field: "Computer Science",
    duration: "2012 - 2017",
    location: "Kuala Lumpur, Malaysia",
    gpa: "N/A",
    relevantCourses: [
      "Data Structures and Algorithms",
      "Database Systems",
      "Software Engineering",
      "Web Development",
      "Computer Networks",
      "Operating Systems",
      "Machine Learning",
      "Artificial Intelligence"
    ]
  }
];

const certificationsData = [
  {
    name: "AWS Certified Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAA-2023"
  },
  {
    name: "Certified Kubernetes Application Developer (CKAD)",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    credentialId: "CKAD-2022"
  },
  {
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2022",
    credentialId: "AZ-204-2022"
  }
];

export default function Experience() {
  return (
    <>
      <PageSEO
        title={`Experience - ${siteMetadata.author}`}
        description={`Professional experience and background of ${siteMetadata.author}`}
      />
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <PageTitle>Experience</PageTitle>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          My professional journey in software development, showcasing growth, achievements, and continuous learning.
        </p>
      </div>

      {/* Work Experience */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Work Experience</h2>
        <div className="space-y-8">
          {experienceData.map((job, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {job.position}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                    {job.company}
                  </p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 md:text-right">
                  <div>{job.duration}</div>
                  <div>{job.location}</div>
                  <div className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs mt-1">
                    {job.type}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {job.description}
              </p>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  {job.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-8 mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Education</h2>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 md:text-right">
                  <div>{edu.duration}</div>
                  <div>{edu.location}</div>
                  {edu.gpa !== "N/A" && (
                    <div className="font-medium">GPA: {edu.gpa}</div>
                  )}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCourses.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="space-y-8 mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {cert.name}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                {cert.issuer}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Issued: {cert.date}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Credential ID: {cert.credentialId}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
