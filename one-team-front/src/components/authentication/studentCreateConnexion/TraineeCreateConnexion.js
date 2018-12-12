import React, { Component } from "react";
import ConnexionTrainee from "./ConnexionTrainee";
import StudentCreateAccount from "./StudentCreateAccount";

class TraineeCreateConnexion extends Component {
  render() {
    return (
      <div>
        <h3>Page création connection trainee</h3>
        <StudentCreateAccount {...this.props} />
        <ConnexionTrainee {...this.props} />
      </div>
    );
  }
}

export default TraineeCreateConnexion;
