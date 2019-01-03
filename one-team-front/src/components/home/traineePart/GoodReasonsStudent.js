import React, { Component } from "react";
import "./goodReasonsStudents.css";
import ButtonStudent from "./ButtonStudent";
import number1 from "../../../img/students/number1.png";
import number2 from "../../../img/students/number2.png";
import number3 from "../../../img/students/number3.png";

class GoodReasonsStudents extends Component {
  render() {
    return (
      <div className="good-reasons">
        <h2 className="h2-good-reasons">3 bonnes raisons de nous rejoindre</h2>
        <div className="bloc-good-reasons">
          <div className="good-reason-solo">
            <img src={number1} alt="" />
            <p>Vivre une expérience challengeante basée sur un réel enjeu</p>
          </div>
          <div className="good-reason-solo">
            <img src={number2} alt="" />
            <p>
              Acquérir ou perfectionner des méthodes très avancées en matière
              d’innovation et de transformation des organisations
            </p>
          </div>
          <div className="good-reason-solo">
            <img src={number3} alt="" />
            <p>
              Valoriser ton parcours et te créer des opportunités de
              développement
            </p>
          </div>
          <ButtonStudent />
        </div>
      </div>
    );
  }
}

export default GoodReasonsStudents;
