"use client";

import { useBreakpointValue } from "@/hooks/useTailwindBreakpoints";
import React from "react";

const ViewportStatistic = () => {
  const IsSmall = useBreakpointValue("sm", "YES", "NO");
  const IsMedium = useBreakpointValue("md", "YES", "NO");
  const IsLarge = useBreakpointValue("lg", "YES", "NO");
  const IsXL = useBreakpointValue("xl", "YES", "NO");

  return (
    <ul className="fixed top-0 left-0 w-fit [&>li]:inline [&>li]:mx-2">
      <li>SM:{IsSmall}</li>
      <li>MD:{IsMedium}</li>
      <li>LG:{IsLarge}</li>
      <li>XL:{IsXL}</li>
    </ul>
  );
};

export default ViewportStatistic;
