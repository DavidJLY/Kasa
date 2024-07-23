import React from "react";
import { Header, Footer } from "../../Components/Layout/Layout";
import { AboutList } from "../../Components/AboutList/AboutList";
import("../../style/About.scss");

export function About() {
  return (
    <>
      <Header />
      <div className="banner"></div>
      <AboutList />
      <Footer />
    </>
  );
}
