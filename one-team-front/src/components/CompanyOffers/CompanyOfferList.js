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
    const { mission } = this.props;

    console.log("3", this.props);
    return (
      <div>
        {!isLoaded ? (
          <p> loading.. </p>
        ) : (
          missions.map((e, index) => (
            <div key={index}>
              <CompanyOfferManage
                modifMission={e}
                titleMissions={e.titleMission}
                start={e.dateStart}
                end={e.dateEnd}
                descrip={e.description}
                idMission={e.id}
              />
            </div>
          ))
        )}
      </div>
    );
  }
}

export default CompanyOfferList;
