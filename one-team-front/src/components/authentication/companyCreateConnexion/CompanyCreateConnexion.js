import React, { Component } from "react";
import CompanyCreateAccount from "./CompanyCreateAccount";
import ConnexionCompany from "./ConnexionCompany";
import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class CompanyCreateConnexion extends Component {
  state = {
    connexion: true
  };

  clickAccount = () => {
    this.setState({ connexion: false });
  };

  clickConnexion = () => {
    this.setState({ connexion: true });
  };
  render() {
    const { connexion } = this.state;
    return (
      <div>
        {connexion ? <h3>Inscrivez-vous !</h3> : <h3>Connectez-vous !</h3>}
        {connexion ? (
          <ConnexionCompany {...this.props} />
        ) : (
          <CompanyCreateAccount {...this.props} />
        )}
        {connexion ? (
          <p>
            Vous n'êtes pas encore sur OneTeam ?{" "}
            <a href="#" onClick={this.clickAccount}>
              Inscrivez-vous !
            </a>{" "}
          </p>
        ) : (
          <p>
            J'ai déjà un compte,{" "}
            <a href="#" onClick={this.clickConnexion}>
              je me connecte
            </a>{" "}
            !
          </p>
        )}
      </div>
    );
  }
}

export default CompanyCreateConnexion;
