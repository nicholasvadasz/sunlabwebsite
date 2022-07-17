import "./GuidesPage.css";
import MenuBar from "../components/MenuBar";
import GuideCard from "../components/GuideCard";

function GuidesPage() {
  return (
    <div className="GuidesPage">
      <MenuBar />
      <div className="GuidesContainer">
        <h1 className="GuidesHeader">Guides</h1>
        <div className="GuideCards">
          <GuideCard emoji="⊞" title="SSH w/ Windows" link="SSHWindows" />
          <GuideCard emoji="🍎" title="SSH w/ Apple" link="SSHApple" />
          <GuideCard emoji="🐧" title="SSH w/ Linux" link="SSHLinux" />
        </div>
      </div>
    </div>
  );
}

export default GuidesPage;
