import NavbarMainPage from "../components/navbars/NavbarMainPage";
import Sportlist from "../components/sportlist/Sportlist";
import Subscriptions from "../components/subscriptions/Subscriptions";

function MainPage() {
  return (
    <div>
      <NavbarMainPage />
      <div className="mt-5">
        <div className="row">
          <div className="col-9 mt-1">
            <Sportlist />
          </div>
          <div className="col-3 mt-0">
            <Subscriptions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
