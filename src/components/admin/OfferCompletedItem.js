import React, { Component } from "react";
import ConnexionTrainee from "../authentication/studentCreateConnexion/ConnexionTrainee";
import "./OfferCompletedItem.css";

export default class OfferCompletedItem extends Component {
  render() {
    return (
      <div className="background-admin">
        <div className="connexion-admin">
          <ConnexionTrainee {...this.props} />
        </div>
      </div>
    );
  }
}
