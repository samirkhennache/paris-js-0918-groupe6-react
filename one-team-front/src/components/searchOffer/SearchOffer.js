import React, { Component } from "react";
import FindOffers from "./FindOffer";
import StudentOfferList from "./StudentOfferList";
import StudentApplicationList from "../studentApplication/StudentApplicationList";
// import OfferView from "./OfferView";

class SearchOffer extends Component {
  render() {
    return (
      <div>
        <h3> Page Trainee Search Offer </h3> <FindOffers />
        {/* <StudentApplicationList /> */}
        <StudentOfferList />
      </div>
    );
  }
}

export default SearchOffer;
