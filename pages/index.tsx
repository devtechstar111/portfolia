import { PageSEO } from "@/components/SEO";
import Hero from "@/components/Hero";
import siteMetadata from "@/data/siteMetadata";

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
    </>
  );
}
