import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./traineeOffers.css";

const offers = [
  {
    logo: "img/logo2.svg",
    title: "ENGIE",
    content:
      "SOURCER DES SOLUTIONS INNOVANTES EN MATIÈRE DE CONSEIL EN MANAGEMENT",
    website: "www.lkjelkjeelmfkzfljeflj.com",
    createdDate: "04/01/2019",
    town: "Paris"
  },
  {
    logo: "img/logo3.jpeg",
    title: "LA POSTE",
    content:
      "OPTIMISER LA SUPPLY CHAIN EN Y INTÉGRANT LES NOUVELLES TECHNOLOGIES. ACCÉLÉRER LE DÉVELOPPEMENT DE PROJETS D’E-COMMERCE ET D’IN-",
    website: "www.lkjelkjeelmfkzfljeflj.com",
    createdDate: "04/01/2019",
    town: "Paris"
  }
];

const styles = {
  miniHR: {
    backgroundColor: "white",
    height: "4px",
    width: "10vw",
    margin: "auto"
  }
};

class TraineeOffers extends Component {
  render() {
    return (
      <div className="general-offers general_margin">
        {/* <h2>Parcourir les offres de stage</h2> */}
        <h2 className="home_subsection_white">Parcourir les offres de stage</h2>
        <hr className="hr_horizontal_white" />

        <div className="bloc-offers">
          {offers.map((element, index) => (
            // <Paper className="papers-offers" elevation={3}>
            //   <div className="bloc-offers-solo" key={index}>
            //     <div className="logo-offers">
            //       <img src={element.logo} alt={element.title} />
            //     </div>
            //     <h4 className="text-offers">{element.title}</h4>
            //     <p className="text-offers">{element.content}</p>
            //     <a className="text-offers" href={element.website}>
            //       {element.website}
            //     </a>
            //   </div>
            // </Paper>
            <Paper key={index} className="papers-offers" elevation={3}>
              <Grid container className="papers-offers-row">
                <Grid
                  item
                  xs={3}
                  className="papers-offers-column"
                  // style={{ border: "1px red solid" }}
                >
                  <div className="logo-offers">
                    <img src={element.logo} alt={element.title} />
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <Grid
                    container
                    className="papers-offers-description"
                    direction="column"
                    justify="space-between"
                    alignItems="stretch"
                    wrap="nowrap"
                  >
                    <Grid
                      item
                      className="papers-offers-description-text"
                      // style={{ border: "2px pink solid" }}
                    >
                      <div className="blocTitleContent">
                        <p className="titleMiddle regular_orange_title">
                          {element.title}
                        </p>
                        <p>{element.content}</p>
                      </div>
                    </Grid>
                    <Grid
                      item
                      className="papers-offers-description-logos"
                      // style={{ border: "2px pink solid" }}
                    >
                      <div
                        className="papers-offers-description-logo"
                        // style={{ border: "2px green solid" }}
                      >
                        <img
                          src="img/placeholder-filled-point.png"
                          alt="point"
                        />
                      </div>
                      <p>{element.town}</p>
                      <div
                        className="papers-offers-description-logo"
                        // style={{ border: "2px green solid" }}
                      >
                        <img src="img/calendar.png" alt="calendar" />
                      </div>
                      <p>{element.createdDate}</p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </div>
      </div>
    );
  }
}

export default TraineeOffers;
