import React, { Component } from "react";
import axios from "axios";
import CompanyOffers from "./CompanyOffers";

const idCompany = sessionStorage.getItem("token");

class CompanyOffersRoot extends Component {
  state = {
    isLoaded: false
  };

  componentDidMount() {
    const { mode } = this.props;

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
    const { mode, part, modeRefuse, size } = this.props;
    return (
      <div>
        {!isLoaded ? (
          "loading"
        ) : (
          <CompanyOffers
            trainee={trainee}
            missions={missions}
            mode={mode}
            part={part}
            company={company}
            size={size}
            modeRefuse={modeRefuse}
          />
        )}
      </div>
    );
  }
}

export default CompanyOffersRoot;
