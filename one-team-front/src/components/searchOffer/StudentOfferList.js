import React, { Component } from "react";
import axios from "axios";
import { MIDDLE } from "../offerView";
import ModalOffer from "../offerView/ModalOffer";

class StudentOfferList extends Component {
  state = {
    missions: [],
    isLoaded: false
  };

  componentDidMount() {
    axios.get("http://localhost:3001/mission").then(res => {
      this.setState({
        missions: res.data,
        isLoaded: true
      });
    });
  }

  render() {
    const { missions, isLoaded } = this.state;
    console.log("messions ", missions);

    return (
      <div>
        {!isLoaded ? (
          <p> loading.. </p>
        ) : (
          missions.map(element => (
            <ModalOffer
              size={MIDDLE}
              key={`${element.id}-${element.titleMission}`}
              missionId={element.id}
              titleMission={element.titleMission}
              company={element.Mission.Company.companyName}
              dateStart={element.dateStart}
              dateEnd={element.dateEnd}
              description={element.description}
            />
          ))
        )}
      </div>
    );
  }
}

export default StudentOfferList;
