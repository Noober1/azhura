import Link from "next/link";
import React from "react";
import prisma from "@/lib/prisma";

const getPosts = () =>
  prisma.post
    .findMany({
      select: {
        title: true,
        createdAt: true,
        slug: true,
      },
      where: {
        published: true,
      },
    })
    .then((result) => result)
    .catch(() => []);

const BlogPage = async () => {
  const data = await getPosts();
  return (
    <ul className="list-decimal">
      {data.map((item, index) => (
        <li key={index}>
          <Link href={`/blog/${item.slug}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogPage;
