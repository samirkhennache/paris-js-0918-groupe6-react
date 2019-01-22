import React, { Component } from "react";
import StudentApplicationList from "../studentApplication/StudentApplicationList";
import "../pages.css";
import "./trainneApplication.css";
import bandeauTrainee from "../../img/bandeau_trainee-1.jpg";

class TraineeApplications extends Component {
  render() {
    return (
      <div>
        <div className="bandeau-candidatures-trainee">
        <h1>Candidatures</h1>
        <h2>Tu peux consulter et suivre l'avancement de tes candidatures</h2>
          <img src={bandeauTrainee} alt="candidatures" />
        </div>
        <StudentApplicationList {...this.props} />
      </div>
    );
  }
}

export default TraineeApplications;
