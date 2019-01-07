import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { selectStudent } from "../../../actions/getIdAction";

import "../authentication.css";

class ConnexionTrainee extends Component {
  state = {
    showPassword: false,
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

  handleOnSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { props } = this;
    const postDataLogin = {
      email,
      password
    };

    Axios.post("http://localhost:3001/trainee/login", postDataLogin)
      .then(result => {
        props.selectStudent(result.data.id);
        sessionStorage.setItem("token", result.data.id);
        props.history.push("/trainee");
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.setState({
            open: true,
            title: `user doesn't exists`,
            content: `Cette adresse mail n'est pas reconnue, essayer de nouveau ou bien crééz votre compte :)`,
            button: `Créer un compte`
          });
        } else if (error.response.status === 404) {
          this.setState({
            open: true,
            title: `false password`,
            content: `erreur lors de la saisie du mot de passe`,
            button: `Fermer`
          });
        } else {
          this.setState({
            open: true,
            title: error.response.status,
            content: `erreur inconnue, veuillez recommencez`,
            button: `Fermer`
          });
        }
      });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { open, title, content, button } = this.state;
    const { showPassword } = this.state;
    return (
      <div className="createForm">
        <form method="post" onSubmit={this.handleOnSubmit}>
          <TextField
            type="email"
            className="textField"
            name="email"
            label="Email"
            onChange={this.onChange}
            // margin="normal"
            variant="outlined"
            required
          />
          <TextField
            className="textField"
            variant="outlined"
            name="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            margin="normal"
            onChange={this.onChange}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Button
            variant="contained"
            className="buttonCreateForm"
            type="submit"
          >
            Se connecter
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
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectStudent
    },
    dispatch
  );
export default connect(
  null,
  mapDispatchToProps
)(ConnexionTrainee);
