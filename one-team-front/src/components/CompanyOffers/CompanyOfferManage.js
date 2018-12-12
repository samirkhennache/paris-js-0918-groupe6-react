import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import "./Button.css";
import axios from "axios";

class CompanyOfferManage extends Component {
  deleteData = e => {
    const { idMission } = this.props;
    const API_ENDPOINT_MISSION = "http://localhost:3001/mission/";
    axios
      .delete(`${API_ENDPOINT_MISSION}${idMission}`, this.state)
      .then(alert("Mission supprimé"));
  };

  render() {
    const { titleMissions, start, end, descrip } = this.props;
    return (
      <div>
        <div>
          {titleMissions}
          <br />
          {start}
          <br />
          {end}
          <br />
          {descrip}
        </div>

        <AwesomeButton type="primary" className="aws-btn edit">
          Modifier
        </AwesomeButton>
        <br />
        <AwesomeButton
          type="primary"
          className="aws-btn remove"
          action={this.deleteData}
        >
          Supprimer
        </AwesomeButton>
        <br />
        <hr align="center" width="50%" color="midnightblue" size="1" />
        <AwesomeButton type="primary" className="aws-btn validate">
          Valider ma team
        </AwesomeButton>
        <hr align="center" width="90%" color="midnightblue" size="1" />
      </div>
    );
  }
}

export default CompanyOfferManage;
