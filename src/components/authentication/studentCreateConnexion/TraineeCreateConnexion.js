import React, { Component } from "react";
import ConnexionTrainee from "./ConnexionTrainee";
import StudentCreateAccount from "./StudentCreateAccount";
import "../authentication.css";

class TraineeCreateConnexion extends Component {
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
        {connexion ? <h3>Connectez-vous !</h3> : <h3>Inscrivez-vous !</h3>}
        {connexion ? (
          <ConnexionTrainee {...this.props} />
        ) : (
          <StudentCreateAccount {...this.props} />
        )}
        {connexion ? (
          <p>
            Vous n'êtes pas encore sur OneTeam ?{" "}
            <a href="#" onClick={this.clickAccount} className="orangeBold">
              Inscrivez-vous !
            </a>{" "}
          </p>
        ) : (
          <p>
            J'ai déjà un compte,{" "}
            <a href="#" onClick={this.clickConnexion} className="orangeBold">
              je me connecte
            </a>{" "}
            !
          </p>
        )}
        {/*
        <StudentCreateAccount {...this.props} />
        <ConnexionTrainee {...this.props} /> */}
      </div>
    );
  }
}

export default TraineeCreateConnexion;
