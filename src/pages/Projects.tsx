import React from "react";
import Card from "./../containers/Card";
import Footer from "../containers/Footer";

type Props = {};

const projects = ["pokemon"];

const Projects = (props: Props) => {
  return (
    <div>
      <h1>Projects</h1>
      {projects.map((n, index) => (
        <Card key={index} name={n} />
      ))}
      <Footer />
    </div>
  );
};

export default Projects;
