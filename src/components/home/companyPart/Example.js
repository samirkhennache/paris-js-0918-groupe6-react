import React, { Component } from "react";

import "./Example.css";
import ExampleCarrousel from "./ExampleCarrousel";

export default class Example extends Component {
  render() {
    return (
      <div className="exampleBottle general_margin">
        <div className="exampleThemes">
          <h3 className="home_subsection_white">
            Exemples de thèmes de mission
          </h3>
          <hr className="hr_horizontal_white" />
        </div>
        <div className="section group">
          <div className="col span_1_of_2">
            <div className="list_text">
              <li style={{ paddingBottom: 15 }}> Politique d'innovation </li>
              <li style={{ paddingBottom: 15 }}> Business development </li>
              <li style={{ paddingBottom: 15 }}> Growth-Hacking </li>
              <li style={{ paddingBottom: 15 }}> Stratégie Digitale </li>
              <li style={{ paddingBottom: 15 }}> Agilité organisationnelle </li>
              <li style={{ paddingBottom: 15 }}> Innovation managériale </li>
              <li style={{ paddingBottom: 15 }}> Management de projet </li>
              <li style={{ paddingBottom: 15 }}> Ingénierie de process </li>
              <li style={{ paddingBottom: 15 }}> Audit - Etudes </li>
              <li style={{ paddingBottom: 15 }}> Knowledge management </li>
              <li style={{ paddingBottom: 15 }}> Méthodes Qualité </li>
            </div>
          </div>
          <div class="col span_1_of_2">
            <div className="pos_carrousel">
              <ExampleCarrousel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
