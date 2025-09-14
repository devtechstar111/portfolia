import siteMetadata from "@/data/siteMetadata";
import ExternalCard from "@/components/ExternalCard";
import { PageSEO } from "@/components/SEO";
import { InferGetStaticPropsType } from "next";
import PageTitle from "@/components/PageTitle";

export default function Projects({ allProjects }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <PageTitle>Projects</PageTitle>
      </div>
      <h2 className="text-xl font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9">
        OSS
      </h2>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 xl:text-xl">
        I help maintain these OSS projects.
      </p>
      <div className="container py-12">
        <div className="flex flex-wrap -m-4">
          {allProjects
            .filter((project) => project.projectType === "oss")
            .map(({ title, description, cover, url }) => (
              <ExternalCard
                key={title}
                title={title}
                description={description}
                imgSrc={cover.url}
                href={url}
              />
            ))}
        </div>
      </div>
      <h2 className="text-xl font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9">
        Products
      </h2>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 xl:text-xl">
        Products I helped launch.
      </p>
      <div className="container py-12">
        <div className="flex flex-wrap -m-4">
          {allProjects
            .filter((project) => project.projectType === "product")
            .map(({ title, description, cover, url }) => (
              <ExternalCard
                key={title}
                title={title}
                description={description}
                imgSrc={cover.url}
                href={url}
              />
            ))}
        </div>
      </div>
      <h2 className="text-xl font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9">
        Side gigs
      </h2>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 xl:text-xl">
        Indie maker wannabe.
      </p>
      <div className="container py-12">
        <div className="flex flex-wrap -m-4">
          {allProjects
            .filter((project) => project.projectType === "sideGig")
            .map(({ title, description, cover, url, ready }) => (
              <ExternalCard
                key={title}
                title={title}
                description={description}
                imgSrc={cover.url}
                href={ready ? url : ""}
                showLink={ready}
              />
            ))}
        </div>
      </div>
      <h2 className="text-xl font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9">
        Hobby projects
      </h2>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 xl:text-xl">
        Projects I built for my hobbies or personal needs.
      </p>
      <div className="container py-12">
        <div className="flex flex-wrap -m-4">
          {allProjects
            .filter((project) => project.projectType === "hobby")
            .map(({ title, description, cover, url, ready }) => (
              <ExternalCard
                key={title}
                title={title}
                description={description}
                imgSrc={cover.url}
                href={ready ? url : ""}
                showLink={ready}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ preview = false }) => {
  let allProjects = [];
  
  try {
    // Try to fetch from DatoCMS if available
    const { getAllProjects } = await import("@/lib/cms/datocms");
    allProjects = (await getAllProjects(preview)) || [];
  } catch (error) {
    // If DatoCMS is not available, use fallback data
    console.log("DatoCMS not available, using fallback projects data");
    allProjects = [
      {
        id: "1",
        title: "Portfolio Website",
        description: "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS",
        projectType: "product",
        ready: true,
        url: "https://github.com/LimWeiJin/portfolio-blog",
        cover: {
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
        }
      },
      {
        id: "2", 
        title: "E-commerce Platform",
        description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
        projectType: "sideGig",
        ready: true,
        url: "https://github.com/LimWeiJin/ecommerce-platform",
        cover: {
          url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
        }
      }
    ];
  }

  return {
    props: { allProjects },
    revalidate: 60,
  };
};
