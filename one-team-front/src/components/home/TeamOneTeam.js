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
  <div className="general_margin">
    <h2 style={{ color: "white", fontWeight: "bold" }} className="home_section">
      La Team <span style={{ color: "#ff8900" }}>One Team</span>
    </h2>
    <div style={styles.miniHR} />
    {/* <h2 className="white-color h2-team">La team</h2> */}
    {/* <img className="logo-team" src={logo} alt="logo One Team" /> */}
    <Grid container className="border-test team-block" justify="center">
      {/* --------------------------------------- */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className="border-test team-item">
          <img className="img-team" src={gerard} alt="Gérard Magro" />
          <h3 className="name-team">Gérard Magro</h3>
          <p className="name-team">Fondateur</p>
        </div>
      </Grid>
      {/* --------------------------------------- */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className="border-test team-item">
          <img className="img-team" src={samir} alt="Samir Khennache" />
          <h3 className="name-team">Samir Khennache</h3>
          <p className="name-team">Développeur</p>
        </div>
      </Grid>
      {/* --------------------------------------- */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className="border-test team-item">
          <img className="img-team" src={camille} alt="Camille Coutens" />
          <h3 className="name-team">Camille Coutens</h3>
          <p className="name-team">Développeuse</p>
        </div>
      </Grid>
      {/* --------------------------------------- */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className="border-test team-item">
          <img className="img-team" src={david} alt="David Huveau" />
          <h3 className="name-team">David Huveau</h3>
          <p className="name-team">Développeur</p>
        </div>
      </Grid>
      {/* --------------------------------------- */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className="border-test team-item">
          <img className="img-team" src={mohamed} alt="Mohamed Kerkeb" />
          <h3 className="name-team">Mohamed Kerkeb</h3>
          <p className="name-team">Développeur</p>
        </div>
      </Grid>
      {/* --------------------------------------- */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className="border-test team-item">
          <img className="img-team" src={paolo} alt="Paolo Catalani" />
          <h3 className="name-team">Paolo Catalani</h3>
          <p className="name-team">Développeur</p>
        </div>
      </Grid>
      {/* --------------------------------------- */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className="border-test team-item">
          <img className="img-team" src={prudence} alt="Prudence Gaboriau" />
          <h3 className="name-team">Prudence Gaboriau</h3>
          <p className="name-team">Développeuse</p>
        </div>
      </Grid>
    </Grid>
  </div>
);
export default TeamOneTeam;
