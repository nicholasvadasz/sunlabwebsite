import "./AboutPage.css";
import MenuBar from "../components/MenuBar";
import Consultant from "../components/Consultant";

function AboutPage() {
  const AboutText = `The Sunlab Consultants is the student-run program in charge of Brown University's department machines. 
  Most hours the Sunlab (and other CIT labs) are open, Sunlab Consultants are on call to answer questions regarding machines in the department,
  as well as help debug issues related to the use or connection of department machines.`;
  return (
    <div className="AboutPage">
      <MenuBar />
      <div className="Container">
        <div className="HeaderAndAbout">
          <h1 className="Header">About Us</h1>
          <p className="AboutText">{AboutText}</p>
        </div>
        <div className="ConsultantGrid">
          <Consultant
            name="John Smith"
            bio="John is a student at Brown University studying Computer Science. He is a member of the Sunlab Consultants program."
            image="https://st.depositphotos.com/1008939/1880/i/600/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg"
          />
          <Consultant
            name="Ben Watson"
            bio="Ben is a student at Brown and loves outdoor canoeing"
            image="https://media.istockphoto.com/photos/portrait-of-mature-hispanic-man-picture-id805012064?k=20&m=805012064&s=612x612&w=0&h=oWpG5VlQ3YK_4-Ppb-Ql7ZYxwJXgoNdUas9HUNBrDQA="
          />
          <Consultant
            name="Ben Watson"
            bio="Ben is a student at Brown and loves outdoor canoeing"
            image="https://media.istockphoto.com/photos/portrait-of-mature-hispanic-man-picture-id805012064?k=20&m=805012064&s=612x612&w=0&h=oWpG5VlQ3YK_4-Ppb-Ql7ZYxwJXgoNdUas9HUNBrDQA="
          />
          <Consultant
            name="Ben Watson"
            bio="Ben is a student at Brown and loves outdoor canoeing"
            image="https://media.istockphoto.com/photos/portrait-of-mature-hispanic-man-picture-id805012064?k=20&m=805012064&s=612x612&w=0&h=oWpG5VlQ3YK_4-Ppb-Ql7ZYxwJXgoNdUas9HUNBrDQA="
          />
          <Consultant
            name="Ben Watson"
            bio="Ben is a student at Brown and loves outdoor canoeing"
            image="https://media.istockphoto.com/photos/portrait-of-mature-hispanic-man-picture-id805012064?k=20&m=805012064&s=612x612&w=0&h=oWpG5VlQ3YK_4-Ppb-Ql7ZYxwJXgoNdUas9HUNBrDQA="
          />
          <Consultant
            name="Ben Watson"
            bio="Ben is a student at Brown and loves outdoor canoeing"
            image="https://media.istockphoto.com/photos/portrait-of-mature-hispanic-man-picture-id805012064?k=20&m=805012064&s=612x612&w=0&h=oWpG5VlQ3YK_4-Ppb-Ql7ZYxwJXgoNdUas9HUNBrDQA="
          />
          <Consultant
            name="Ben Watson"
            bio="Ben is a student at Brown and loves outdoor canoeing"
            image="https://media.istockphoto.com/photos/portrait-of-mature-hispanic-man-picture-id805012064?k=20&m=805012064&s=612x612&w=0&h=oWpG5VlQ3YK_4-Ppb-Ql7ZYxwJXgoNdUas9HUNBrDQA="
          />
          <Consultant
            name="Ben Watson"
            bio="Ben is a student at Brown and loves outdoor canoeing"
            image="https://media.istockphoto.com/photos/portrait-of-mature-hispanic-man-picture-id805012064?k=20&m=805012064&s=612x612&w=0&h=oWpG5VlQ3YK_4-Ppb-Ql7ZYxwJXgoNdUas9HUNBrDQA="
          />
          <Consultant
            name="Ben Watson"
            bio="Ben is a student at Brown and loves outdoor canoeing"
            image="https://media.istockphoto.com/photos/portrait-of-mature-hispanic-man-picture-id805012064?k=20&m=805012064&s=612x612&w=0&h=oWpG5VlQ3YK_4-Ppb-Ql7ZYxwJXgoNdUas9HUNBrDQA="
          />
          <Consultant
            name="Ben Watson"
            bio="Ben is a student at Brown and loves outdoor canoeing"
            image="https://media.istockphoto.com/photos/portrait-of-mature-hispanic-man-picture-id805012064?k=20&m=805012064&s=612x612&w=0&h=oWpG5VlQ3YK_4-Ppb-Ql7ZYxwJXgoNdUas9HUNBrDQA="
          />
          <Consultant
            name="Ben Watson"
            bio="Ben is a student at Brown and loves outdoor canoeing"
            image="https://media.istockphoto.com/photos/portrait-of-mature-hispanic-man-picture-id805012064?k=20&m=805012064&s=612x612&w=0&h=oWpG5VlQ3YK_4-Ppb-Ql7ZYxwJXgoNdUas9HUNBrDQA="
          />
          <Consultant
            name="Ben Watson"
            bio="Ben is a student at Brown and loves outdoor canoeing"
            image="https://media.istockphoto.com/photos/portrait-of-mature-hispanic-man-picture-id805012064?k=20&m=805012064&s=612x612&w=0&h=oWpG5VlQ3YK_4-Ppb-Ql7ZYxwJXgoNdUas9HUNBrDQA="
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
