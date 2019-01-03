import React, { Component } from "react";

import logo from "../../img/Logo.png";

import "./OnePage.css";
import Button from "@material-ui/core/Button";
import PartieEntreprise from "./PartieEntreprise";

export default class OnePage extends Component {
  render() {
    return (
      // Header //
      <div>
        <div className="Header">
          <div className="Header-overlay">
            <img className="logo" src={logo} />
            <p className="connexion">
              <span>Se connecter </span>|<span> S'inscrire</span>
            </p>

            <h1 className="textCentral">
              La 1ère plateforme de teams <br /> d'étudiants-stagiaires
            </h1>
            <Button variant="contained" className="buttonConnexion">
              Déposer une offre de stage
            </Button>
            <Button variant="contained" className="buttonConnexion2">
              Postuler à une offre
            </Button>
          </div>
        </div>
        <PartieEntreprise />
      </div>
    );
  }
}
