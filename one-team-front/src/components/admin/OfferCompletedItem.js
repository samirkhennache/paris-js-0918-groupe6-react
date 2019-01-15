import React, { Component } from "react";
import ConnexionTrainee from "../authentication/studentCreateConnexion/ConnexionTrainee";
import "./OfferCompletedItem.css";

export default class OfferCompletedItem extends Component {
  render() {
    return (
      <div className="offersForAdmin" style={{ height: 641 }}>
        <div className="miniMarge">
          <ConnexionTrainee {...this.props} />
        </div>
      </div>
    );
  }
}
