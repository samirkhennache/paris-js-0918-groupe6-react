import React, { Component } from "react";

import "./Services.css";

export default class Services extends Component {
  render() {
    return (
      <div className="servicesBottle general_margin">
        <h3 className="home_subsection_white">
          Les Services <span className="orange">One Team</span>
        </h3>
        <div className="exampleTiret" />
        <div class="section group">
          <div class="col span_1_of_3">
            <img src={require("../../../img/services/offres.png")} />
            <p className="bold-services"> Publication des offres </p>
            <p className="black petit_texte">
              Inclus dans le forfait de l'offre
            </p>
          </div>
          <div class="col span_1_of_3">
            <img src={require("../../../img/services/profils.png")} />
            <p className="bold-services"> Sélection des profils </p>
            <p className="black petit_texte">
              Par vous-même ou par un consultant One Team
            </p>
          </div>
          <div class="col span_1_of_3">
            <img src={require("../../../img/services/meeting.png")} />
            <p className="bold-services"> Team-Building </p>
            <p className="black petit_texte">
              Séminaire onboarding co-animé par l'entreprise et un consultant
              One Team
            </p>
          </div>
        </div>
        <div class="section group">
          <div class="col span_1_of_2">
            <img src={require("../../../img/services/meeting.png")} />
            <p className="bold-services"> Pages Vitrines </p>
            <p className="black petit_texte">
              Inclus dans le forfait de l'offre
            </p>
          </div>
          <div class="col span_1_of_2">
            <img src={require("../../../img/services/meeting.png")} />
            <p className="bold-services"> Coaching d'équipe </p>
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
