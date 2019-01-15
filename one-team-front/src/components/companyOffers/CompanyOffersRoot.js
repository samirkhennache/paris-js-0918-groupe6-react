import React, { Component } from "react";
import axios from "axios";
import CompanyOffers from "./CompanyOffers";
import { FULL_RESTRICTED } from "../CompanyApplication/studentConstant";

const idCompany = sessionStorage.getItem("token");
const mode = "SELECT";
const modeRefuse = "REFUSE";

class CompanyOffersRoot extends Component {
  state = {
    isLoaded: false
  };

  componentDidMount() {
    axios.get(`http://localhost:3001/company/${idCompany}`).then(res => {
      console.log("data", res.data);
      this.setState({
        missions: res.data.Missions.sort((a, b) => a - b),
        company: res.data,
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
    const { missions, isLoaded, trainee, company } = this.state;
    return (
      <div>
        {!isLoaded ? (
          "loading"
        ) : (
          <CompanyOffers
            trainee={trainee}
            missions={missions}
            mode={mode}
            company={company}
            size={FULL_RESTRICTED}
            modeRefuse={modeRefuse}
          />
        )}
      </div>
    );
  }
}

export default CompanyOffersRoot;
