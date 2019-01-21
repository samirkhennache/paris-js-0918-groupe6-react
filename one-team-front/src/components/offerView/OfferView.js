import React from "react";
import PropTypes from "prop-types";
import "./offerView.css";

import Typography from "@material-ui/core/Typography";

import "./Button.css";

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
        <div className="OfferView small-offerView ">
          <div className="application-date-statut">
            <div className="application-date">
              <img src="#" alt="#" />
              <p className="criteres_big">
                {new Date(dateStart).toLocaleDateString()}
              </p>
            </div>
            <div>
              {statusAppli ? (
                <div className="application-satut">
                  <img src="#" alt="en cours" />
                  <img src="#" alt="#" />
                  <img src="#" alt="#" />
                </div>
              ) : (
                <div>
                  <img src="#" alt="#" />
                  <img src="#" alt="refusé" />
                  <img src="#" alt="#" />
                </div>
              )}
            </div>
          </div>
          <hr className="application-hr"/>
          <p className="regular_orange_title">{company}</p>
          <p className="mission_title">{titleMission}</p>
        </div>
      );
    }
    case "MIDDLE": {
      return (
        <div className="OfferView">
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
