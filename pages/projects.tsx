import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import PageTitle from "@/components/PageTitle";
import CustomLink from "@/components/CustomLink";
import Image from "next/image";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features include blog functionality, project showcase, and contact form.",
    image: "/static/images/portfolio-preview.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "Vercel"],
    liveUrl: "https://limweijin.dev",
    githubUrl: "https://github.com/devtechstar111/portfolio",
    featured: true
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration using Stripe.",
    image: "/static/images/ecommerce-preview.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    liveUrl: "#",
    githubUrl: "https://github.com/devtechstar111/ecommerce",
    featured: true
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
    image: "/static/images/taskapp-preview.png",
    technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/devtechstar111/taskapp",
    featured: false
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location-based forecasts, interactive maps, and historical data visualization.",
    image: "/static/images/weather-preview.png",
    technologies: ["React", "Chart.js", "OpenWeather API", "Leaflet", "CSS3"],
    liveUrl: "#",
    githubUrl: "https://github.com/devtechstar111/weather-dashboard",
    featured: false
  },
  {
    title: "Blog CMS",
    description: "Content management system for bloggers with markdown support, SEO optimization, and multi-author capabilities.",
    image: "/static/images/blog-cms-preview.png",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/devtechstar111/blog-cms",
    featured: false
  },
  {
    title: "API Documentation Tool",
    description: "Interactive API documentation generator with live testing capabilities, code examples, and team collaboration features.",
    image: "/static/images/api-docs-preview.png",
    technologies: ["Svelte", "FastAPI", "OpenAPI", "Docker", "Nginx"],
    liveUrl: "#",
    githubUrl: "https://github.com/devtechstar111/api-docs",
    featured: false
  }
];

export default function Projects() {
  const featuredProjects = projectsData.filter(project => project.featured);
  const otherProjects = projectsData.filter(project => !project.featured);

  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description={`Portfolio of projects and applications developed by ${siteMetadata.author}`}
      />
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <PageTitle>Projects</PageTitle>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          A collection of projects I've worked on, showcasing my skills in full-stack development, 
          modern web technologies, and problem-solving abilities.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400 text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-sm">Project Preview</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <CustomLink
                    href={project.liveUrl}
                    className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Live Demo
                  </CustomLink>
                  <CustomLink
                    href={project.githubUrl}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    View Code
                  </CustomLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div className="space-y-8 mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400 text-center">
                  <div className="text-3xl mb-2">💻</div>
                  <div className="text-sm">Project Preview</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <CustomLink
                    href={project.liveUrl}
                    className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    Live Demo
                  </CustomLink>
                  <span className="text-gray-300 dark:text-gray-600">•</span>
                  <CustomLink
                    href={project.githubUrl}
                    className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    View Code
                  </CustomLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-primary-50 dark:bg-primary-900/20 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Interested in working together?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I'm always open to discussing new projects and opportunities.
        </p>
        <CustomLink
          href="/about"
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Get in Touch
        </CustomLink>
      </div>
    </>
  );
}