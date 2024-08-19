import React from "react";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

const delay = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });

const getData = async () => {
  const getUser = await prisma.user.findFirst();
  await delay();
  return getUser;
};

const UserPage = async () => {
  const getUser = await getData();
  if (!getUser) return <div>User not found</div>;
  return <div>Hello {getUser.email}</div>;
};

export default UserPage;
