import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import "./ButtonStudent.css";

import TraineeCreateConnexion from "../../authentication/studentCreateConnexion/TraineeCreateConnexion";

class ButtonStudent extends Component {
  state = {
    openTrainee: false,
    openCompany: false,
    button: "fermer"
  };

  traineeOpenConnexion = () => {
    this.setState({
      openTrainee: true
    });
  };

  handleCloseTrainee = () => {
    this.setState({ openTrainee: false });
  };

  handleCloseCompany = () => {
    this.setState({ openCompany: false });
  };
  render() {
    const { openTrainee, button } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <Button
          variant="contained"
          className="ButtonStudent"
          onClick={this.traineeOpenConnexion}
        >
          S'inscrire
        </Button>

        {/* DIALOG TRAINEE ---------------------------------------- */}
        <Dialog
          open={openTrainee}
          onClose={this.handleCloseTrainee}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <TraineeCreateConnexion {...this.props} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseTrainee} color="primary">
              {button}
            </Button>
          </DialogActions>
        </Dialog>
      </MuiThemeProvider>
    );
  }
}

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      contained: { backgroundColor: "#ff8900" }
    }
  }
});

export default ButtonStudent;
