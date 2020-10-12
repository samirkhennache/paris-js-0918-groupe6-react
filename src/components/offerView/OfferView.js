/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./offerView.css";
import { Link } from "react-router-dom";

import RenderHTML from "react-render-html";
import Grid from "@material-ui/core/Grid";
import {
  sendBirdSelectors,
  withSendBird,
  SendBirdProvider
} from "sendbird-uikit";
import townFull from "../../img/icons/placeholder-filled-point.png";
import nextFull from "../../img/icons/right-chevron(1).png";
import levelFull from "../../img/icons/graduate-cap.png";
import buildingCircle from "../../img/icons/building_circle.png";
import calendar from "../../img/icons/calendar-black.png";
import loading from "../../img/icons/reload-symbol-black.png";
import loadingWhite from "../../img/icons/reload-symbol.png";
import accept from "../../img/icons/check-mark-black.png";
import refuse from "../../img/icons/cross.png";
import refuseWhite from "../../img/icons/cross(white).png";

import "./Button.css";
import "../pages.css";

const CustomLink = ({ createChannel, sdk, connect, companyId }) => (
  // eslint-disable-next-line no-shadow
  // const [channelUrl, setChannelUrl] = useState("");

  <>
    <Link
      to="trainee/chat"
      onClick={() => {
        const params = new sdk.GroupChannelParams();
        connect(
          sessionStorage.getItem("token"),
          sessionStorage.getItem("access_token")
        ).then(user => {
          console.log("USER", user);

          params.isPublic = true;
          params.isEphemeral = false;
          params.isDistinct = false;
          params.addUserIds([
            sessionStorage.getItem("token"),
            companyId.toString()
            // companyId.toString()
          ]);
          params.operatorUserIds = [sessionStorage.getItem("token")];
          params.name = JSON.parse(sessionStorage.getItem("data")).firstname;
          console.log("params", params);
          createChannel(params)
            .then(c => {
              sessionStorage.setItem("chanelUrl", c.url);
            })
            .catch(c => console.warn(c));
        });
      }}
    >
      {" "}
      Create channel
    </Link>
  </>
);
// const MyComponentConnecxion = props => (
//   <button
//     type="button"
//     onClick={() =>
//       props
//         .connect(
//           sessionStorage.getItem("token"),
//           "370bc5c3e531b131bb7c29ce39a2b1c7170e06af"
//         )
//         .then(user => console.log("USER", user))
//     }
//   >
//     Connect to chat
//   </button>
// );

// const CustomComponentConnexion = withSendBird(MyComponentConnecxion, state => ({
//   // Mapping context state to props
//   connect: sendBirdSelectors.getConnect(state)
// }));
const CustomLinkWithSendBird = withSendBird(CustomLink, state => {
  const connect = sendBirdSelectors.getConnect(state);
  const createChannel = sendBirdSelectors.getCreateChannel(state);
  const sdk = sendBirdSelectors.getSdk(state);
  return { createChannel, sdk, connect };
});
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
  console.log("props", props);

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
          <Grid container spacing={16} justify="center" alignItems="center">
            <Grid item xs={4} sm={2} lg={2} className="logo-grid">
              <div className="LogoMiddle">
                <img src={buildingCircle} alt="building" />
              </div>
            </Grid>
            <Grid item xs={12} sm={10} lg={10}>
              <div className="content-Middle">
                <div>
                  <p className=" regular_orange_subtitle company-offer">
                    {company}{" "}
                  </p>
                  <p className="mission_title">{titleMission}</p>
                </div>

                <div className="date-town-offer">
                  <div className="application-date margin-date">
                    <div className="date-icon">
                      <img src={calendar} alt="calendar" />
                    </div>
                    <p className="criteres_search-offer">
                      {new Date(dateStart).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="application-date">
                    <div className="date-icon">
                      <img
                        src="img/placeholder-filled-point.png"
                        alt="calendar"
                      />
                    </div>
                    <p className="criteres_search-offer">{town}</p>
                    <SendBirdProvider
                      appId="D36ADF40-475A-46DF-98B5-38BD1182C989"
                      accessToken={sessionStorage.getItem("access_token")}
                      userId={sessionStorage.getItem("token")}
                    >
                      <CustomLinkWithSendBird {...props} />
                      {/* <CustomComponentConnexion /> */}
                    </SendBirdProvider>
                  </div>
                </div>

                {/* <div className="milieuMiddle">
              <p className="dateMiddle">
                <img src="img/calendar.png" alt="calendar" />
                {new Date(dateStart).toLocaleDateString()}
              </p>
              <p className="townMiddle">
                <img src="img/placeholder-filled-point.png" alt="pointer" />
                {town}
              </p>
            </div> */}
              </div>
            </Grid>
          </Grid>
        </div>
      );
    }
    case "FULL": {
      return (
        <div className="OfferViewFull">
          <p className="regular_black_title center-company-full">{company}</p>
          <hr className="hr_horizontal_orange" />
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
