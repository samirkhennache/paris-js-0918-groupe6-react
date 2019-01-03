import React, { Component } from "react";
import TraineeHome from "./traineePart/TraineeHome";
import OnePage from "./companyPart/OnePage";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <OnePage {...this.props} />
        <TraineeHome />
      </div>
    );
  }
}

export default Home;
