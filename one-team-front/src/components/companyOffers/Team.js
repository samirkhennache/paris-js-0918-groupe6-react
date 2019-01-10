import React, { Component } from "react";
import CompanyApplicationsList from "../CompanyApplication/CompanyApplicationsList";

const modeSelect = "APPLICATION";

class Team extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2>My team</h2>
        <CompanyApplicationsList mode={modeSelect} />
      </div>
    );
  }
}

export default Team;
