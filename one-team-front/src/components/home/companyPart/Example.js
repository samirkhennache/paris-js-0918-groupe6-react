import React, { Component } from "react";

import "./Example.css";
import ExampleCarrousel from "./ExampleCarrousel";

export default class Example extends Component {
  render() {
    return (
      <div className="exampleBottle general_margin">
        <h3 className="home_subsection_white">Exemples de thèmes de mission</h3>
        <div className="exampleTiret" />
        <div class="section group">
          <div class="col span_1_of_2">
            <ul>
              <li>Politique d'innovation</li>
              <li>Business development</li>
              <li>Growth-Hacking</li>
              <li>Stratégie Digitale</li>
              <li>Agilité organisationnelle</li>
              <li>Innovation managériale</li>
              <li>Management de projet</li>
              <li>Ingénierie de process</li>
              <li>Audit - Etudes</li>
              <li>Knowledge management</li>
              <li>Méthodes Qualité</li>
            </ul>
          </div>
          <div class="col span_1_of_2">
            <ExampleCarrousel />
          </div>
        </div>
      </div>
    );
  }
}
