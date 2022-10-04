import NavbarMainPage from "../components/navbars/NavbarMainPage";
import Sportlist from "../components/sportlist/Sportlist";
import Subscriptions from "../components/subscriptions/Subscriptions";

function MainPage() {
  return (
    <div>
      <div className="main-nav">
        <NavbarMainPage />
      </div>
      <div className="main-comp">
        {/* <div className="main-list"> */}
          <Sportlist />
        {/* </div> */}
        {/* <div className="main-subscriptions"> */}
          <Subscriptions />
        {/* </div> */}
      </div>
    </div>
  );
}

export default MainPage;
