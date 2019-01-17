import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { selectCompany } from "../../../actions/getIdAction";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../authentication.css";

class CompanyCreateAccount extends Component {
  state = {
    companyName: null,
    firstnameContact: null,
    lastnameContact: null,
    email: null,
    phone: null,
    password: null,
    isActived: true,
    createdAt: null,
    updatedAt: null,
    title: "",
    content: "",
    button: "",
    open: false
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onSubmit = e => {
    e.preventDefault();
    const { props } = this;
    const postFormCompany = {
      companyName: e.target.companyName.value,
      firstnameContact: e.target.firstnameContact.value,
      lastnameContact: e.target.lastnameContact.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      password: e.target.password.value
    };
    axios
      .post("http://localhost:3001/company", postFormCompany)
      .then(result => {
        props.selectCompany(result.data.id);
        sessionStorage.setItem("token", result.data.id);
        props.history.push(`/company`);
        const {
          companyName,
          firstnameContact,
          lastnameContact,
          email,
          phone,
          password,
          isActived,
          createdAt,
          updatedAt
        } = result.data;
        this.setState({
          companyName,
          firstnameContact,
          lastnameContact,
          email,
          phone,
          password,
          isActived,
          createdAt,
          updatedAt
        });
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.setState({
            open: true,
            title: `user already exists`,
            content: `Cette adresse mail existe déjà, connectez-vous!`,
            button: `Se connecter`
          });
        } else {
          this.setState({
            open: true,
            title: `Oups une erreur s'est produite`,
            content: `Veuillez recommencer s'il-vous-plait`,
            button: `Fermer`
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
            name="companyName"
            placeholder="Nom de l'entreprise"
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            type="text"
            className="textField"
            name="firstnameContact"
            placeholder="Prénom"
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            type="text"
            className="textField"
            name="lastnameContact"
            placeholder="Nom"
            margin="normal"
            variant="outlined"
            required
          />

          <TextField
            type="email"
            className="textField"
            name="email"
            placeholder="Email"
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            type="text"
            className="textField"
            name="phone"
            placeholder="Numéro de téléphone"
            margin="normal"
            variant="outlined"
            required
          />

          <TextField
            type="password"
            className="textField"
            name="password"
            placeholder="Mot de passe"
            margin="normal"
            variant="outlined"
            required
          />
          <Button
            variant="contained"
            className="buttonCreateForm"
            type="submit"
          >
            S'inscrire
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
      selectCompany
    },
    dispatch
  );
export default connect(
  null,
  mapDispatchToProps
)(CompanyCreateAccount);
