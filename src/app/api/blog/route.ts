import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const GET = async () => {
  const blog = await prisma.post.findFirst();

  return Response.json(blog);
};

export const POST = async () => {
  await prisma.post.createMany({
    data: [
      {
        authorId: 1,
        title: "cara membuat entah",
        slug: "cara-membuat-entah",
        content: `
                # hehe

  ~~~js
  console.log(3)
  console.log(3)
  console.log(3)
  console.log(3)
  ~~~

  ~~~tsx
  const code = ({children}) => <h1>{children}</h1>
  ~~~

  ~~~scss
  .azhura {
    background:red;
  }
  ~~~

I **love** using [Next.js](https://nextjs.org/) www.example.com

> A greater than…

A backslash\
before a line break…

![entah](https://raw.githubusercontent.com/hashicorp/next-mdx-remote/main/header.png "xxx")


Some *asterisks* for emphasis.

Three asterisks for a thematic break:

***

* asterisks for unordered items

1. decimals and a dot for ordered items

# GFM

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |

## Tasklist

* [ ] to do
* [x] done
        
            `,
      },
    ],
    skipDuplicates: true,
  });

  return Response.json({
    process: "ok",
  });
};
