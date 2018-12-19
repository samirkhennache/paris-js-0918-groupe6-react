import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import HomeDefault from "./components/home/home";
import searchOffer from "./components/searchOffer/SearchOffer";
import TraineeApplications from "./components/traineeApplications/TraineeApplications";
import CompanyOffers from "./components/CompanyOffers/CompanyOffers";
import Param from "./Param";
import NavBar from "./components/navBar/NavBar";
import Page404 from "./components/Page404";

// HOME ROUTER -------------------------------------------------------------
const Home = ({ match }) => (
  <div>
    <NavBar />
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

  return (
    <div>
      <NavBar search={Search} myOffers={MyOffers} routeName={match.url} />
      <Switch>
        <Route exact path={match.url} component={searchOffer} />
        <Route
          exact
          path={`${match.url}/applications`}
          component={TraineeApplications}
        />
      </Switch>
    </div>
  );
};
// COMPANY ROUTER -------------------------------------------------------------
const Company = ({ match }) => {
  const Missions = props => <Link to={match.url} {...props} />;
  const Params = props => <Link to={`${match.url}/my-params`} {...props} />;
  return (
    <div>
      <NavBar missions={Missions} params={Params} routeName={match.url} />
      <Switch>
        <Route exact path={match.url} component={CompanyOffers} />
        <Route exact path={`${match.url}/my-params`} component={Param} />
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
        <Route path="/*" component={Page404} />
      </Switch>
    );
  }
}

export default App;
