import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "calc(100px + 12em)",
    margin: "auto"
    // border: '1px solid black'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    width: "calc(107px + 12em)",
    margin: "15px auto 5px auto"
  }
});

class StudentCreateAccount extends Component {
  state = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    openDialog: undefined,
    title: "",
    content: "",
    button: "",
    open: false
  };
  handleClickOpen = () => {
    this.setState({ open: true})
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const postFormStudent = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password
    };
    console.log(postFormStudent);
    axios.post("http://localhost:3001/trainee", postFormStudent).then(data =>
      this.setState({
        title: data.data.title,
        content: data.data.content,
        button: data.data.button,
        open: data.data.openDialog
      })
    );
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <form
          method="post"
          className={classes.container}
          onSubmit={this.onSubmit}
        >
          <TextField
            type="text"
            className={classes.textField}
            name="firstname"
            placeholder="Prénom"
            onChange={this.onChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            type="text"
            className={classes.textField}
            name="lastname"
            placeholder="Nom"
            onChange={this.onChange}
            margin="normal"
            variant="outlined"
            required
          />

          <TextField
            type="email"
            className={classes.textField}
            name="email"
            placeholder="Email"
            onChange={this.onChange}
            margin="normal"
            variant="outlined"
            required
          />

          <TextField
            type="password"
            className={classes.textField}
            name="password"
            placeholder="Mot de passe"
            onChange={this.onChange}
            margin="normal"
            variant="outlined"
            required
          />
          <Button variant="contained" className={classes.button} type="submit">
            S'inscrire
          </Button>
        </form>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.state.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.state.content}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              {this.state.button}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

StudentCreateAccount.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StudentCreateAccount);
