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
        <CompanyOfferManage />
        {!isLoaded ? (
          <p> loading.. </p>
        ) : (
          missions.map(e => (
            <div>
              <h2> {e.titleMission}</h2>
              <h3>
                {" "}
                {e.dateStart} - {e.dateEnd}
              </h3>
              <p> {e.description}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default CompanyOfferList;
