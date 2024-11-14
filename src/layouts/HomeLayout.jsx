import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";
import LeftNavBar from "../components/layout-components/LeftNavBar";
import RightNavBar from "../components/layout-components/RightNavBar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav className="w-11/12 mx-auto my-5">
        <NavBar />
      </nav>
      <main className="w-11/12 mx-auto py-5 grid md:grid-cols-12 gap-5">
        <aside className="left col-span-3">
          <LeftNavBar />
        </aside>
        <section className="col-span-6">
          <Outlet />
        </section>
        <aside className="right col-span-3">
          <RightNavBar />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
