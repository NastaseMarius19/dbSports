import Sportlist from "../components/sportlist/Sportlist";
import Subscriptions from "../components/subscriptions/Subscriptions";
import NavbarTournamentsPage from "../components/navbars/NavbarTournamentsPage";

function TournamentsPage() {
  return (
    <div>
      <div className="main-nav">
        <NavbarTournamentsPage />
      </div>
      <div className="main-comp">
        <div className="main-list">
          <Sportlist />
        </div>
        <div className="main-subscriptions">
          <Subscriptions />
        </div>
      </div>
    </div>
  );
}

export default TournamentsPage;
