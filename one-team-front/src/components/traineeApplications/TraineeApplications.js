import React, { Component } from "react";
import StudentApplicationList from "../studentApplication/StudentApplicationList";

class TraineeApplications extends Component {
  render() {
    return (
      <div>
        <h3>Page récap des candidatures de l'étudiant</h3>
        <StudentApplicationList />
      </div>
    );
  }
}

export default TraineeApplications;
