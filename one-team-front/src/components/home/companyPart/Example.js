import React, { Component } from "react";

import "./Example.css";
import ExampleCarrousel from "./ExampleCarrousel";

export default class Example extends Component {
  render() {
    return (
      <div className="exampleBottle general_margin">
        <h3 className="home_subsection_white">Exemples de thèmes de mission</h3>
        <hr className="hr_horizontal_white" />
        <div class="section group">
          <div class="col span_1_of_2">
            <p>- Politique d'innovation </p>
            <p>- Business development </p>
            <p>- Growth-Hacking </p>
            <p>- Stratégie Digitale </p>
            <p>- Agilité organisationnelle </p>
            <p>- Innovation managériale </p>
            <p>- Management de projet </p>
            <p>- Ingénierie de process </p>
            <p>- Audit - Etudes </p>
            <p>- Knowledge management </p>
            <p>- Méthodes Qualité </p>
          </div>
          <div class="col span_1_of_2">
            <ExampleCarrousel />
          </div>
        </div>
      </div>
    );
  }
}
