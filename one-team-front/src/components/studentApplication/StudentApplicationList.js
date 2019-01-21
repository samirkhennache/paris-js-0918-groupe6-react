import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { MakeCompletedUrl } from "../../tools";
import Grid from "@material-ui/core/Grid";
import ModalOffer from "../offerView/ModalOffer";
import { SMALL } from "../offerView";
import "../offerView/offerView.css";

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
      <div className="application-bloc general_margin">
        <Grid container justify="space-between">
          {!isLoaded ? (
            <p> loading.. </p>
          ) : (
            applications.map(element => (
              <Grid item xs={12} sm={6} md={6} lg={4}>
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
              </Grid>
            ))
          )}
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  traineeId: state.student.id
});
export default connect(mapStateToProps)(StudentApplicationList);
