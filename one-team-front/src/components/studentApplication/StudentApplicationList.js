import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { SMALL } from "../offerView";
import ModalOffer from "../offerView/ModalOffer";

class StudentApplicationList extends Component {
  state = {
    applications: [],
    isLoaded: false
  };

  componentDidMount() {
    const { idStudent } = this.props;
    axios
      .get(`http://localhost:3001/trainee/${idStudent}/application`)
      .then(res => {
        this.setState({ applications: res.data, isLoaded: true });
      });
  }

  render() {
    const { applications, isLoaded } = this.state;
    console.log("applications ", applications);

    return (
      <div>
        {!isLoaded ? (
          <p> loading.. </p>
        ) : (
          applications.map(element => (
            <ModalOffer
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
const mapStateToProps = state => ({
  idStudent: state.student.id
});

export default connect(mapStateToProps)(StudentApplicationList);
