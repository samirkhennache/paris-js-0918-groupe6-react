import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TraineeCreateConnexion from "../authentication/studentCreateConnexion/TraineeCreateConnexion";

class Home extends Component {
  state = {
    open: false,
    button: "fermer"
  };

  openConnexion = () => {
    this.setState({
      open: true
    });
    console.log("openConnexion");
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, button } = this.state;
    console.log(this.props);
    return (
      <div>
        <h3>Page acceuil générale</h3>
        <button type="button" onClick={this.openConnexion}>
          Trouver un stage
        </button>
        <button type="button">Déposer une offre</button>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <TraineeCreateConnexion {...this.props} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              {button}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Home;
