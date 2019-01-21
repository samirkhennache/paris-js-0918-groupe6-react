import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { MakeCompletedUrl } from "../../tools";
import ModalOffer from "../offerView/ModalOffer";
import { SMALL } from "../offerView";

class StudentApplicationList extends Component {
  state = {
    applications: [],
    isLoaded: false
  };

  componentDidMount() {
    // const { traineeId } = this.props;
    const traineeId = sessionStorage.getItem("token");
    axios
      .get(MakeCompletedUrl(`trainee/${traineeId}/application`))
      .then(res => {
        this.setState({ applications: res.data, isLoaded: true });
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
            <ModalOffer
              size={SMALL}
              key={`${element.Mission.id}-${element.Mission.titleMission}`}
              missionId={element.Mission.id}
              titleMission={element.Mission.titleMission}
              company={element.Mission.Company.companyName}
              dateStart={element.Mission.dateStart}
              dateEnd={element.Mission.dateEnd}
              statusAppli={element.statusAppli}
              description={element.Mission.description}
              {...this.props}
            />
          ))
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  traineeId: state.student.id
});
export default connect(mapStateToProps)(StudentApplicationList);
