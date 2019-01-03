import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { closeModal, openModal } from "../../actions/offerViewActions";

class ModalOffer extends Component {
  state = {
    open: true
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.openModal(this.props.open);
  };

  render() {
    return (
      <div className="ModalOffer">
        <Dialog
          open={this.props.open}
          // onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Use Google's location service?
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              postuler
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      closeModal,
      openModal
    },
    dispatch
  );
const mapStateToProps = state => ({
  open: state.offerViewModal.openModal
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalOffer);
