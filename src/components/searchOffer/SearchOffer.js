import React, { Component } from "react";
import FindOffers from "./FindOffer";
import StudentOfferList from "./StudentOfferList";
import StudentApplicationList from "../studentApplication/StudentApplicationList";
// import OfferView from "./OfferView";

class SearchOffer extends Component {
  render() {
    return (
      <div>
        <FindOffers {...this.props} />
        {/* <StudentApplicationList /> */}
        {/* <StudentOfferList {...this.props} /> */}
      </div>
    );
  }
}

export default SearchOffer;
