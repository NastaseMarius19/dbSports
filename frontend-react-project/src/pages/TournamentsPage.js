import Tournaments from "../components/tournaments/Tournaments";
import Subscriptions from "../components/subscriptions/Subscriptions";
import NavbarTournamentsPage from "../components/navbars/NavbarTournamentsPage";
import DbSports from "../components/logos/DbSports";

function TournamentsPage() {
  return (
    <div>
      <NavbarTournamentsPage />
      <div className="mt-5">
        <div className="row">
          <div className="col-9 mt-1">
            <Tournaments />
          </div>
          <div className="col-3 mt-0">
            <Subscriptions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TournamentsPage;
