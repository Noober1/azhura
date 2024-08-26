import React from "react";
import prisma from "@/lib/prisma";
import { PageWithParam } from "@/types/main";
import remarkGfm from "remark-gfm";
import { useMDXComponents } from "@/config/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";

import type { Metadata } from "next";

export const dynamic = "force-dynamic";

const getPostData = async (slug: string) => {
  try {
    const getData = await prisma.post.findUnique({
      where: { slug },
    });

    return getData;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const getData = await getPostData(params.slug);

  return {
    title: getData?.title || "Not found",
  };
}

const PostPage: PageWithParam = async ({ params }) => {
  const components = useMDXComponents({});
  const data = await getPostData(params.slug);

  if (!data) return <div>Post not found</div>;
  return (
    <article className="prose dark:prose-invert prose-code:after:content-[''] prose-code:before:content-['']">
      <h1>{data.title}</h1>
      <MDXRemote
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
        source={data.content}
        components={components}
      />
    </article>
  );
};

export default PostPage;
