import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";

class CompanyPresentationFull extends Component {
  state = {};

  handleCloseFull = () => {
    const { close } = this.props;
    close();
  };

  render() {
    const {
      open,
      titleMission,
      company,
      dateStart,
      dateEnd,
      town,
      introduction,
      description,
      firstNameContact,
      lastNameContact,
      companyPhone,
      companyEmail
    } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="customized-dialog-title" />
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div>
                <p>{titleMission}</p>
                <p>{company}</p>
                <p>début: {new Date(dateStart).toLocaleDateString()}</p>
                <p>fin: {new Date(dateEnd).toLocaleDateString()}</p>
                <p>{town}</p>
                <p>{introduction}</p>
                <p>{description}</p>
              </div>
              <div>
                <p>Contact</p>
                <p>{firstNameContact}</p>
                <p>{lastNameContact}</p>
                <p>{companyPhone}</p>
                <p>{companyEmail}</p>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseFull}>fermer</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CompanyPresentationFull;
