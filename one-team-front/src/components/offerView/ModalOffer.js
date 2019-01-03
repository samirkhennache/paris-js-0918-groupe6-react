import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { AwesomeButton } from "react-awesome-button";
import { FULL } from "./constants";
import OfferView from "./OfferView";
import { selectStudent } from "../../actions/getIdAction";

class ModalOffer extends Component {
  state = {
    open: false,
    missionId: null
  };

  componentDidMount() {
    const { missionId } = this.props;
    this.setState({
      missionId
    });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClickApplicate = () => {
    const { missionId } = this.state;
    const { traineeId } = this.props;
    this.setState({ open: false });
    axios
      .post("http://localhost:3001/application", {
        missionId,
        traineeId
      })
      .then(res => console.log(res));
  };

  render() {
    const { open } = this.state;
    const { size, titleMission, missionId } = this.props;
    return (
      <div className="ModalOffer">
        <OfferView
          key={`${missionId}-${titleMission}`}
          {...this.props}
          size={size}
        />
        <AwesomeButton
          type="primary"
          className="aws-btn remove"
          action={this.handleOpen}
        >
          En savoir plus
        </AwesomeButton>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          onClose={this.handleClose}
        >
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
            <Button onClick={this.handleClickApplicate} color="primary">
              postuler
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  id_student: state.student.id
});
export default connect(mapStateToProps)(ModalOffer);
