import React from "react";
import Footer from "../containers/Footer";

type Props = {};

const Aboutme = (props: Props) => {
  return (
    <div>
      <h1>About me</h1>
      <p>
        In his experience had almost 3 years in the industry and 2 years working
        in golang creating microservices for a well known fintech company from
        england. The emphasis on security and detail was very important to
        overcome the challenge. The system connected with AWS services that sums
        to the experience as well as the scrum methodology.
      </p>

      <p>
        He also had diverse projects that would increase his experience. An
        internal project in Python, a parsing email project in Elixir with email
        tickets from the superbowl and a Ruby versioning project, all of them
        sum to the knowledge that he brings to the team.
      </p>

      <p>
        His character is simple and happy. Sometimes he has good timing to make
        jokes that are appreciated and boost morale. He is an introverted person
        who knows his voice in the team and is ready for the next challenge.
      </p>
      <Footer />
    </div>
  );
};

export default Aboutme;
