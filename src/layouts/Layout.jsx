import React from "react";
import { Navbar } from "../components/NavBar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
