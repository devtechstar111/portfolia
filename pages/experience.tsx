import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import PageTitle from "@/components/PageTitle";

const experienceData = [
  {
    company: "Tech Solutions Inc.",
    position: "Senior Full-Stack Developer",
    location: "Kuala Lumpur, Malaysia",
    duration: "2022 - Present",
    type: "Full-time",
    description: "Leading development of enterprise web applications and mentoring junior developers. Responsible for architecture decisions and technical strategy.",
    achievements: [
      "Led a team of 5 developers in building a scalable e-commerce platform serving 100k+ users",
      "Implemented microservices architecture reducing system response time by 40%",
      "Mentored 3 junior developers, improving team productivity by 25%",
      "Introduced CI/CD pipeline reducing deployment time from 2 hours to 15 minutes"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes", "PostgreSQL"]
  },
  {
    company: "Digital Agency Co.",
    position: "Full-Stack Developer",
    location: "Petaling Jaya, Malaysia",
    duration: "2020 - 2022",
    type: "Full-time",
    description: "Developed custom web applications for various clients across different industries. Worked closely with design teams to create user-friendly interfaces.",
    achievements: [
      "Delivered 15+ client projects on time and within budget",
      "Improved website performance by 60% through optimization techniques",
      "Collaborated with UX/UI designers to create responsive web applications",
      "Implemented automated testing reducing bug reports by 50%"
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Docker", "Git", "Figma"]
  },
  {
    company: "StartupXYZ",
    position: "Frontend Developer",
    location: "Remote",
    duration: "2019 - 2020",
    type: "Full-time",
    description: "Built user interfaces for a fintech startup. Focused on creating intuitive and accessible web applications for financial services.",
    achievements: [
      "Developed responsive web application serving 10k+ active users",
      "Implemented real-time data visualization using Chart.js",
      "Collaborated with backend team to design RESTful APIs",
      "Created reusable component library improving development efficiency"
    ],
    technologies: ["React", "JavaScript", "CSS3", "Chart.js", "REST APIs", "Git"]
  },
  {
    company: "Freelance",
    position: "Web Developer",
    location: "Remote",
    duration: "2018 - 2019",
    type: "Freelance",
    description: "Provided web development services to small businesses and startups. Specialized in creating custom websites and web applications.",
    achievements: [
      "Completed 20+ freelance projects with 100% client satisfaction",
      "Built custom WordPress themes and plugins",
      "Developed e-commerce solutions for local businesses",
      "Maintained and updated existing websites for long-term clients"
    ],
    technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "MySQL"]
  }
];

const educationData = [
  {
    institution: "University of Technology Malaysia",
    degree: "Bachelor of Computer Science",
    field: "Software Engineering",
    duration: "2015 - 2019",
    location: "Johor Bahru, Malaysia",
    gpa: "3.8/4.0",
    relevantCourses: [
      "Data Structures and Algorithms",
      "Database Systems",
      "Software Engineering",
      "Web Development",
      "Computer Networks",
      "Operating Systems"
    ]
  },
  {
    institution: "Coursera",
    degree: "Professional Certificate",
    field: "Full-Stack Web Development",
    duration: "2020",
    location: "Online",
    gpa: "N/A",
    relevantCourses: [
      "HTML, CSS, and JavaScript for Web Developers",
      "Single Page Web Applications with AngularJS",
      "Server-side Development with NodeJS, Express and MongoDB",
      "Front-End Web UI Frameworks and Tools"
    ]
  }
];

const certificationsData = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAA-2023-001"
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022",
    credentialId: "GCP-PD-2022-002"
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    credentialId: "CKA-2022-003"
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
