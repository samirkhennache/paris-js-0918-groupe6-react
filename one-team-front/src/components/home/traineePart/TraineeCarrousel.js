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
  },
  mobileStepper: {
    position: "static",
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  bloc: {
    display: "flex",
    flexDirection: "column",
    margin: "auto"
  },
  carrousel: {
    position: "relative"
  },
  text: {
    position: "absolute",
    bottom: 0,
    textAlign: "center",
    fontSize: "calc(10px + 2vw)",
    width: "100%",
    padding: "20px 0 20px 0"
  },
  blocText: {
    position: "relative",
    width: "80%",
    margin: "auto"
  },
  img: {
    width: "100%",
    height: "auto"
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
            className="home_section"
            style={{ marginBottom: 50, marginTop: 20 }}
          >
            Pour les étudiants
          </h2>
          <div className={classes.bloc}>
            <AutoPlaySwipeableViews
              onChangeIndex={this.handleStepChange}
              enableMouseEvents
              interval={5000}
              className={classes.carrousel}
            >
              {tutorialSteps.map((element, index) => (
                <div key={index}>
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
