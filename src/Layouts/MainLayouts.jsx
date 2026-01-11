import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

const MainLayouts = () => {
  const { state } = useNavigation();
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 my-9">
        {state == "loading" ? <Loader /> : <Outlet />}
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayouts;
