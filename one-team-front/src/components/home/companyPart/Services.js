import React, { Component } from "react";

import "./Services.css";

export default class Services extends Component {
  render() {
    return (
      <div className="servicesBottle general_margin">
        <h3 className="home_subsection_white">
          Les Services <span className="orange">One Team</span>
        </h3>
        <hr className="hr_horizontal_white" />
        <div class="section group">
          <div class="col1 span_1_of_3">
            <img
              src={require("../../../img/services/offres.png")}
              width="70"
              height="70"
              style={{ marginBottom: 20 }}
            />
            <p className="icon_white_title"> Publication des offres </p>
            <p className="black petit_texte">
              Inclus dans le forfait de l'offre
            </p>
          </div>
          <div class="col1 span_1_of_3">
            <img
              src={require("../../../img/services/profils.png")}
              width="70"
              height="70"
              style={{ marginBottom: 20 }}
            />
            <p className="icon_white_title"> Sélection des profils </p>
            <p className="black petit_texte">
              Par vous-même ou par un consultant One Team
            </p>
          </div>
          <div class="col1 span_1_of_3">
            <img
              src={require("../../../img/services/meeting.png")}
              width="70"
              height="70"
              style={{ marginBottom: 20 }}
            />
            <p className="icon_white_title"> Team-Building </p>
            <p className="black petit_texte">
              Séminaire onboarding co-animé par l'entreprise et un consultant
              One Team
            </p>
          </div>
        </div>
        <div class="section group">
          <div class="col span_1_of_2">
            <img
              src={require("../../../img/services/cursor.png")}
              width="70"
              height="70"
              style={{ marginBottom: 20 }}
            />
            <p className="icon_white_title"> Pages Vitrines </p>
            <p className="black petit_texte">
              Inclus dans le forfait de l'offre
            </p>
          </div>
          <div class="col span_1_of_2">
            <img
              src={require("../../../img/services/progress.png")}
              width="70"
              height="70"
              style={{ marginBottom: 20 }}
            />
            <p className="icon_white_title"> Coaching d'équipe </p>
            <p className="black petit_texte">
              Réalisé sur toute la période du stage par un consultant One Team
              selon un protocole d'accompagnement axé sur l'efficacité
              collective de la team
            </p>
          </div>
        </div>
      </div>
    );
  }
}
