import "./Consultant.css";

type ConsultantProps = {
  name: string;
  bio: string;
  image: string;
};

function Consultant(props: ConsultantProps) {
  return (
    <div className="Consultant">
      <div className="ImageContainer">
        <img className="ConsultantImage" src={props.image} alt={props.name} />
      </div>
      <h1 className="ConsultantName">{props.name}</h1>
      <p className="ConsultantBio">{props.bio}</p>
    </div>
  );
}

export default Consultant;
