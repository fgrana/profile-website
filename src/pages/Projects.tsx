import Card from "./../containers/Card";
import Footer from "../containers/Footer";


const projects = ["pokemon"];

const Projects = () => {
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
