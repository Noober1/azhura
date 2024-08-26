"use client";

import useElementDimension from "@/hooks/useElementDimension";
import useWindowDimensions from "@/hooks/useWindowDimension";
import React, { useRef } from "react";

const Page = () => {
  const { height, width } = useWindowDimensions();
  const ref = useRef(null);
  const { width: w, height: h } = useElementDimension(ref);
  return (
    <>
      <div>
        h:{height} w:{width}
      </div>
      <div ref={ref} className="w-full h-full bg-red-500 p-6">
        w:{w}, h:{h}
      </div>
    </>
  );
};

export default Page;
