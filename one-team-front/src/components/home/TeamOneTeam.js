import React from "react";
import Grid from "@material-ui/core/Grid";
import logo from "../../img/Logo.png";
import samir from "../../img/teamOneTeam/samir.jpeg";
import mohamed from "../../img/teamOneTeam/mohammed.jpeg";
import david from "../../img/teamOneTeam/david.jpeg";
import camille from "../../img/teamOneTeam/camille.jpeg";
import paolo from "../../img/teamOneTeam/paolo.jpeg";
import prudence from "../../img/teamOneTeam/prudence.jpeg";
import gerard from "../../img/teamOneTeam/gerard.jpeg";
import imgAnonyme from "../../img/icons/PhotoProfil.jpg";

const styles = {
  miniHR: {
    backgroundColor: "white",
    height: "4px",
    width: "10vw",
    margin: "auto",
    marginBottom: "20px"
  }
};

const TeamOneTeam = () => (
  <div className="general_margin blocOneTeam">
    <h2 className="home_subsection_white">
      La Team <span style={{ color: "#ff8900" }}>One Team</span>
    </h2>
    <hr className="hr_horizontal_white" />
    <Grid container className="team-block" justify="center">
      {/* --------------------------------------- */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className=" team-item">
          <img className="img-team" src={imgAnonyme} alt="Gérard Magro" />
          <h3 className="name-team">Gérard Magro</h3>
          <p className="name-team">Fondateur</p>
        </div>
      </Grid>
      {/* --------------------------------------- */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className=" team-item">
          <img className="img-team" src={imgAnonyme} alt="Samir Khennache" />
          <h3 className="name-team">Samir Khennache</h3>
          <p className="name-team">Développeur</p>
        </div>
      </Grid>
      {/* --------------------------------------- */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className=" team-item">
          <img className="img-team" src={imgAnonyme} alt="Camille Coutens" />
          <h3 className="name-team">Camille Coutens</h3>
          <p className="name-team">Développeuse</p>
        </div>
      </Grid>
      {/* --------------------------------------- */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className=" team-item">
          <img className="img-team" src={imgAnonyme} alt="David Huveau" />
          <h3 className="name-team">David Huveau</h3>
          <p className="name-team">Développeur</p>
        </div>
      </Grid>
      {/* --------------------------------------- */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className=" team-item">
          <img className="img-team" src={imgAnonyme} alt="Mohamed Kerkeb" />
          <h3 className="name-team">Mohamed Kerkeb</h3>
          <p className="name-team">Développeur</p>
        </div>
      </Grid>
      {/* --------------------------------------- */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className=" team-item">
          <img className="img-team" src={imgAnonyme} alt="Paolo Catalani" />
          <h3 className="name-team">Paolo Catalani</h3>
          <p className="name-team">Développeur</p>
        </div>
      </Grid>
      {/* --------------------------------------- */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className=" team-item">
          <img className="img-team" src={imgAnonyme} alt="Prudence Gaboriau" />
          <h3 className="name-team">Prudence Gaboriau</h3>
          <p className="name-team">Développeuse</p>
        </div>
      </Grid>
    </Grid>
  </div>
);
export default TeamOneTeam;
