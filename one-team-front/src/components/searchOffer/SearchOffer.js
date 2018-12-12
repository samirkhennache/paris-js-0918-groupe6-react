import React, { Component } from "react";
import StudentOfferList from "./StudentOfferList";
import OfferView from "./OfferView";

class SearchOffer extends Component {
  render() {
    return (
      <div>
        <h3>Page Trainee Search Offer</h3>
        <StudentOfferList />
        <OfferView />
      </div>
    );
  }
}

export default SearchOffer;
