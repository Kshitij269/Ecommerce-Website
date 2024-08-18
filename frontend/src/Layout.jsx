import React from "react";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header"
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Layout;