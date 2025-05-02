import { useState, useEffect } from "react";

function useMobileDetection({ breakpoint = 768 } = {}) {
  const [isMobile, setIsMobile] = useState(() => {
    return window.innerWidth <= breakpoint;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

export default useMobileDetection;
