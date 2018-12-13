import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import searchOffer from "./components/searchOffer/SearchOffer";
import TraineeApplications from "./components/traineeApplications/TraineeApplications";
import CompanyOffers from "./components/CompanyOffers/CompanyOffers";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/search-offers" component={searchOffer} />
          <Route path="/my-applications" component={TraineeApplications} />
          <Route path="/company-offers" component={CompanyOffers} />
        </Switch>
      </div>
    );
  }
}

export default App;
