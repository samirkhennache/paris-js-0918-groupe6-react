import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import HomeDefault from "./components/home/home";
import SearchOffer from "./components/searchOffer/SearchOffer";
import TraineeApplications from "./components/traineeApplications/TraineeApplications";
import Profil from "./components/traineeProfile/Profil";
import CompanyOffers from "./components/companyOffers/CompanyOffers";
import Param from "./Param";
import NavBar from "./components/navBar/NavBar";
import Page404 from "./components/Page404";
import CompanyApplications from "./components/CompanyApplication/CompanyApplications";
import OffersCompletedList from "./components/admin/OffersCompletedList";
import { OfferView } from "./components/offerView";

// HOME ROUTER -------------------------------------------------------------
const Home = ({ match }) => (
  <div>
    <Switch>
      <Route path={match.url} component={HomeDefault} />
    </Switch>
  </div>
);
// TRAINEE ROUTER -------------------------------------------------------------
const Trainee = ({ match }) => {
  const Search = props => <Link to={match.url} {...props} />;
  const MyOffers = props => (
    <Link to={`${match.url}/applications`} {...props} />
  );
  const MyProfile = props => <Link to={`${match.url}/profile`} {...props} />;

  return (
    <div>
      <NavBar
        search={Search}
        myOffers={MyOffers}
        myProfile={MyProfile}
        routeName={match.url}
      />
      <Switch>
        <Route
          exact
          path={match.url}
          render={props => <SearchOffer {...props} />}
        />
        <Route
          exact
          path={`${match.url}/applications`}
          component={TraineeApplications}
        />
        <Route exact path={`${match.url}/profile`} component={Profil} />
      </Switch>
    </div>
  );
};
// COMPANY ROUTER -------------------------------------------------------------
const Company = ({ match }) => {
  const Missions = props => <Link to={`${match.url}`} {...props} />;
  const Params = props => <Link to={`${match.url}/:id/my-params`} {...props} />;
  const Candidats = props => <Link to={`${match.url}/mytrainees`} {...props} />;
  return (
    <div>
      <NavBar
        missions={Missions}
        params={Params}
        candidats={Candidats}
        routeName={match.url}
      />
      <Switch>
        <Route exact path={`${match.url}`} component={CompanyOffers} />
        <Route exact path={`${match.url}/:id/my-params`} component={Param} />
        <Route
          exact
          path={`${match.url}/mytrainees`}
          component={CompanyApplications}
        />
      </Switch>
    </div>
  );
};

// ADMIN ROUTER -------------------------------------------------------------

const Admin = ({ match }) => {
  const Missions = props => <Link to={`${match.url}/`} {...props} />;
  const LesValidations = props => (
    <Link to={`${match.url}/validations`} {...props} />
  );
  const Candidats = props => <Link to={`${match.url}/team`} {...props} />;
  return (
    <div>
      <NavBar
        candidats={Candidats}
        missions={Missions}
        validations={LesValidations}
        routeName={match.url}
      />
      <Switch>
        <Route exact path={`${match.url}`} component={OffersCompletedList} />
        <Route
          exact
          path={`${match.url}/validations`}
          component={CompanyOffers}
        />
        <Route exact path={`${match.url}/missions`} component={SearchOffer} />
        <Route exact path={`${match.url}/team`} component={OfferView} />
      </Switch>
    </div>
  );
};

// CLASS APP -------------------------------------------------------------
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/trainee" component={Trainee} />
        <Route path="/company" component={Company} />
        <Route path="/salutadmin" component={Admin} />
        <Route path="/*" component={Page404} />
      </Switch>
    );
  }
}

export default App;
