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
          <img src={bandeauTrainee} alt="candidatures" />
        </div>
        <StudentApplicationList {...this.props} />
      </div>
    );
  }
}

export default TraineeApplications;
