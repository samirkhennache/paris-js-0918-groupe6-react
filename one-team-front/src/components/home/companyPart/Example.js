import React, { Component } from "react";

import "./Example.css";
import ExampleCarrousel from "./ExampleCarrousel";

export default class Example extends Component {
  render() {
    return (
      <div className="exampleBottle general_margin">
        <h3 className="home_subsection_white">Exemples de thèmes de mission</h3>
        <hr className="hr_horizontal_white" />
        <div className="section group">
          <div className="col span_1_of_2">
            <div className="list_text">
              <li style={{ padding: 10 }}> Politique d'innovation </li>
              <li style={{ padding: 10 }}> Business development </li>
              <li style={{ padding: 10 }}> Growth-Hacking </li>
              <li style={{ padding: 10 }}> Stratégie Digitale </li>
              <li style={{ padding: 10 }}> Agilité organisationnelle </li>
              <li style={{ padding: 10 }}> Innovation managériale </li>
              <li style={{ padding: 10 }}> Management de projet </li>
              <li style={{ padding: 10 }}> Ingénierie de process </li>
              <li style={{ padding: 10 }}> Audit - Etudes </li>
              <li style={{ padding: 10 }}> Knowledge management </li>
              <li style={{ padding: 10 }}> Méthodes Qualité </li>
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
