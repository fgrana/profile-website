import Footer from "../containers/Footer";
import app from "../app.module.css";

const Experience = () => {
  return (
    <>
      <h1>Experience</h1>
      <h4>Programador senior backend</h4>
      <p>Endava S.R.L. Oct 2021 - Apr 2024 </p>
      <br></br>
      <p>
        ✅ Working on a credit card system using Golang
        <img className={app.imgText} src="public/go.png"></img>, dynamodb, kafka
        <img className={app.imgText} src="public/aws.png"></img>and docker
        <img className={app.imgText} src="public/docker.png"></img>
      </p>
      <p>
        ✅ Update Ruby<img className={app.imgText} src="public/ruby.png"></img>
        version in an API
      </p>
      <p>
        ✅ Create and modify an email parser in Elixir
        <img className={app.imgText} src="public/elixir.png"></img>
      </p>
      <p>
        ✅ Working on a game with facial recognition in Python
        <img className={app.imgText} src="public/python.png"></img> for the ORT
        2022 job fair
      </p>
      <p>
        ✅ Communicate in English with company colleagues and clients from all
        over the world.
      </p>
      <p> ✅ Work on projects using Scrum and Kanban respectively.</p>
      <p>
        ✅ In addition to the given tasks, he also participated in the
        international internal competition “Innovation Lab” where he presented a
        project with artificial intelligence using Python and Tensor Flow
      </p>
      <h1>Personality TRAITS</h1>
      Social and competitive, always willing to learn from the team and face new
      challenges
      <h1>EDUCATION</h1>
      <p>First English Certificate.</p>
      <p>Jovenes a programar(2021-2022)</p>
      <p>ITI - High school of technology(2019-2021)</p>
      <Footer />
    </>
  );
};

export default Experience;
