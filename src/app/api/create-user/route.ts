import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  try {
    const res = prisma.user.createMany({
      data: [
        {
          email: "cucu.ruhiyatna3@gmail.com",
          name: "Cucu Ruhiyatna",
        },
      ],
      skipDuplicates: true,
    });

    return Response.json({
      result: "ok",
      data: res,
    });
  } catch (error) {
    return Response.json({
      result: "error",
    });
  }
}
