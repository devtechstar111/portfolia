import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import PageTitle from "@/components/PageTitle";

const skillsData = {
  categories: [
    {
      name: "Frontend Development",
      count: 8,
      description: "User interface development, responsive design, and client-side technologies",
      skills: [
        { name: "React", level: "Expert", years: 4 },
        { name: "Next.js", level: "Expert", years: 3 },
        { name: "TypeScript", level: "Expert", years: 3 },
        { name: "JavaScript", level: "Advanced", years: 5 },
        { name: "HTML/CSS", level: "Advanced", years: 6 },
        { name: "Tailwind CSS", level: "Advanced", years: 2 },
        { name: "Vue.js", level: "Intermediate", years: 2 },
        { name: "Svelte", level: "Intermediate", years: 1 },
      ]
    },
    {
      name: "Backend Development",
      count: 6,
      description: "Server-side development, APIs, and backend architecture",
      skills: [
        { name: "Node.js", level: "Expert", years: 4 },
        { name: "Express.js", level: "Advanced", years: 3 },
        { name: "Python", level: "Advanced", years: 3 },
        { name: "FastAPI", level: "Advanced", years: 2 },
        { name: "PHP", level: "Intermediate", years: 2 },
        { name: "Laravel", level: "Intermediate", years: 1 },
      ]
    },
    {
      name: "Database Development",
      count: 4,
      description: "Data storage, management, and optimization",
      skills: [
        { name: "PostgreSQL", level: "Advanced", years: 3 },
        { name: "MongoDB", level: "Advanced", years: 2 },
        { name: "MySQL", level: "Intermediate", years: 2 },
        { name: "Redis", level: "Intermediate", years: 1 },
      ]
    },
    {
      name: "DevOps & Cloud",
      count: 5,
      description: "Infrastructure, deployment, monitoring, and automation",
      skills: [
        { name: "Docker", level: "Advanced", years: 3 },
        { name: "AWS", level: "Advanced", years: 2 },
        { name: "Vercel", level: "Advanced", years: 2 },
        { name: "GitHub Actions", level: "Intermediate", years: 2 },
        { name: "Kubernetes", level: "Intermediate", years: 1 },
      ]
    },
    {
      name: "Tools & Others",
      count: 4,
      description: "Development tools, version control, and productivity software",
      skills: [
        { name: "Git", level: "Expert", years: 5 },
        { name: "VS Code", level: "Advanced", years: 4 },
        { name: "Figma", level: "Intermediate", years: 2 },
        { name: "Linux", level: "Intermediate", years: 3 },
      ]
    }
  ]
};

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "Advanced":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

export default function Skills() {
  const totalTechnologies = skillsData.categories.reduce((sum, category) => sum + category.count, 0);
  const expertCount = skillsData.categories.reduce((sum, category) => 
    sum + category.skills.filter(skill => skill.level === "Expert").length, 0
  );
  const advancedCount = skillsData.categories.reduce((sum, category) => 
    sum + category.skills.filter(skill => skill.level === "Advanced").length, 0
  );
  const intermediateCount = skillsData.categories.reduce((sum, category) => 
    sum + category.skills.filter(skill => skill.level === "Intermediate").length, 0
  );

  return (
    <>
      <PageSEO
        title={`Skills - ${siteMetadata.author}`}
        description={`Technical skills and expertise of ${siteMetadata.author}`}
      />
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <PageTitle>Technical Skills</PageTitle>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          A comprehensive overview of my technical expertise across different domains. I continuously learn and adapt to new technologies to stay current with industry trends.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{totalTechnologies}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400">{expertCount}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Expert Level</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{skillsData.categories.length}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">5+</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Years Total</div>
        </div>
      </div>

      {/* Skills Categories */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Skill Categories</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Click on any category to explore the technologies and tools I use in that domain.
        </p>

        {skillsData.categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {category.count} technologies
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Expert: {category.skills.filter(s => s.level === "Expert").length} | 
                  Advanced: {category.skills.filter(s => s.level === "Advanced").length} | 
                  Intermediate: {category.skills.filter(s => s.level === "Intermediate").length}
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {category.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">{skill.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{skill.years} years</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
