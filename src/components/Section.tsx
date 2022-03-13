type SectionProps = {
  title: string;
  id: string;
};

function Section(props: SectionProps) {
  return (
    <div className="Section" id={props.id}>
      <h1 style={{ color: "rgb(26,115,232)  " }}>{props.title}</h1>
    </div>
  );
}

export default Section;
