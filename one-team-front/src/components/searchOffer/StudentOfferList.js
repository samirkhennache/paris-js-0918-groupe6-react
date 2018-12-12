import React, { Component } from "react";
import axios from "axios";
import OfferView from "./OfferView";

class StudentOfferList extends Component {
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
    return (
      <div>
        {!isLoaded ? (
          <p> loading.. </p>
        ) : (
          missions.map(element => (
            <OfferView
              key={`${element.id}-${element.titleMission}`}
              missionId={element.id}
              titleMission={element.titleMission}
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
