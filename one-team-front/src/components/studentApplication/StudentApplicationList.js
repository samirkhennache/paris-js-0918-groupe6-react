import React, { Component } from "react";
import axios from "axios";
import { OfferView, SMALL } from "../offerView";

class StudentApplicationList extends Component {
  state = {
    applications: [],
    isLoaded: false
  };

  componentDidMount() {
    axios.get("http://localhost:3001/application").then(res => {
      this.setState({
        applications: res.data,
        isLoaded: true
      });
    });
  }

  render() {
    const { applications, isLoaded } = this.state;
    return (
      <div>
        {!isLoaded ? (
          <p> loading.. </p>
        ) : (
          applications.map(element => (
            // <div></div>
            <OfferView
              size={SMALL}
              key={`${element.Mission.id}-${element.Mission.titleMission}`}
              missionId={element.Mission.id}
              titleMission={element.Mission.titleMission}
              company={element.Mission.Company.companyName}
              dateStart={element.Mission.dateStart}
              dateEnd={element.Mission.dateEnd}
              statusAppli={element.statusAppli}
            />
          ))
        )}
      </div>
    );
  }
}

export default StudentApplicationList;
