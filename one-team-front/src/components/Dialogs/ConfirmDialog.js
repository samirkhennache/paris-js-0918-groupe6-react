import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Delete from "@material-ui/icons/Delete";

class ConfirmDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleOk = () => {
    this.setState({ open: false });
    const { handleOk } = this.props;
    handleOk();
  };

  handleCancel = () => {
    this.setState({ open: false });
  };

  render() {
    const { buttonCaption, dialogTitle, dialogQuestion } = this.props;
    return (
      <div>
        <Button
          className="classic_button_red btn_size"
          onClick={this.handleClickOpen}
        >
          {buttonCaption || "buttonCaption"}
          <Delete className=" icon_Delete" />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {dialogTitle || "dialogTitle"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {dialogQuestion || "dialogQuestion"}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleOk} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ConfirmDialog;
