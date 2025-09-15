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
          
          {/* Resume Download Button */}
          <div className="pt-6">
            <a
              href="/static/resume/Lim-Wei-Jin-FlowCV-Resume-20250914.pdf"
              download="Lim-Wei-Jin-Resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
        <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">About Me</h2>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-4">
                I'm Lim Wei Jin, a Senior Full-Stack Developer with 7+ years of experience architecting, building, and scaling web and mobile applications across diverse industries including AI/ML, FinTech, EdTech, SaaS, Logistics, and Enterprise Software.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-4">
                Currently based in Kuala Lumpur, Malaysia, I work remotely with international teams, bringing expertise in modern web technologies and cloud-native development. I'm passionate about clean code, scalable architectures, and mentoring junior developers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">What I Do</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Design and develop scalable microservices-based backends using Node.js, Django, and Express.js</li>
                <li>Build responsive frontend applications with React, Next.js, Vue.js, and modern JavaScript frameworks</li>
                <li>Integrate AI/ML capabilities using OpenAI APIs, TensorFlow, and custom recommendation engines</li>
                <li>Implement cloud-native solutions on AWS, Azure, and Google Cloud Platform</li>
                <li>Create real-time applications with WebSockets, GraphQL, and WebRTC technologies</li>
                <li>Mentor junior developers and lead technical architecture decisions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Key Achievements</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Led development of AI-powered learning platform serving 100k+ users with real-time recommendations</li>
                <li>Built FinTech SaaS platform handling thousands of daily secure transactions with PCI DSS compliance</li>
                <li>Optimized database queries and caching layers, improving backend performance by 65%</li>
                <li>Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes</li>
                <li>Mentored 3+ junior developers, improving team productivity by 25%</li>
                <li>Delivered 15+ client projects on time and within budget across various industries</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Education & Certifications</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                <strong>Bachelor of Science in Computer Science</strong> - University of Malaya (2012-2017)
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                <strong>Certifications:</strong> AWS Certified Solutions Architect Associate, Certified Kubernetes Application Developer (CKAD), Microsoft Certified Azure Developer Associate
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Beyond Code</h3>
              <p className="text-gray-600 dark:text-gray-400">
                When I'm not coding, I enjoy contributing to open-source projects, participating in tech meetups across Malaysia, and exploring the latest trends in AI and machine learning. I believe in continuous learning and sharing knowledge with the developer community.
              </p>
            </div>
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
                  value: "I'm a passionate full-stack developer from Malaysia with expertise in modern web technologies. I love building scalable applications and exploring new technologies."
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
