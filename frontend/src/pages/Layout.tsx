import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "./Appbar";

const Layout: React.FC = () => {
  return (
    <>
      <Appbar />
      <Outlet />
    </>
  );
};

export default Layout;
