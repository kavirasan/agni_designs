import React, { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Adjust the delay if necessary
  
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
