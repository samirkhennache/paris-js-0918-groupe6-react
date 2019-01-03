import React, { Component } from "react";
import CompanyApplicationsList from "./CompanyApplicationsList";

class CompanyApplications extends Component {
  render() {
    return (
      <div>
        <h1>Mes Candidats</h1>
        <CompanyApplicationsList />
      </div>
    );
  }
}

export default CompanyApplications;
