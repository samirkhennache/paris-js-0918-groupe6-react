import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../authentication.css";

class StudentCreateAccount extends Component {
  state = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    title: "",
    content: "",
    button: "",
    open: false
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
    const { firstname, lastname, email, password } = this.state;
    const { props } = this;
    e.preventDefault();
    const postFormStudent = {
      firstname,
      lastname,
      email,
      password
    };
    axios
      .post("http://localhost:3001/trainee", postFormStudent)
      .then(() => {
        props.history.push("/search-offers");
      })
      .catch(error => {
        if (error.response.status === 400) {
          this.setState({
            open: true,
            title: `user already exists`,
            content: `Cette adresse mail existe déjà, connectez-vous!`,
            button: `Se connecter`
          });
        }
      });
  };

  render() {
    const { open, title, content, button } = this.state;
    return (
      <div className="createForm">
        <form method="post" onSubmit={this.onSubmit}>
          <TextField
            type="text"
            className="textField"
            name="firstname"
            placeholder="Prénom"
            onChange={this.onChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            type="text"
            className="textField"
            name="lastname"
            placeholder="Nom"
            onChange={this.onChange}
            margin="normal"
            variant="outlined"
            required
          />

          <TextField
            type="email"
            className="textField"
            name="email"
            placeholder="Email"
            onChange={this.onChange}
            margin="normal"
            variant="outlined"
            required
          />

          <TextField
            type="password"
            className="textField"
            name="password"
            placeholder="Mot de passe"
            onChange={this.onChange}
            margin="normal"
            variant="outlined"
            required
          />
          <Button
            variant="contained"
            className="buttonCreateForm"
            type="submit"
          >
            {`S'inscrire`}
          </Button>
        </form>
        <Dialog
          open={open}
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
}

export default StudentCreateAccount;
