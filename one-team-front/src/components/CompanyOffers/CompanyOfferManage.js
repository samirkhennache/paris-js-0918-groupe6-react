import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import "./Button.css";

class CompanyOfferManage extends Component {
  render() {
    return (
      <div>
        <AwesomeButton type="primary" className="aws-btn edit">
          Modifier
        </AwesomeButton>
        <br />
        <AwesomeButton type="primary" className="aws-btn remove">
          Supprimer
        </AwesomeButton>
        <br />
        <hr align="center" width="50%" color="midnightblue" size="1" />
        <AwesomeButton type="primary" className="aws-btn validate">
          Valider ma team
        </AwesomeButton>
      </div>
    );
  }
}

export default CompanyOfferManage;
