import "./HoursPage.css";
import MenuBar from "../components/MenuBar";

function HoursPage() {
  return (
    <div className="HoursPage">
      <MenuBar />
      <div className="HoursContainer">
        <h1 className="HoursHeader">Hours</h1>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23293d5b&ctz=America%2FNew_York&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=YnJvd24uZWR1XzRxdGNiaWlhbjFnZ21sdTAzc3M1NGY0NzhzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23F09300"
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
          title="Google Calendar"
          className="Calendar"
        ></iframe>
      </div>
    </div>
  );
}

export default HoursPage;
