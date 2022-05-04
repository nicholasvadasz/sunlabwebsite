import "./ContactPage.css";
import MenuBar from "../components/MenuBar";

function ContactPage() {
  const ContactExplanation =
    "When a Sunlab Consultant is on call, they will be sitting at Computer 9A within the Sunlab. If a Sunlab Consultant is not on call at the moment, or the CIT is closed, technical support can be provided via email.";
  return (
    <div className="ContactPage">
      <MenuBar />
      <div className="ContactContainer">
        <h1 className="ContactHeader">Contact</h1>
        <div className="ContactInfo">
          <p> {ContactExplanation} </p>
          <a href="mailto:consultants@cs.brown.edu" className="EmailAddress">
            Email: consultants@cs.brown.edu
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
