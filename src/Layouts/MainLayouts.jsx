import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

const MainLayouts = () => {
  const { state } = useNavigation();
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{state == "loading" ? <Loader /> : <Outlet />}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayouts;
