import React from "react";
import { Outlet } from "react-router-dom";
import DashedHeader from "./DashedHeader";
import DashedFooter from "./DashedFooter";
const DashedLayout = () => {
  return (
    <>
      <DashedHeader />
      <Outlet />
      <DashedFooter />
    </>
  );
};

export default DashedLayout;
