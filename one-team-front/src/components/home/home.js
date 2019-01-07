import React, { Component } from "react";
import TraineeHome from "./traineePart/TraineeHome";
import OnePage from "./companyPart/OnePage";
import Contact from "./Contact";
import "./home.css";
import TeamOneTeam from "./TeamOneTeam";
import PartieEntreprise from "./companyPart/PartieEntreprise";

class Home extends Component {
  render() {
    return (
      <div>
        <OnePage {...this.props} />
        <PartieEntreprise {...this.props} />
        <TraineeHome />
        <TeamOneTeam />
        <Contact />
      </div>
    );
  }
}

export default Home;
