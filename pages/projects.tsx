import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import PageTitle from "@/components/PageTitle";
import CustomLink from "@/components/CustomLink";
import Image from "next/image";
import { useState } from "react";

const projectsData = [
  {
    title: "Task Management System",
    description: "TaskList CRM – Simplified Client and Project Management platform built to help businesses manage clients, projects, tasks, and leads efficiently.",
    image: "/static/images/demo1.png",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    liveUrl: "https://demo.tasklist.com.ar/login",
    githubUrl: "https://github.com/weijinlim/tasklist",
    category: "web",
    status: "completed",
    date: "January 1, 2023 - December 31, 2023",
    featured: true
  },
  {
    title: "GizmoBuy E-commerce",
    description: "A gadget store offering a personalized recommendation system, allowing customers to find tech items based on their preferences.",
    image: "/static/images/demo2.png",
    technologies: ["Vue.js", "Node.js", "MongoDB", "JavaScript"],
    liveUrl: "https://gizmobuy.com/",
    githubUrl: "https://github.com/weijinlim/portfolio",
    category: "web",
    status: "completed",
    date: "January 1, 2022 - December 31, 2022",
    featured: true
  },
  {
    title: "GizmoTech Solutions",
    description: "A marketplace for electronic gadgets and tech accessories, featuring secure payments and order tracking.",
    image: "/static/images/demo3.png",
    technologies: ["React", "Node.js", "MongoDB", "JavaScript"],
    liveUrl: "https://gizmostech.com/",
    githubUrl: "https://github.com/weijinlim/portfolio",
    category: "web",
    status: "completed",
    date: "June 1, 2021 - June 30, 2022",
    featured: false
  },
  {
    title: "FullCircle Platform",
    description: "A customer lifecycle management platform that provides real-time insights and analytics to help businesses improve customer engagement and retention.",
    image: "/static/images/demo4.png",
    technologies: ["React", "Node.js", "PostgreSQL", "AI Integration"],
    liveUrl: "https://www.fullcircl.com/",
    githubUrl: "https://github.com/weijinlim/portfolio",
    category: "ai",
    status: "completed",
    date: "January 1, 2021 - December 31, 2022",
    featured: false
  },
  {
    title: "CRM Workspace",
    description: "A platform focused on streamlining client management, project tracking, and communication for businesses with financial dashboard and chat functionality.",
    image: "/static/images/demo5.png",
    technologies: ["React", "Node.js", "MongoDB", "PostgreSQL"],
    liveUrl: "https://app.crmworkspace.com/users/login",
    githubUrl: "https://github.com/weijinlim/portfolio",
    category: "web",
    status: "completed",
    date: "September 1, 2020 - December 31, 2021",
    featured: false
  },
  {
    title: "Crypto Analytics Dashboard",
    description: "A cryptocurrency tracking platform offering market data, charts, and coin analysis with real-time charts and chat functionality.",
    image: "/static/images/demo6.png",
    technologies: ["React", "Node.js", "MongoDB", "Blockchain"],
    liveUrl: "https://www.coingecko.com/",
    githubUrl: "https://github.com/weijinlim/portfolio",
    category: "blockchain",
    status: "completed",
    date: "March 1, 2020 - March 31, 2021",
    featured: false
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "ai", label: "AI" },
    { id: "devops", label: "DevOps" },
    { id: "blockchain", label: "Blockchain" }
  ];

  const filteredProjects = projectsData.filter(project => 
    selectedCategory === "all" || project.category === selectedCategory
  );

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "name") {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === "status") {
      return a.status.localeCompare(b.status);
    }
    // Default to date sorting
    return new Date(b.date.split(" - ")[0]).getTime() - new Date(a.date.split(" - ")[0]).getTime();
  });

  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description={`Portfolio of projects and applications developed by ${siteMetadata.author}`}
      />
      
      {/* Header */}
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <PageTitle>My Projects</PageTitle>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          A collection of projects that showcase my skills in full-stack development, AI integration, DevOps, and modern web technologies.
        </p>
      </div>

      {/* Controls */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredProjects.length} projects
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border-0 focus:ring-2 focus:ring-primary-500"
          >
            <option value="date">Sort by Date</option>
            <option value="name">Sort by Name</option>
            <option value="status">Sort by Status</option>
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProjects.map((project, index) => (
          <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Image Container */}
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay with badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full text-xs font-semibold uppercase tracking-wide">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-green-500/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold uppercase tracking-wide">
                  {project.status}
                </span>
              </div>

              {/* Hover overlay with buttons */}
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
                    Live
                  </CustomLink>
                  {index === 0 && (
                    <CustomLink
                      href={project.githubUrl}
                      className="inline-flex items-center px-6 py-3 bg-gray-900/90 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-gray-900 hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </CustomLink>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Date */}
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {project.date}
              </div>
            </div>
          </div>
        ))}
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