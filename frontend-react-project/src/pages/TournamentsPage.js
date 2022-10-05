import Sportlist from "../components/sportlist/Sportlist";
import Subscriptions from "../components/subscriptions/Subscriptions";
import NavbarTournamentsPage from "../components/navbars/NavbarTournamentsPage";
import DbSports from "../components/logos/DbSports";

function TournamentsPage() {
  return (
    <div>
      <nav>
        <div className="dbsportsNav">
          <div className="dbsportsNav-content">
            <div class="container">
              <input type="search" placeholder="Search" class="search-field" />
              <button type="submit" class="search-button">
                <img
                  src="https://wiki.geogebra.org/uploads/thumb/8/88/Menu-button-open-search.svg/480px-Menu-button-open-search.svg.png"
                  alt="mglass"
                />
              </button>
            </div>
            <div className="main-nav">
              <NavbarTournamentsPage />
            </div>
          </div>
          <div className="logo">
            <DbSports />
          </div>
        </div>
      </nav>
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
