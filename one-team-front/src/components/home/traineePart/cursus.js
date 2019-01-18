import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./cursus.css";
import blackNumber1 from "../../../img/students/black-1.png";
import blackNumber2 from "../../../img/students/black-2.png";
import blackNumber3 from "../../../img/students/black-3.png";
import blackNumber4 from "../../../img/students/black-4.png";
import blackNumber5 from "../../../img/students/black-5.png";

class Cursus extends Component {
  render() {
    return (
      <div className="rules-bloc">
        <Grid container justify="center">
          <Grid item xs={12}>
            <h2>Sur le plan pratique</h2>
          </Grid>
          {/* *************** RULES 1 ********************* */}
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className="rules-item">
              <div>
                <img src={blackNumber1} alt="1" />
              </div>
              <h3>Complète ton profil</h3>
              <p>
                Après avoir créer ton compte, remplis soigneusement ta fiche
                publique afin d’être visible auprès des recruteurs
              </p>
            </div>
          </Grid>
          {/* *************** RULES 2 ********************* */}
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className="rules-item">
              <div>
                <img src={blackNumber2} alt="2" />
              </div>
              <h3>Pas de CV ni de lettre de motivation standards</h3>
              <p>
                Parle-nous de ton cursus, des tes compétences spécifiques.
                Dis-nous ce qui te motive, ce que tu souhaite apporter à une
                équipe
              </p>
            </div>
          </Grid>
          {/* *************** RULES 3 ********************* */}
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className="rules-item">
              <div>
                <img src={blackNumber3} alt="3" />
              </div>
              <h3>1,2,3 postule !</h3>
              <p>
                Lance toi, envoie tes candidatures auprès des entreprises et des
                missions qui te plaisent.
              </p>
            </div>
          </Grid>
          {/* *************** RULES 4 ********************* */}
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className="rules-item">
              <div>
                <img src={blackNumber4} alt="4" />
              </div>
              <h3>Prépare ton entretien</h3>
              <p>
                Lorsque qu’une entreprise à sélectionné sa team, un consultant
                de One Team prépare les membres de l’équipe au premier entretien
              </p>
            </div>
          </Grid>
          {/* *************** RULES 5 ********************* */}
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className="rules-item">
              <div>
                <img src={blackNumber5} alt="5" />
              </div>
              <h3>Bravo ta team a été recrutée</h3>
              <p>
                Pendant ton stage One Team peut réaliser à la demande de
                l’entreprise un coaching d’équipe ponctué par des points
                d’avancement réguliers
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Cursus;
