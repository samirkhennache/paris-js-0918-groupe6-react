import React, { Component } from "react";
import axios from "axios";
import CompanyOffers from "./CompanyOffers";

const idCompany = sessionStorage.getItem("token");
const mode = "SELECT";

class CompanyOffersRoute extends Component {
  state = {
    isLoaded: false
  };

  componentDidMount() {
    axios.get(`http://localhost:3001/company/${idCompany}`).then(res => {
      // console.log("data", res.data);
      this.setState({
        missions: res.data.Missions.sort((a, b) => a - b),
        isLoaded: true
      });
    });
    axios
      .get(`http://localhost:3001/application/${idCompany}/${mode}/mytrainee`)
      .then(res =>
        this.setState({
          trainee: res.data
        })
      );
  }

  render() {
    const { missions, isLoaded, trainee } = this.state;
    return (
      <div>
        {!isLoaded ? (
          "loading"
        ) : (
          <CompanyOffers trainee={trainee} missions={missions} />
        )}
      </div>
    );
  }
}

export default CompanyOffersRoute;
