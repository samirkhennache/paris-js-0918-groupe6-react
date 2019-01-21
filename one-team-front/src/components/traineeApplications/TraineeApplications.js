import React, { Component } from "react";
import StudentApplicationList from "../studentApplication/StudentApplicationList";
import "../pages.css";

class TraineeApplications extends Component {
  render() {
    return (
      <div>
        <StudentApplicationList {...this.props} />
      </div>
    );
  }
}

export default TraineeApplications;
