import React, { Component } from "react";

import "./Recrutement.css";

export default class Recrutement extends Component {
  render() {
    return (
      <div className="recrutementBottle general_margin">
        <div className="recrutementProcess">
          <h3 className="home_subsection_orange">
            Le processus de recrutement
          </h3>
          <hr className="hr_horizontal_orange_home" />
        </div>
        <div class="section group">
          <div class="col span_1_of_4">
            <img
              src={require("../../../img/recrutement/wedding-planning.png")}
            />
            <p className="black petit_texte"> Déposez une offre de stage </p>
          </div>
          <div class="col span_1_of_4">
            <img src={require("../../../img/recrutement/cv.png")} />
            <p className="black petit_texte">
              {" "}
              Ciblez les profils d'étudiants les plus adaptés à vos enjeux{" "}
            </p>
          </div>
          <div class="col span_1_of_4">
            <img src={require("../../../img/recrutement/team.png")} />
            <p className="black petit_texte">
              {" "}
              Validez vos choix à l'issue des entretiens de recrutement{" "}
            </p>
          </div>
          <div class="col span_1_of_4">
            <img src={require("../../../img/recrutement/writing.png")} />
            <p className="black petit_texte">
              {" "}
              Contractualisez avec les conventions de stage{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
