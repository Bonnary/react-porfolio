import React from "react";

import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import Education from "./components/Education";
import Project from "./pages/ProjectPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <HomePage />
      <Education />
      <Project />
      <Footer/>
    </>
  );
}
