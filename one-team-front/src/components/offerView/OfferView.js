import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

const OfferView = props => {
  const {
    size,
    titleMission,
    dateStart,
    dateEnd,
    statusAppli,
    description,
    company
  } = props;
  switch (size) {
    case "SMALL": {
      return (
        <div className="OfferView">
          <h3> {titleMission} </h3> <p> {company} </p> <p> {dateStart} </p>
          <p> {dateEnd} </p> {statusAppli && <p> en cours </p>}
          {/* <ModalOffer /> */}
        </div>
      );
    }
    case "MIDDLE": {
      return (
        <div className="OfferView">
          <h3> {titleMission} </h3>
          <h4>{company}</h4>
          <p> {dateStart} </p>
          <p> {dateEnd} </p>
          <p> {description} </p>
        </div>
      );
    }
    case "FULL": {
      return (
        <div className="OfferView">
          <h3> {titleMission} </h3>
          <h4>{company}</h4>
          <p> {dateStart} </p>
          <p> {dateEnd} </p>
          <p> {description} </p>
        </div>
      );
    }
    default:
      break;
  }
};

OfferView.propTypes = {
  titleMission: PropTypes.string.isRequired,
  dateStart: PropTypes.instanceOf(Date).isRequired,
  dateEnd: PropTypes.instanceOf(Date).isRequired,
  description: PropTypes.string.isRequired
};

export default OfferView;
