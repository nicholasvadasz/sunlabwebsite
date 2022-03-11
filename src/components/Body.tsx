type BodyProps = {
  bodyText: string;
};

function Body(props: BodyProps) {
  return (
    <div
      className="Body"
      style={{
        width: "40%",
        fontFamily: "Inter",
        margin: "auto",
        fontWeight: "500",
        color: "rgb(56, 56, 56)",
      }}
    >
      <p>{props.bodyText}</p>
    </div>
  );
}

export default Body;
