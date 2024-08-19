import ScrollToSide from "@/components/ui/layout/ScrollToSide";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full h-screen bg-red-500 block"></div>
      <ScrollToSide />
      <div className="w-full h-screen bg-green-500 block"></div>
    </div>
  );
};

export default page;
