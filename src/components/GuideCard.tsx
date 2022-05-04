import "./GuideCard.css";
import { Link } from "react-router-dom";

type GuideCardProps = {
  emoji: string;
  title: string;
  link: string;
};

function GuideCard(props: GuideCardProps) {
  return (
    <Link className="GuideCard" to={props.link}>
      <div className="GuideCardContainer">
        <p className="GuideEmoji">{props.emoji}</p>
        <h1 className="GuideTitle">{props.title}</h1>
      </div>
    </Link>
  );
}

export default GuideCard;
