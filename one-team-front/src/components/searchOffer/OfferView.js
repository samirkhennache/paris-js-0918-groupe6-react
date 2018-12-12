import React, { Component } from "react";
import axios from "axios";
import { AwesomeButton } from "react-awesome-button";
import "./Button.css";
import "./OffersStud.css";

class OfferView extends Component {
  state = {
    missions: [],
    isLoaded: false
  };

  componentDidMount() {
    axios.get("http://localhost:3001/mission").then(res => {
      console.log(res.data);
      this.setState({
        missions: res.data,
        isLoaded: true
      });
    });
  }

  render() {
    const { missions, isLoaded } = this.state;
    console.log(missions);
    return (
      <div>
        {!isLoaded ? (
          <p> loading.. </p>
        ) : (
          missions.map((e, index) => (
            <div key={index}>
              <h3> {e.titleMission} </h3>
              <p> {e.dateStart} </p>
              <p> {e.dateEnd} </p>
              <p> {e.description} </p>
              <AwesomeButton type="primary" className="aws-btn remove">
                Postuler
              </AwesomeButton>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default OfferView;
