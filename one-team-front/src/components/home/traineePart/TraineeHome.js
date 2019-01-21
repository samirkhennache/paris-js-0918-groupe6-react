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
        <div className="background-carrousel">
          <TraineeCarrousel />
        </div>
        <TraineeOffers />
        <div className="background-goodReasons">
          <GoodReasonsStudents {...this.props} />
        </div>
        <Cursus />
      </div>
    );
  }
}

export default TraineeHome;
