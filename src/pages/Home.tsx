import Footer from "../containers/Footer";
import app from "../app.module.css";

const Home = () => {
  return (
    <div className={app.root}>
      <h1 className={app.h1}>Fede Graña</h1>
      <div className={app.title}>
        <img className={app.img} src="public/foto-perfil.png"></img>
      </div>
      <div className={app.iconContainer}>
        <img className={app.imgstack} src="public/go.png"></img>
        <img className={app.imgstack} src="public/python.png"></img>
        <img className={app.imgstack} src="public/aws.png"></img>
        <img className={app.imgstack} src="public/react.png"></img>
      </div>
      <div>
        <p>
          A Senior golang developer with experience in microserices. Throughout
          his career have worked on diverse projects, always emphasizing
          attention to detail and effective communication with colleagues across
          the globe. My experience spans multiple programming languages,
          including Python, Ruby, Elixir and React. Additionally, I have a solid
          understanding of cloud computing, particularly within the AWS
          ecosystem. All my work has been executed under agile methodologies,
          ensuring efficiency and collaboration.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
