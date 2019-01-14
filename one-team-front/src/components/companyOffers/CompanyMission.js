import React, { Component } from "react";
import CompanyOffersRoot from "./CompanyOffersRoot";
import { FULL_RESTRICTED } from "../CompanyApplication/studentConstant";

const mode = "SELECT";
const part = "COMPANY";
const modeRefuse = "REFUSE";

class CompanyMission extends Component {
  state = {};

  render() {
    return (
      <div>
        <CompanyOffersRoot
          mode={mode}
          part={part}
          modeRefuse={modeRefuse}
          size={FULL_RESTRICTED}
        />
      </div>
    );
  }
}

export default CompanyMission;
