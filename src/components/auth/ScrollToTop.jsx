import React from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <Outlet />;
};

export default ScrollToTop;
