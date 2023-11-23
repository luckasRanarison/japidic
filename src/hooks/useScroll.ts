import { useState, useEffect } from "react";

function useScroll() {
  const [data, setData] = useState({
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setData((last) => {
        return {
          scrollX: document.body.scrollLeft,
          scrollY: document.body.scrollTop,
          lastX: last.scrollX,
          lastY: last.scrollY,
        };
      });
    };

    handleScroll();
    document.body.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return data;
}

export default useScroll;
