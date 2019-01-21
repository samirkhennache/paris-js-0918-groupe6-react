import React, { Component } from "react";
import TraineeHome from "./traineePart/TraineeHome";
import OnePage from "./companyPart/OnePage";
import Contact from "./Contact";
import "./home.css";
import "./traineeHome.css";
import TeamOneTeam from "./TeamOneTeam";
import PartieEntreprise from "./companyPart/PartieEntreprise";

class Home extends Component {
  render() {
    return (
      <div>
        <OnePage {...this.props} />
        <PartieEntreprise {...this.props} />
        <TraineeHome {...this.props} />
        <div className="background-team">
          <TeamOneTeam />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    );
  }
}

export default Home;
