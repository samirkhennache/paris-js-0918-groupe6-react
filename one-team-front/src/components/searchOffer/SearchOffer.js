import React, { Component } from "react";
import FindOffers from "./FindOffer";
import StudentOfferList from "./StudentOfferList";
// import OfferView from "./OfferView";

class SearchOffer extends Component {
  render() {
    return (
      <div>
        <FindOffers />
        <h3>Page Trainee Search Offer</h3>
        <StudentOfferList />
      </div>
    );
  }
}

export default SearchOffer;
