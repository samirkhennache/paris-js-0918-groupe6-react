import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import "./Button.css";
import "./OfferView.css";

const OfferView = props => {
  const {
    size,
    titleMission,
    dateStart,
    dateEnd,
    statusAppli,
    description,
    company,
    intro,
    town,
    LevelStudy
  } = props;
  switch (size) {
    case "SMALL": {
      return (
        <div className="OfferView">
          <h3> {titleMission} </h3> <p> {company} </p>{" "}
          <p> début: {new Date(dateStart).toLocaleDateString()} </p>
          <p> fin: {new Date(dateEnd).toLocaleDateString()} </p>{" "}
          {statusAppli ? <p> En cours </p> : <p> Refusé </p>}
          {/* <ModalOffer /> */}
        </div>
      );
    }
    case "MIDDLE": {
      return (
        <div className="OfferViewM">
          <h3>{titleMission} </h3>
          <h4>{company}</h4>
          <p>{town} </p>
          <p>début: {new Date(dateStart).toLocaleDateString()} </p>
          <p>fin: {new Date(dateEnd).toLocaleDateString()} </p>
          <p>{intro} </p>
        </div>
      );
    }
    case "FULL": {
      return (
        <div className="OfferView">
          <h3> {titleMission} </h3>
          <h4>{company}</h4>
          <p>{town} </p>
          <p> début: {new Date(dateStart).toLocaleDateString()} </p>
          <p> fin: {new Date(dateEnd).toLocaleDateString()} </p>
          <p> niveau d'étude: {LevelStudy} </p>
          <p>{intro} </p>
          <p>{description} </p>
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
