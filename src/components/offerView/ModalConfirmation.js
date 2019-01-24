import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const DialogTitle = withStyles(theme => ({
  root: {
    // borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 10,
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
const handleClose = props => {
  const { close } = props;
  close();
};
const SeeApplication = props => {
  const { history } = props;
  history.push("trainee/applications");
};
const ModalConfirmation = props => {
  const { openConfirmation, content } = props;
  return (
    <div>
      <Dialog
        open={openConfirmation}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        onClose={handleClose}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => handleClose(props)}
        />
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <Button onClick={() => SeeApplication(props)} color="primary">
            Voir mes candidatures
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalConfirmation;
