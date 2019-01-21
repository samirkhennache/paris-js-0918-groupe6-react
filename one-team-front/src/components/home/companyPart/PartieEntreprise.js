import React, { Component } from "react";

import { Container, Row, Col } from "react-grid-system";

import Button from "@material-ui/core/Button";
import invitez from "../../../img/Invitez.png";
import invitez2 from "../../../img/Invitez2.png";
import vinci from "../../../img/vinci.png";
import engie from "../../../img/engie.png";
import laposte from "../../../img/laposte.png";
import sncf from "../../../img/sncf.png";
import types from "../../../img/missionType.png";
import "./PartieEntreprise.css";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import CompanyCreateConnexion from "../../authentication/companyCreateConnexion/CompanyCreateConnexion";

export default class PartieEntreprise extends Component {
  state = {
    openCompany: false,
    button: "fermer"
  };

  companyOpenConnexion = () => {
    this.setState({
      openCompany: true
    });
  };

  handleCloseCompany = () => {
    this.setState({ openCompany: false });
  };
  render() {
    const { openCompany, button } = this.state;
    console.log(this.props, "props Entreprise");

    return (
      <div>
        <Container className="Invitez general_margin">
          <h2 className="home_section">Pour les recruteurs</h2>

          <Row>
            <Col sm={6} className="ColInvitez">
              <h2 className="InvitezTitre">
                Invitez une "start-up éphémère <br /> dans votre organisation"
              </h2>
              <p className="InvitezTexte">
                Bénéficiez durant toute la période du stage d'une nouvelle
                approche des sujets complexes de l'expérience digitale des
                millenials, de l'énergie créative du team-working.
              </p>
              <img
                src={invitez}
                className="InvitezImg"
                alt="étudiants_avec_logo"
              />
            </Col>
            <Col sm={6}>
              <h2 className="Cocreez">Co-créez</h2>
              <p className="InvitezTexte">
                Conjuguez le potentiel inventif de vos équipes internes avec
                l'agilité naturelle des digital natives pour faire émerger des
                concepts innovants.
              </p>
              <img
                src={invitez2}
                className="InvitezImg"
                alt="etudiantsAvecLogo"
              />
            </Col>
          </Row>
        </Container>
        <Container className="general_margin">
          <h2 className="Exemple">Des exemples</h2>
          <img
            src="https://img.icons8.com/color/30/ffffff/chevron-down.png"
            alt="chevron_bas"
          />
          <Row>
            {/* Missions types  */}
            <img src={types} className="Imgtypes" alt="types" />
          </Row>
          <Row>
            <Col sm={12}>
              <h3 className="confiance">
                Nous offrons aux entreprises en recherche d'innovation un
                service inédit de recrutement <br /> Des équipes de 3 ou 4
                étudiants pluridisciplinaires, inscrits dans les meilleures
                écoles d'ingénieurs, de commerce, de développement web ou de
                design.
              </h3>
            </Col>
          </Row>

          <Row>
            <Col sm={3} s={8}>
              <img src={sncf} className="logoClient" alt="SncfEntreprise1" />
            </Col>
            <Col sm={3} s={8}>
              <img src={engie} className="logoClient" alt="EngieEntreprise2" />
            </Col>
            <Col sm={3} s={8}>
              <img
                src={laposte}
                className="logoClient"
                alt="laPosteEntreprise"
              />
            </Col>
            <Col sm={3} s={8}>
              <img src={vinci} className="logoClient" alt="VinciEntreprise" />
            </Col>
          </Row>
          <h2 className="confiance2"> Il nous font confiance !</h2>
          <Button
            variant="contained"
            className="buttonMission"
            onClick={this.companyOpenConnexion}
          >
            Créer une mission
          </Button>
        </Container>

        {/* DIALOG COMPANY -----------------------------------------*/}
        <Dialog
          open={openCompany}
          onClose={this.handleCloseCompany}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <CompanyCreateConnexion {...this.props} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseCompany} color="primary">
              {button}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
