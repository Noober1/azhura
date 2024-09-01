import { RefObject, useLayoutEffect, useState } from "react";

const useElementDimension = (ref: RefObject<HTMLElement>) => {
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
    top: 0,
    y: 0,
  });

  useLayoutEffect(() => {
    const handleResizeWindow = () => {
      if (ref.current) {
        ref.current;
        const { width, height, top, y } = ref.current.getBoundingClientRect();
        setDimension({ width, height, top, y });
      }
    };

    handleResizeWindow();
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [ref]);

  return dimension;
};

export default useElementDimension;
