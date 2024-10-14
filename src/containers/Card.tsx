import { Button } from "react-bootstrap";
import card from "./Card.module.css";

type project = {
  name: string;
  key: number;
};

function Card(props: project) {
  const cardimg = "src/assets/" + props.name + ".png";
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
