import React, { Component } from "react";
import TraineeCarrousel from "./TraineeCarrousel";
import TraineeOffers from "./TraineeOffers";
import GoodReasonsStudents from "./GoodReasonsStudent";
import Cursus from "./cursus";

class TraineeHome extends Component {
  state = {};

  render() {
    return (
      <div>
        <TraineeCarrousel />
        {/* <TraineeOffers />
        <GoodReasonsStudents {...this.props} />
        <Cursus /> */}
      </div>
    );
  }
}

export default TraineeHome;
