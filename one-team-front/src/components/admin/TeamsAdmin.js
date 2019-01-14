import React, { Component } from "react";
import CompanyOffersRoot from "../companyOffers/CompanyOffersRoot";
import { FULL } from "../CompanyApplication/studentConstant";

const mode = "ADMIN";
const part = "ADMIN";

class TeamsAdmin extends Component {
  state = {};

  render() {
    return (
      <div>
        <p>Admin</p>
        <CompanyOffersRoot mode={mode} part={part} size={FULL} />
      </div>
    );
  }
}

export default TeamsAdmin;
