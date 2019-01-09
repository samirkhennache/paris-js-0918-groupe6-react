import React, { Component } from "react";
import CompanyOffers from "../companyOffers/CompanyOffers";

export default class OfferCompletedItem extends Component {
  render() {
    return (
      <div>
        <div className="offersForAdmin">
          <CompanyOffers />
        </div>
      </div>
    );
  }
}
