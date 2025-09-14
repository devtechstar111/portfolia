import Image from "next/image";
import { ComponentMap, getMDXComponent } from "mdx-bundler/client";
import CustomLink from "./CustomLink";
import TOCInline from "./TOCInline";
import Pre from "./Pre";
import { useMemo } from "react";
import PostLayout from "@/layouts/PostLayout";

// Simple Discord component replacement
const Discord = ({ discordLink }: { discordLink: string }) => (
  <div className="my-8 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
      Discord: {discordLink}
    </p>
    <a 
      href={`https://discord.gg/${discordLink}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 dark:text-blue-400 hover:underline"
    >
      Join Discord →
    </a>
  </div>
);

export const MDXComponents: ComponentMap = {
  Image,
  Discord,
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
