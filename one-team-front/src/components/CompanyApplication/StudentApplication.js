import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import axios from "axios";
import { MakeCompletedUrl } from "../../tools";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Check from "@material-ui/icons/Check";

import { loadavg } from "os";
import { SMALL, SMALL_ADMIN } from "./studentConstant";
import StudentProfilView from "./StudentProfilView";
import StudentView from "./StudentView";

import "./StudentApplication.css";

class StudentApplication extends Component {
  state = {
    open: false,
    openMessageSelect: false,
    openMessageRefuse: false,
    title: ``,
    content: ``,
    button: ``
  };

  clickStudentSmall = () => {
    this.setState({ open: true });
  };

  clickClose = () => {
    this.setState({ open: false });
  };

  selectStudent = mode => {
    const { missionId, traineeId, firstname } = this.props;
    axios
      .put(MakeCompletedUrl(`application`), {
        missionId,
        traineeId,
        mode
      })
      .then(response => {
        this.setState({
          openMessageSelect: true,
          title: `Trainee added`,
          content: `L'étudiant ${firstname} a bien été pré-sélectionné pour la mission`,
          button: `Fermer`
        });
      })
      .catch(error => {
        if (error.response.status === 404) {
          this.setState({
            openMessageSelect: true,
            title: `Trainee already preselected`,
            content: `L'étudiant(e) ${firstname} a déjà été pré-sélectionné`,
            button: `Fermer`
          });
        } else {
          this.setState({
            openMessageSelect: true,
            title: `Oups une erreur s'est produite`,
            content: `Veuillez recommencer s'il-vous-plait`,
            button: `Fermer`
          });
        }
      });
  };

  refuseStudent = mode => {
    const { missionId, traineeId, firstname } = this.props;
    // console.log("onclick", missionId, traineeId, mode);
    axios
      .put(MakeCompletedUrl(`application`), {
        missionId,
        traineeId,
        mode
      })
      .then(response => {
        // console.log(response);
        this.setState({
          openMessageRefuse: true,
          title: `Trainee deleted`,
          content: `L'étudiant(e) ${firstname} a bien été refusé pour cette mission`,
          button: `Fermer`
        });
      })
      .catch(error => {
        // console.log(error.response);
        if (error.response.status === 404) {
          this.setState({
            openMessageSelect: true,
            title: `Trainee already preselected`,
            content: `L'étudiant(e) ${firstname} a déjà été pré-sélectionné`,
            button: `Fermer`
          });
        } else {
          this.setState({
            openMessageSelect: true,
            title: `Oups une erreur s'est produite`,
            content: `Veuillez recommencer s'il-vous-plait`,
            button: `Fermer`
          });
        }
      });
  };

  handleClose = () => {
    const { handleCloseRefresh, traineeId, missionId } = this.props;
    handleCloseRefresh(traineeId, missionId);
    this.setState({ openMessageSelect: false, openMessageRefuse: false });
  };

  render() {
    const {
      open,
      openMessageSelect,
      openMessageRefuse,
      title,
      button,
      content
    } = this.state;
    const { mode, modeSelect, modeRefuse, disabled, isFull } = this.props;
    // console.log("isFull :", isFull);
    // console.log(
    //   "StudentApplication",
    //   this.props.newDateStart,
    //   this.props.newDateEnd
    // );

    switch (mode) {
      case "APPLICATION": {
        return (
          <div>
            <div>
              <a onClick={() => this.refuseStudent(modeRefuse)}>
                <p className="button-negative side-by-side" />
              </a>
              <div onClick={this.clickStudentSmall}>
                <StudentView
                  {...this.props}
                  dateStart={this.props.newDateStart}
                  dateEnd={this.props.newDateEnd}
                  size={SMALL}
                  open={open}
                />
              </div>
              {isFull ? (
                // <Button variant="contained" disabled>
                //   Ajouter
                // </Button>
                <Button
                  color="primary"
                  variant="contained"
                  className="classic_button_orange"
                >
                  Aperçu profil
                  <Check className="traineeProfileIcon color-orange classic_button_orange " />
                </Button>
              ) : (
                // <Button
                //   onClick={() => this.selectStudent(modeSelect)}
                //   variant="contained"
                //   color="primary"
                // >
                //   Ajouter
                // </Button>
                <Button
                  color="primary"
                  variant="contained"
                  className="classic_button_green"
                  onClick={() => this.selectStudent(modeSelect)}
                >
                  Ajouter
                  <Check className="traineeProfileIcon color-orange" />
                </Button>
              )}
              {/* <Button
                onClick={() => this.refuseStudent(modeRefuse)}
                variant="contained"
                color="secondary"
              >
                Refuser{" "}
              </Button> */}

              <StudentProfilView
                {...this.props}
                dateStart={this.props.newDateStart}
                dateEnd={this.props.newDateEnd}
                open={open}
                close={this.clickClose}
              />
            </div>
            {/* **************** DIALOG AJOUT OK ************************** */}
            <Dialog
              open={openMessageSelect}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {content}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  {button}
                </Button>
              </DialogActions>
            </Dialog>
            {/* **************** DIALOG SUPPRESSION OK ************************** */}
            <Dialog
              open={openMessageRefuse}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {content}
                </DialogContentText>
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
      case "SELECT": {
        return (
          <div>
            <div>
              <div onClick={() => this.clickStudentSmall()}>
                <StudentView
                  {...this.props}
                  dateStart={this.props.newDateStart}
                  dateEnd={this.props.newDateEnd}
                  size={SMALL}
                />
              </div>
              {disabled || isFull ? (
                <Button disabled variant="contained" color="secondary">
                  Refuser
                </Button>
              ) : (
                <Button
                  onClick={() => this.refuseStudent(modeRefuse)}
                  variant="contained"
                  color="secondary"
                >
                  Refuser
                </Button>
              )}
              <StudentProfilView
                {...this.props}
                dateStart={this.props.newDateStart}
                dateEnd={this.props.newDateEnd}
                open={open}
                close={this.clickClose}
              />
            </div>
            {/* **************** DIALOG SUPPRESSION OK ************************** */}
            <Dialog
              open={openMessageRefuse}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {content}
                </DialogContentText>
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
      case "ADMIN": {
        return (
          <div>
            <div>
              <div onClick={() => this.clickStudentSmall()}>
                <StudentView
                  {...this.props}
                  dateStart={this.props.newDateStart}
                  dateEnd={this.props.newDateEnd}
                  size={SMALL_ADMIN}
                />
              </div>
              <StudentProfilView
                {...this.props}
                dateStart={this.props.newDateStart}
                dateEnd={this.props.newDateEnd}
                open={open}
                close={this.clickClose}
              />
            </div>
          </div>
        );
      }
      default:
        break;
    }
  }
}

export default StudentApplication;
