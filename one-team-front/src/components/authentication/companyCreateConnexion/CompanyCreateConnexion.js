import React, { Component } from "react";
import CompanyCreateAccount from "./CompanyCreateAccount";
import ConnexionCompany from "./ConnexionCompany";

class CompanyCreateConnexion extends Component {
  render() {
    return (
      <div>
        <h3>Page création connection Company</h3>
        <CompanyCreateAccount {...this.props} />
        <ConnexionCompany {...this.props} />
      </div>
    );
  }
}

export default CompanyCreateConnexion;
