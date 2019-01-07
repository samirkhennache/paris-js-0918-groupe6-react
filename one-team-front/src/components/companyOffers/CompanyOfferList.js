import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import CompanyOfferManage from "./CompanyOfferManage";

class CompanyOfferList extends Component {
  state = {
    missions: [],
    isLoaded: false
  };

  componentDidMount() {
    const { idCompany } = this.props;

    axios.get(`http://localhost:3001/company/${idCompany}`).then(res => {
      // console.log("data", res.data);
      this.setState({
        missions: res.data.Missions,
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

const mapStateToProps = state => {
  return {
    idCompany: state.company.id
  };
};

export default connect(mapStateToProps)(CompanyOfferList);
