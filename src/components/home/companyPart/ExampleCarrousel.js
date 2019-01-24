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
import valeo from "../../../img/exampleCarrousel/valeo.png";
import ubisoft from "../../../img/exampleCarrousel/ubisoft.png";
import "../companyPart/PartieEntreprise.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath: valeo
  },
  {
    imgPath: ubisoft
  }
];

const styles = theme => ({
  root: {
    padding: "10px 0 30px 0",
    backgroundColor: "#494642"
  },
  mobileStepper: {
    position: "static",
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  bloc: {
    display: "flex",
    flexDirection: "column",
    width: 300,
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

class ExampleCarrousel extends React.Component {
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
        <div className={classes.root}>
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
        backgroundColor: "black"
      },
      dots: {
        margin: "0 auto 0 auto"
      }
    }
  }
});

ExampleCarrousel.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ExampleCarrousel);
