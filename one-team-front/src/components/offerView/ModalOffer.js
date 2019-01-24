import React, { Component } from "react";
import { connect } from "react-redux";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";

import axios from "axios";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { AwesomeButton } from "react-awesome-button";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import OfferView from "./OfferView";
import { FULL } from "./constants";
import ModalConfimation from "./ModalConfirmation";
import "./offerView.css";
import "../pages.css";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { MakeCompletedUrl } from "../../tools";

const DialogTitle = withStyles(theme => ({
  root: {
    // borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500]
  }
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
class ModalOffer extends Component {
  state = {
    open: false,
    missionId: null,
    openToConfirm: false
  };

  componentDidMount() {
    const { missionId } = this.props;
    this.setState({
      missionId
    });
  }

  handleClose = () => {
    this.setState({ open: false, openToConfirm: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClickApplicate = () => {
    const { missionId } = this.state;
    // const { traineeId } = this.props;
    const traineeId = sessionStorage.getItem("token");
    this.setState({ open: false });
    axios
      .post(MakeCompletedUrl("application"), {
        missionId,
        traineeId
      })
      .then(res => {
        if (res.status === 200)
          this.setState({
            openToConfirm: true,
            content: `votre candidature a bien été envoyée`
          });
      })
      .catch(error => {
        if (error.response.status === 404) {
          this.setState({
            openToConfirm: true,
            content: `Vous avez déjà posluter à cette offre`
          });
        }
      });
  };

  render() {
    const { open, content, openToConfirm } = this.state;
    const { size, titleMission, missionId, fullScreen } = this.props;
    switch (size) {
      case "SMALL": {
        return (
          <div className="ModalOffer application-item">
            <Paper>
              <div className="application-paper">
                <OfferView
                  key={`${missionId}-${titleMission}`}
                  {...this.props}
                  size={size}
                />
                <MuiThemeProvider theme={theme}>
                  <Button
                    className="classic_button_orange"
                    // color="primary"
                    variant="contained"
                    onClick={this.handleOpen}
                  >
                    {size === "SMALL" ? "Voir l'offre" : "En savoir plus"}
                  </Button>
                </MuiThemeProvider>
              </div>
            </Paper>
            {/* //////////////////////////////////////////////////// */}
            <Dialog
              open={open}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              onClose={this.handleClose}
            >
              <DialogTitle
                id="customized-dialog-title"
                onClose={this.handleClose}
              />
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <OfferView
                    key={`${missionId}-${titleMission}`}
                    {...this.props}
                    size={FULL}
                  />
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                {size === "SMALL" ? (
                  <Button disabled color="primary">
                    postuler
                  </Button>
                ) : (
                  <Button onClick={this.handleClickApplicate} color="primary">
                    postuler
                  </Button>
                )}
              </DialogActions>
            </Dialog>
            <ModalConfimation
              openConfirmation={openToConfirm}
              content={content}
              close={this.handleClose}
              {...this.props}
            />
          </div>
        );
      }
      default:
        return (
          <div className="ModalOffer">
            <Paper className="Middle">
              <OfferView
                key={`${missionId}-${titleMission}`}
                {...this.props}
                size={size}
              />
              <Button
                color="primary"
                className="classic_button_orange "
                variant="contained"
                onClick={this.handleOpen}
              >
                {size === "SMALL" ? "Consulter" : "En savoir plus"}
              </Button>
            </Paper>

            {/* //////////////////////////////////////////////////// */}
            <Dialog
              open={open}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              onClose={this.handleClose}
              fullScreen={fullScreen}
            >
              <DialogTitle
                id="customized-dialog-title"
                onClose={this.handleClose}
              />
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <OfferView
                    key={`${missionId}-${titleMission}`}
                    {...this.props}
                    size={FULL}
                  />
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                {size === "SMALL" ? (
                  <Button disabled color="primary">
                    postuler
                  </Button>
                ) : (
                  <Button
                    className="classic_button_blue"
                    size="large"
                    onClick={this.handleClickApplicate}
                    color="primary"
                  >
                    postuler
                  </Button>
                )}
              </DialogActions>
            </Dialog>
            <ModalConfimation
              openConfirmation={openToConfirm}
              content={content}
              close={this.handleClose}
              {...this.props}
            />
          </div>
        );
    }
  }
}

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: "#ff8900"
  //   }
  // }
});

const mapStateToProps = state => ({
  traineeId: state.student.id
});
export default connect(mapStateToProps)(withMobileDialog()(ModalOffer));
