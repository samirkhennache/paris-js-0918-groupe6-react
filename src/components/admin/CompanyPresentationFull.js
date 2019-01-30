import React, { Component } from "react";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import OfferView from "../offerView/OfferView";
import { FULL } from "../offerView/constants";

class CompanyPresentationFull extends Component {
  state = {};

  handleCloseFull = () => {
    const { close } = this.props;
    close();
  };

  render() {
    const {
      open,
      firstNameContact,
      lastNameContact,
      companyPhone,
      companyEmail,
      fullScreen
    } = this.props;
    return (
      <div>
        <Dialog open={open} fullScreen={fullScreen}>
          <DialogTitle />
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <OfferView size={FULL} {...this.props} />
              <div className="bloc-contact-full">
                <p className="regular_orange_title">Contact</p>
                <p className="regular_black_subtitle contact-company-full">
                  {firstNameContact} {lastNameContact}
                </p>

                <p className="criteres_big contact-company-full">
                  {companyPhone}
                </p>
                <p className="criteres_big contact-company-full">
                  {companyEmail}
                </p>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Grid container justify="center">
              <Button
                className="classic_button_blue"
                size="large"
                onClick={this.handleCloseFull}
              >
                fermer
              </Button>
            </Grid>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withMobileDialog()(CompanyPresentationFull);
