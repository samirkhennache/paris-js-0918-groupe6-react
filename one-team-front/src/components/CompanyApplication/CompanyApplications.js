import React, { Component } from "react";
import CompanyApplicationsList from "./CompanyApplicationsList";

const modeApplication = "APPLICATION";

class CompanyApplications extends Component {
  render() {
    return (
      <div>
        <h1>Mes Candidats</h1>
        <CompanyApplicationsList mode={modeApplication} />
      </div>
    );
  }
}

export default CompanyApplications;
