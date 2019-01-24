import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import StudentView from "./StudentView";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { FULL } from "./studentConstant";

const styles = theme => ({
  dialog: {
    width: ""
  }
});

class StudentProfilView extends Component {

  handleCloseFull = () => {
    const { close } = this.props;
    close();
  };

  render() {
    const { classes, open, size, fullScreen, ...other } = this.props;
    return (
      <div>
        <Dialog
          {...other}
          classeName={classes.dialog}
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
          maxWidth="md"
          fullScreen={fullScreen}
        >
          <DialogTitle id="customized-dialog-title" />
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <StudentView {...this.props} size={size} />
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
export default withStyles(styles)(withMobileDialog()(StudentProfilView));
