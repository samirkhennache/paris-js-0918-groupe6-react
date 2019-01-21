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
import start1 from "../../../img/companyCarrousel/start01.png";
import start2 from "../../../img/companyCarrousel/start02.png";
import start3 from "../../../img/companyCarrousel/start03.png";
import "../companyPart/PartieEntreprise.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath: start1
  },
  {
    imgPath: start2
  },
  {
    imgPath: start3
  }
];

const styles = theme => ({
  root: {
    padding: "50px 0 30px 0",
    backgroundColor: "#494642"
  },
  mobileStepper: {
    position: "static",
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  bloc: {
    display: "flex",
    flexDirection: "column",
    width: "calc(100px + 50vw)",
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

class CompanyCarrousel extends React.Component {
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
            className="recruteurs"
            id="section2"
            style={{ marginBottom: 50, marginTop: 20 }}
          >
            Pour les recruteurs
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
        backgroundColor: "black"
      },
      dots: {
        margin: "0 auto 0 auto"
      }
    }
  }
});

CompanyCarrousel.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(CompanyCarrousel);
