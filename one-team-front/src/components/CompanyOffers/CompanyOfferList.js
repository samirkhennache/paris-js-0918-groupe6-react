import React, { Component } from "react";
import axios from "axios";
import CompanyOfferManage from "./CompanyOfferManage";

class CompanyOfferList extends Component {
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
              <CompanyOfferManage
                titleMissions={e.titleMission}
                start={e.dateStart}
                end={e.dateEnd}
                descrip={e.description}
              />
            </div>
          ))
        )}
      </div>
    );
  }
}

export default CompanyOfferList;
