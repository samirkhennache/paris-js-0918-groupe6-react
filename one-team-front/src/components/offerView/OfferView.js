import React from "react";
import PropTypes from "prop-types";
import "./offerView.css";
import RenderHTML from "react-render-html";

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
          <hr className="application-hr" />
          <p className="regular_orange_title">{company}</p>
          <p className="mission_title">{titleMission}</p>
        </div>
      );
    }
    case "MIDDLE": {
      return (
        <div className="OfferViewMiddle">
          <div className="LogoMiddle">
            <h4>{company}</h4>
          </div>
          <div className="contenueMiddle">
            <h3 className="titleMiddle">{titleMission} </h3>
            <p className="introMiddle">{intro}</p>
            <div className="milieuMiddle">
              <p className="townMiddle">{town}</p>
              <p className="dateMiddle">
                début: {new Date(dateStart).toLocaleDateString()} - fin:{" "}
                {new Date(dateEnd).toLocaleDateString()}
              </p>
              {/* <p>fin: {new Date(dateEnd).toLocaleDateString()} </p> */}
            </div>
          </div>
        </div>
      );
    }
    case "FULL": {
      return (
        <div className="OfferViewFull">
          <h4 className="LogoFull">{company}</h4>
          <h3 className="titleFull"> {titleMission} </h3>
          <p className="introFull">{intro} </p>
          <div className="milieuFull">
            <p className="townFull">{town} </p>
            <p className="dateFull">
              {" "}
              début: {new Date(dateStart).toLocaleDateString()} - fin:{" "}
              {new Date(dateEnd).toLocaleDateString()}
            </p>
            {/* <p> fin: {new Date(dateEnd).toLocaleDateString()} </p> */}
            <p className="levelFull"> niveau d'étude: {LevelStudy} </p>
          </div>
          <p className="descripFull">{RenderHTML(description)} </p>
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
