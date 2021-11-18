import "./App.css";
import FullName from "./component/profile/fullname";
import Address from "./component/profile/address";
import ProfilePhoto from "./component/profile/profilePhoto";
import SocialHandle from "./component/profile/social";

function App() {
  return (
    <div>
      <Title />
      <section className="appBody">
        <FullName className="myFullname" />
        <SocialHandle className="mySocialIcons" />
        <Address className="myAddress" />
        <ProfilePhoto className="profileImg" />
      </section>
      <Footer />
    </div>
  );
}

const Footer = () => (
  <div className="myFooter">
    <p>
      Author: Motolani<span>&copy; 2015 RapidTables.com</span>
    </p>
  </div>
);

const Title = () => (
  <div>
    <h4>Employee Page</h4>
  </div>
);

export default App;
