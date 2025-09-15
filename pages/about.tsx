import siteMetadata from "@/data/siteMetadata";
import SocialIcon from "@/components/SocialIcon";
import { PageSEO } from "@/components/SEO";
import Image from "next/image";
import { InferGetStaticPropsType } from "next";
import PageTitle from "@/components/PageTitle";

export default function About({ about }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { name, title, profilepicture, content, updatedAt } = about;

  return (
    <>
      <PageSEO
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
      />
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <PageTitle>About</PageTitle>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center xl:items-start pt-8 xl:sticky xl:top-12">
          <Image
            src={profilepicture.url}
            width={192}
            height={192}
            alt={profilepicture.alt}
            className="rounded-full xl:rounded-lg"
            placeholder="blur"
            blurDataURL={profilepicture.blurUpThumb}
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
          <div className="text-gray-500 dark:text-gray-400">{title}</div>
          <div className="flex pt-6 space-x-3">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
            <SocialIcon kind="github" href={siteMetadata.github} />
            <SocialIcon kind="discord" href={siteMetadata.discord} />
          </div>
        </div>
        <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
          <div>
            <p>I'm Lim Wei Jin, a Senior Full-Stack Developer with 7+ years of experience architecting, building, and scaling web and mobile applications across diverse industries including AI/ML, FinTech, EdTech, SaaS, Logistics, and Enterprise Software.</p>
            
            <p>Currently, I'm leading the development of an AI-powered learning platform at Wolfpack Digital, where I integrate Open AI GPT APIs and recommendation engines to create personalized educational experiences. My work involves building scalable microservices-based backends in Node.js + PostgreSQL, deployed on AWS ECS with CI/CD pipelines, and developing responsive React + Next.js dashboards with advanced data visualization using Recharts and D3.js.</p>
            
            <p>Throughout my career, I've had the privilege of working with international teams across Romania, the USA, UK, and Malaysia, delivering production-grade solutions for both startups and established companies. I'm passionate about clean code, scalable architectures, cloud-native development, and mentoring junior developers to help them grow in their technical journey.</p>
            
            <p>My expertise spans across modern web technologies including React, Next.js, Node.js, TypeScript, Python (Django/Flask), and cloud platforms like AWS and Azure. I hold certifications as an AWS Certified Solutions Architect Associate, Certified Kubernetes Application Developer (CKAD), and Microsoft Certified Azure Developer Associate.</p>
            
            <p>When I'm not coding, I contribute to open-source libraries, mentor developers through community platforms, and participate in tech meetups across Malaysia. I believe in continuous learning and staying updated with the latest technologies to deliver innovative solutions that make a real impact.</p>
          </div>
          <div className="mt-14">
            <p className="text-gray-300 dark:text-gray-700">
              Last updated at{" "}
              <time dateTime={updatedAt}>
                {new Date(updatedAt).toLocaleDateString(siteMetadata.locale, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  // Fallback data if DatoCMS is not available
  const fallbackAbout = {
    name: siteMetadata.author,
    title: "Full Stack Developer",
    profilepicture: {
      url: "/static/images/0250914_383acf2c-6f8d-4c0c-9a13-81139ed1b75d.png",
      alt: siteMetadata.author,
      blurUpThumb: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    },
    content: {
      value: {
        document: {
          type: "root",
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value: "I'm Lim Wei Jin, a Senior Full-Stack Developer with 7+ years of experience architecting, building, and scaling web and mobile applications across diverse industries including AI/ML, FinTech, EdTech, SaaS, Logistics, and Enterprise Software. Currently, I'm leading the development of an AI-powered learning platform at Wolfpack Digital, where I integrate Open AI GPT APIs and recommendation engines to create personalized educational experiences. Throughout my career, I've had the privilege of working with international teams across Romania, the USA, UK, and Malaysia, delivering production-grade solutions for both startups and established companies. I'm passionate about clean code, scalable architectures, cloud-native development, and mentoring junior developers to help them grow in their technical journey."
                }
              ]
            }
          ]
        }
      }
    },
    updatedAt: new Date().toISOString()
  };

  let about = fallbackAbout;
  
  try {
    // Try to fetch from DatoCMS if available
    const { getAbout } = await import("@/lib/cms/datocms");
    const datocmsData = await getAbout(preview);
    if (datocmsData) {
      about = datocmsData;
    }
  } catch (error) {
    // If DatoCMS is not available, use fallback data
    console.log("DatoCMS not available, using fallback data");
  }

  return {
    props: { about },
    revalidate: 60,
  };
}
