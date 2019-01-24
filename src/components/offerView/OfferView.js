import React from "react";
import PropTypes from "prop-types";
import "./offerView.css";
import RenderHTML from "react-render-html";
import townFull from "../../img/icons/placeholder-filled-point.png";
import nextFull from "../../img/icons/right-chevron(1).png";
import levelFull from "../../img/icons/graduate-cap.png";
import Typography from "@material-ui/core/Typography";
import calendar from "../../img/icons/calendar-black.png";
import loading from "../../img/icons/reload-symbol-black.png";
import loadingWhite from "../../img/icons/reload-symbol.png";
import accept from "../../img/icons/check-mark-black.png";
import refuse from "../../img/icons/cross.png";
import refuseWhite from "../../img/icons/cross(white).png";

import "./Button.css";
import "../pages.css";

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
              <div className="date-icon">
                <img src={calendar} alt="calendar" />
              </div>
              <p className="criteres_big">
                {new Date(dateStart).toLocaleDateString()}
              </p>
            </div>
            <div>
              {statusAppli ? (
                <div className="application-satut">
                  <div className="statut-icon-blue">
                    <img src={loadingWhite} alt="en cours" />
                  </div>
                  <div className="statut-icon">
                    <img src={refuse} alt="en cours" />
                  </div>
                  <div className="statut-icon">
                    <img src={accept} alt="en cours" />
                  </div>
                </div>
              ) : (
                <div className="application-satut">
                  <div className="statut-icon">
                    <img src={loading} alt="en cours" />
                  </div>
                  <div className="statut-icon-red">
                    <img src={refuseWhite} alt="en cours" />
                  </div>
                  <div className="statut-icon">
                    <img src={accept} alt="en cours" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <hr className="application-hr hr_horizontal" />
          <p className="regular_orange_title">{company}</p>
          <p className="mission_title application-mission">{titleMission}</p>
        </div>
      );
    }
    case "MIDDLE": {
      return (
        <div className="OfferViewMiddle">
          <div className="LogoMiddle">
            <img src="img/three-buildings-black.png" alt="building" />
          </div>
          <div className="contenueMiddle">
            <h3 className="companyMiddle">{company} </h3>
            <p className="titleMiddle">{titleMission}</p>
            <div className="milieuMiddle">
              <p className="dateMiddle">
                <img src="img/calendar.png" alt="calendar" />
                {new Date(dateStart).toLocaleDateString()}
                {/*- fin: {new Date(dateEnd).toLocaleDateString()} */}
              </p>
              <p className="townMiddle">
                <img src="img/placeholder-filled-point.png" alt="pointer" />
                {town}
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
          <p className="regular_black_title center-company-full">{company}</p>
          <hr className="hr_horizontal_orange"/>
          <p className="regular_orange_title">La mission</p>
          <p className="titleFull mission_title_middle">{titleMission}</p>

          <div className="milieuFull">
            <p className="townFull ">
              <img className="imageFull" src={townFull} alt="pointer" />
              {town}{" "}
            </p>
            <p className="dateFull">
              <img className="imageFull" src={calendar} alt="calendar" />
              {new Date(dateStart).toLocaleDateString()}
              <img className="imageFull" src={nextFull} alt="chevron" />
              {new Date(dateEnd).toLocaleDateString()}
            </p>
            {/* <p> fin: {new Date(dateEnd).toLocaleDateString()} </p> */}
            <p className="levelFull">
              <img className="imageFull" src={levelFull} alt="" />
              {LevelStudy}{" "}
            </p>
          </div>
          <p className="regular_orange_title">EN QUELQUES MOTS</p>
          <p className="regular_text introFull">{intro} </p>
          <p className="regular_orange_title">DÉTAILS</p>
          <p className="regular_text">{RenderHTML(description)} </p>
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
