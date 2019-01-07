import React, { Component } from "react";
import TraineeProfile from "./traineeProfile";
import StudentProfilView from "./StudentProfilView";

class Profil extends Component {
  state = {};

  render() {
    return (
      <div>
        <TraineeProfile />
        <StudentProfilView />
      </div>
    );
  }
}

export default Profil;
