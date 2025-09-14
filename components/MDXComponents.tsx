import Image from "next/image";
import { ComponentMap, getMDXComponent } from "mdx-bundler/client";
import CustomLink from "./CustomLink";
import TOCInline from "./TOCInline";
import Pre from "./Pre";
import { useMemo } from "react";
import PostLayout from "@/layouts/PostLayout";

// Simple Tweet component replacement
const Tweet = ({ tweetLink }: { tweetLink: string }) => (
  <div className="my-8 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
      Tweet: {tweetLink}
    </p>
    <a 
      href={`https://twitter.com/${tweetLink}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 dark:text-blue-400 hover:underline"
    >
      View Tweet →
    </a>
  </div>
);

export const MDXComponents: ComponentMap = {
  Image,
  Tweet,
  TOCInline,
  // @ts-expect-error
  a: CustomLink,
  // @ts-expect-error
  pre: Pre,
  wrapper: PostLayout,
};

export const MDXLayoutRenderer = ({
  layout,
  mdxSource,
  ...rest
}: {
  layout: any;
  mdxSource: string;
  [key: string]: any;
}) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};
