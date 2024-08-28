import { useMDXComponents } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import remarkGfm from "remark-gfm";

interface PostContentProps {
  source: string;
}

const PostContent = ({ source }: PostContentProps) => {
  const components = useMDXComponents({});
  return (
    <article className="prose dark:prose-invert prose-code:after:content-[''] prose-code:before:content-['']">
      <MDXRemote
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
        source={source}
        components={components}
      />
    </article>
  );
};

export default PostContent;
