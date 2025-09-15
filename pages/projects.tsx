import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import PageTitle from "@/components/PageTitle";
import CustomLink from "@/components/CustomLink";
import Image from "next/image";

const projectsData = [
  {
    title: "Task Management System",
    description: "A comprehensive task management application with user authentication, project tracking, and team collaboration features. Built with modern web technologies for optimal performance.",
    image: "/static/blog/over-engineering-thvu-dev/cover.jpg",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    liveUrl: "https://demo.tasklist.com.ar/login",
    githubUrl: "https://github.com/weijinlim/tasklist",
    featured: true
  },
  {
    title: "GizmoBuy E-commerce",
    description: "A modern e-commerce platform specializing in electronics and gadgets. Features include product catalog, shopping cart, payment integration, and order management system.",
    image: "/static/blog/css-in-real-world-recreate-vercel-develop-preview-ship-with-tailwind-css/cover.jpg",
    technologies: ["PHP", "MySQL", "JavaScript", "CSS3", "E-commerce"],
    liveUrl: "https://gizmobuy.com/",
    githubUrl: "https://github.com/weijinlim/portfolio",
    featured: true
  },
  {
    title: "GizmoTech Solutions",
    description: "A technology solutions website showcasing various tech services and products. Built with responsive design and modern web standards for optimal user experience.",
    image: "/static/blog/rebuild-bakia-prisma/cover.jpg",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO"],
    liveUrl: "https://gizmostech.com/",
    githubUrl: "https://github.com/weijinlim/portfolio",
    featured: false
  },
  {
    title: "FullCircle Platform",
    description: "A comprehensive business platform providing end-to-end solutions for companies. Features include project management, client communication, and business analytics.",
    image: "/static/blog/how-nextauthjs-works/cover.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "REST API"],
    liveUrl: "https://www.fullcircl.com/",
    githubUrl: "https://github.com/weijinlim/portfolio",
    featured: false
  },
  {
    title: "CRM Workspace",
    description: "A customer relationship management system designed for businesses to manage their client interactions, sales pipeline, and customer data effectively.",
    image: "/static/blog/nextauthjs-behinds-a-proxy/cover.jpg",
    technologies: ["Vue.js", "Laravel", "MySQL", "Bootstrap", "Chart.js"],
    liveUrl: "https://app.crmworkspace.com/users/login",
    githubUrl: "https://github.com/weijinlim/portfolio",
    featured: false
  },
  {
    title: "Crypto Analytics Dashboard",
    description: "A cryptocurrency market analysis platform providing real-time data, price tracking, and market insights. Integrated with multiple crypto APIs for comprehensive data.",
    image: "/static/images/social-banner.png",
    technologies: ["React", "TypeScript", "Chart.js", "REST API", "WebSocket"],
    liveUrl: "https://www.coingecko.com/",
    githubUrl: "https://github.com/weijinlim/portfolio",
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-3">
                    <CustomLink
                      href={project.liveUrl}
                      className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full font-semibold hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </CustomLink>
                    {index === 0 && (
                      <CustomLink
                        href={project.githubUrl}
                        className="inline-flex items-center px-6 py-3 bg-gray-900/90 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-gray-900 hover:scale-105 transition-all duration-300 shadow-xl"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Code
                      </CustomLink>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
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

      {/* Other Projects */}
      <div className="space-y-8 mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-400 hover:-translate-y-1">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <CustomLink
                    href={project.liveUrl}
                    className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full font-medium hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Demo
                  </CustomLink>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium shadow-sm">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
            ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-2xl p-12 text-center border border-primary-200 dark:border-primary-700">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Ready to bring your ideas to life?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            I'm passionate about creating exceptional digital experiences. Let's collaborate on your next project and turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CustomLink
              href="/about"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Let's Talk
            </CustomLink>
            <CustomLink
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-xl font-semibold hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </CustomLink>
          </div>
        </div>
      </div>
    </>
  );
}