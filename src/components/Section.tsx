type SectionProps = {
  title: string;
  myRef?: React.RefObject<HTMLDivElement>;
};

function Section(props: SectionProps) {
  return (
    <div className="Section" ref={props.myRef}>
      <h1 style={{ color: "rgb(26,115,232)  " }}>{props.title}</h1>
    </div>
  );
}

export default Section;
