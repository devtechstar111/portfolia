import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import PageTitle from "@/components/PageTitle";
import CustomLink from "@/components/CustomLink";
import Image from "next/image";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features include blog functionality, project showcase, and contact form.",
    image: "/static/images/logo.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "Vercel"],
    liveUrl: "https://limweijin.dev",
    githubUrl: "https://github.com/devtechstar111/portfolio",
    featured: true
  },
  {
    title: "CSS in Real World - Vercel Clone",
    description: "Recreated Vercel's develop, preview, and ship workflow using Tailwind CSS. A comprehensive guide to modern CSS techniques and responsive design patterns.",
    image: "/static/blog/css-in-real-world-recreate-vercel-develop-preview-ship-with-tailwind-css/css-in-real-world-verccel-hero-tailwind-css.png",
    technologies: ["Tailwind CSS", "Next.js", "CSS3", "Responsive Design", "Vercel"],
    liveUrl: "https://limweijin.dev/blog/css-in-real-world-recreate-vercel-develop-preview-ship-with-tailwind-css",
    githubUrl: "https://github.com/devtechstar111/portfolio",
    featured: true
  },
  {
    title: "Fullstack Workflow with Prisma",
    description: "Complete full-stack development workflow using Prisma and PlanetScale in Next.js. Includes database management, API development, and deployment strategies.",
    image: "/static/blog/develop-a-fullstack-workflow-with-prisma-and-planetscale-in-nextjs/develop-a-fullstack-workflow-with-prisma-and-planetscale-in-nextjs.png",
    technologies: ["Next.js", "Prisma", "PlanetScale", "TypeScript", "MySQL"],
    liveUrl: "https://limweijin.dev/blog/develop-a-fullstack-workflow-with-prisma-and-planetscale-in-nextjs",
    githubUrl: "https://github.com/devtechstar111/portfolio",
    featured: true
  },
  {
    title: "Over-engineering Portfolio",
    description: "A deep dive into the technical decisions and architecture behind building a modern portfolio website. Covers performance optimization, SEO, and developer experience.",
    image: "/static/blog/over-engineering-thvu-dev/over-engineering-thvu-dev.png",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel", "SEO"],
    liveUrl: "https://limweijin.dev/blog/over-engineering-thvu-dev",
    githubUrl: "https://github.com/devtechstar111/portfolio",
    featured: false
  },
  {
    title: "NextAuth.js Implementation",
    description: "Comprehensive guide to implementing authentication in Next.js applications using NextAuth.js. Covers OAuth providers, database sessions, and security best practices.",
    image: "/static/images/logo.png",
    technologies: ["NextAuth.js", "Next.js", "OAuth", "Security", "TypeScript"],
    liveUrl: "https://limweijin.dev/blog/how-nextauthjs-works",
    githubUrl: "https://github.com/devtechstar111/portfolio",
    featured: false
  },
  {
    title: "Prisma Database Migration",
    description: "Step-by-step guide to migrating and rebuilding database schemas using Prisma. Includes data migration strategies and best practices for production deployments.",
    image: "/static/blog/rebuild-bakia-prisma/rebuild-bakia-prisma.png",
    technologies: ["Prisma", "Database", "Migration", "TypeScript", "PostgreSQL"],
    liveUrl: "https://limweijin.dev/blog/rebuild-bakia-prisma",
    githubUrl: "https://github.com/devtechstar111/portfolio",
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
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <CustomLink
                        href={project.liveUrl}
                        className="inline-flex items-center px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        Live Demo
                      </CustomLink>
                      <CustomLink
                        href={project.githubUrl}
                        className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        View Code
                      </CustomLink>
                    </div>
                  </div>
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
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </CustomLink>
                  <CustomLink
                    href={project.githubUrl}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
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
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow group">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <CustomLink
                        href={project.liveUrl}
                        className="inline-flex items-center px-3 py-1 bg-white text-gray-900 rounded text-sm hover:bg-gray-100 transition-colors"
                      >
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo
                      </CustomLink>
                      <CustomLink
                        href={project.githubUrl}
                        className="inline-flex items-center px-3 py-1 bg-gray-900 text-white rounded text-sm hover:bg-gray-800 transition-colors"
                      >
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </CustomLink>
                    </div>
                  </div>
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
                    className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center"
                  >
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </CustomLink>
                  <span className="text-gray-300 dark:text-gray-600">•</span>
                  <CustomLink
                    href={project.githubUrl}
                    className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center"
                  >
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
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