import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const MainLayouts = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default MainLayouts;
