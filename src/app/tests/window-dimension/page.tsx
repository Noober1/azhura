"use client";

import useWindowDimensions from "@/hooks/useWindowDimention";
import React from "react";

const Page = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div>
      h:{height} w:{width}
    </div>
  );
};

export default Page;
