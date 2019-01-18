import React, { Component } from "react";
import CompanyApplicationsList from "./CompanyApplicationsList";
import { FULL_RESTRICTED } from "./studentConstant";

const mode = "APPLICATION";
const modeSelect = "SELECT";
const modeRefuse = "REFUSE";

class CompanyApplications extends Component {
  render() {
    return (
      <div>
        <h1>Mes Candidats</h1>
        <CompanyApplicationsList
          mode={mode}
          modeSelect={modeSelect}
          modeRefuse={modeRefuse}
          size={FULL_RESTRICTED}
        />
      </div>
    );
  }
}

export default CompanyApplications;
