import { Button } from "react-bootstrap";
import card from "./Card.module.css";

type project = {
  name: string;
  key: number;
};

function Card(props: project) {
  const cardimg = "public/" + props.name + ".png";
  return (
    <div className="card">
      <div className="card-body">
        <img className={card.img} src={cardimg} alt="Charizard" />
        <h5 className="card-title">{props.name}</h5>
        <Button className="btn btn-primary">visit</Button>
      </div>
    </div>
  );
}

export default Card;
