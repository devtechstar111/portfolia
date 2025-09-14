import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import PageTitle from "@/components/PageTitle";

const educationData = [
  {
    institution: "University of Technology Malaysia",
    degree: "Bachelor of Computer Science",
    field: "Software Engineering",
    duration: "2015 - 2019",
    location: "Johor Bahru, Malaysia",
    gpa: "3.8/4.0",
    description: "Comprehensive computer science program focusing on software engineering, algorithms, and system design.",
    relevantCourses: [
      "Data Structures and Algorithms",
      "Database Systems",
      "Software Engineering",
      "Web Development",
      "Computer Networks",
      "Operating Systems",
      "Machine Learning",
      "Computer Graphics",
      "Software Testing",
      "Project Management"
    ],
    achievements: [
      "Graduated Magna Cum Laude",
      "Dean's List for 6 consecutive semesters",
      "Final Year Project: AI-powered recommendation system",
      "Active member of Computer Science Society"
    ]
  },
  {
    institution: "Coursera",
    degree: "Professional Certificate",
    field: "Full-Stack Web Development",
    duration: "2020",
    location: "Online",
    gpa: "N/A",
    description: "Comprehensive program covering modern web development technologies and best practices.",
    relevantCourses: [
      "HTML, CSS, and JavaScript for Web Developers",
      "Single Page Web Applications with AngularJS",
      "Server-side Development with NodeJS, Express and MongoDB",
      "Front-End Web UI Frameworks and Tools",
      "Multiplatform Mobile App Development with Web Technologies",
      "Server-side Development with NodeJS, Express and MongoDB"
    ],
    achievements: [
      "Completed with distinction",
      "Built 5+ portfolio projects",
      "Gained hands-on experience with modern frameworks"
    ]
  },
  {
    institution: "edX",
    degree: "MicroMasters Program",
    field: "Artificial Intelligence",
    duration: "2021",
    location: "Online",
    gpa: "N/A",
    description: "Advanced program covering machine learning, deep learning, and AI applications.",
    relevantCourses: [
      "Introduction to Artificial Intelligence",
      "Machine Learning Fundamentals",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning"
    ],
    achievements: [
      "Completed all 6 courses",
      "Final project: Image classification system",
      "Gained expertise in TensorFlow and PyTorch"
    ]
  }
];

const certificationsData = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAA-2023-001",
    description: "Validates ability to design distributed systems on AWS",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"]
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022",
    credentialId: "GCP-PD-2022-002",
    description: "Demonstrates expertise in developing and deploying applications on Google Cloud",
    skills: ["Google Cloud Platform", "App Development", "DevOps", "Microservices"]
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    credentialId: "CKA-2022-003",
    description: "Validates ability to design, install, configure, and manage Kubernetes clusters",
    skills: ["Kubernetes", "Container Orchestration", "DevOps", "Cloud Native"]
  },
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2021",
    credentialId: "AZ-900-2021-004",
    description: "Validates foundational knowledge of cloud services and Azure",
    skills: ["Azure Services", "Cloud Computing", "Security", "Compliance"]
  }
];

const awardsData = [
  {
    title: "Best Final Year Project",
    organization: "University of Technology Malaysia",
    year: "2019",
    description: "Awarded for developing an AI-powered recommendation system for e-commerce platforms"
  },
  {
    title: "Outstanding Academic Performance",
    organization: "Computer Science Department",
    year: "2018",
    description: "Recognized for maintaining high GPA and active participation in academic activities"
  },
  {
    title: "Hackathon Winner",
    organization: "TechFest Malaysia",
    year: "2018",
    description: "First place in 48-hour hackathon for developing a real-time collaboration tool"
  }
];

export default function Education() {
  return (
    <>
      <PageSEO
        title={`Education - ${siteMetadata.author}`}
        description={`Educational background and academic achievements of ${siteMetadata.author}`}
      />
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <PageTitle>Education</PageTitle>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          My educational journey and continuous learning in computer science, software engineering, and emerging technologies.
        </p>
      </div>

      {/* Academic Education */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Academic Education</h2>
        <div className="space-y-8">
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
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {edu.description}
              </p>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  {edu.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
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

      {/* Professional Certifications */}
      <div className="space-y-8 mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Professional Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {cert.name}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                {cert.issuer}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {cert.description}
              </p>
              <div className="mb-3">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2 text-sm">Skills Validated:</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                <div>Issued: {cert.date}</div>
                <div>Credential ID: {cert.credentialId}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="space-y-8 mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Awards & Recognition</h2>
        <div className="space-y-4">
          {awardsData.map((award, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {award.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {award.organization}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {award.description}
                  </p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  {award.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Continuous Learning */}
      <div className="mt-16 bg-primary-50 dark:bg-primary-900/20 rounded-lg p-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Continuous Learning
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I believe in lifelong learning and staying updated with the latest technologies and industry trends. 
          I regularly participate in online courses, attend tech conferences, and contribute to open-source projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">50+</div>
            <div className="text-gray-600 dark:text-gray-400">Online Courses Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">10+</div>
            <div className="text-gray-600 dark:text-gray-400">Tech Conferences Attended</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">5+</div>
            <div className="text-gray-600 dark:text-gray-400">Open Source Contributions</div>
          </div>
        </div>
      </div>
    </>
  );
}
