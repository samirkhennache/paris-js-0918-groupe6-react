import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import amber from "@material-ui/core/colors/amber";
import slide1 from "../../../img/students/slide1.png";
import "../companyPart/PartieEntreprise.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    subtitle: `« Ce qui me plaît est l’idée de nous engager à plusieurs sur un projet commun »`,
    imgPath: slide1
  },
  {
    subtitle: `« Je pourrais me focaliser sur un savoir spécifique que j’apporterais à la team »`,
    imgPath: "./img/slide2.png"
  },
  {
    subtitle: `« On vit en réseau, on partage des communautés d’intérêts, c’est d’être isolé qui n’est pas la norme »`,
    imgPath: "./img/slide3.png"
  },
  {
    subtitle: `« Avec une team je serais partante pour un challenge, une mission qui me confronte »`,
    imgPath: "./img/slide4.png"
  },
  {
    subtitle: `« On a l’habitude de partager les programmes et les campus, on a appris que l’intelligence vient du collectif »`,
    imgPath: "./img/slide5.png"
  }
];

const styles = theme => ({
  root: {
    padding: "50px 0 30px 0"
    // backgroundColor: "#f9bf59"
  },
  mobileStepper: {
    position: "static",
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  bloc: {
    width: "calc(100px + 50vw)",
    margin: "auto"
  },
  carrousel: {
    position: "relative"
  },
  text: {
    textAlign: "center",
    fontSize: "calc(10px + 1.5vw)",
    padding: "30px 50px 30px 50px",
    backgroundColor: "rgba(0,0,0, 0.5)",
    color: "white",
    // border: "red 1px solid",
    margin: "0px"
  },
  blocText: {
    position: "absolute",
    bottom: 0,
    margin: "auto"
    // border: "green 3px solid"
  },
  img: {
    width: "100%",
    height: "auto"
  },
  tmpText: {
    fontSize: "calc(10px + 1.5vw)"
  },
  miniHR: {
    backgroundColor: "#494642",
    height: "0.4vw",
    width: "10vw",
    margin: "auto"
  }
});

class TraineeCarrousel extends React.Component {
  state = {
    activeStep: 0
  };

  divStyle = imgSrc => ({
    backgroundImage: `url(${imgSrc})`
  });

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={`${classes.root} general_margin`}>
          <h2
            // className="recruteurs"
            id="section2"
            // // style={{ marginBottom: 50, marginTop: 20 }}
            // className={classes.tmpText}
            // style={{ color: "white", fontWeight: "bold" }}
            className="home_section"
          >
            Pour les étudiants
          </h2>
          <h3
            // className="recruteurs"
            // style={{ marginBottom: 50, marginTop: 20 }}
            // className={classes.tmpText}
            // style={{ color: "#494642", fontWeight: "bold" }}
            className="home_subsection_grey"
          >
            Tu cherches un stage en accord avec ta génération ?
          </h3>
          <div className={classes.miniHR} />
          <p className={classes.tmpText} style={{ color: "white" }}>
            Comme eux, intègre une team d’étudiants-stagiaires et participe à
            une expérience challengeante
          </p>
          <div className={classes.bloc}>
            <AutoPlaySwipeableViews
              onChangeIndex={this.handleStepChange}
              enableMouseEvents
              interval={5000}
              className={classes.carrousel}
            >
              {tutorialSteps.map((element, index) => (
                <div key={index} style={{ position: "relative" }}>
                  <img
                    className={classes.img}
                    src={element.imgPath}
                    alt={element.text}
                  />
                  <div className={classes.blocText}>
                    <h3 className={classes.text}>{element.subtitle}</h3>
                  </div>
                </div>
              ))}
            </AutoPlaySwipeableViews>

            <MobileStepper
              steps={maxSteps}
              activeStep={activeStep}
              className={classes.mobileStepper}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
const theme = createMuiTheme({
  palette: {
    primary: amber
  },
  overrides: {
    MuiMobileStepper: {
      dotActive: {
        backgroundColor: "white"
      },
      dot: {
        backgroundColor: "#ff8900"
      },
      dots: {
        margin: "0 auto 0 auto"
      }
    }
  }
});

TraineeCarrousel.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TraineeCarrousel);
