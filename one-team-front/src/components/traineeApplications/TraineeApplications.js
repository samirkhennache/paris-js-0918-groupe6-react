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
          <div className="titles-candidatures">
            <h1 className="page_title">Candidatures</h1>
            <h2 className="page_subtitle">
              Tu peux consulter et suivre l'avancement de tes candidatures
            </h2>
          </div>
        </div>
        <StudentApplicationList {...this.props} />
      </div>
    );
  }
}

export default TraineeApplications;
