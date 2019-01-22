import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { SMALL } from "./studentConstant";
import { MakeCompletedUrl } from "../../tools";

import Grid from "@material-ui/core/Grid";

import StudentApplication from "./StudentApplication";

import write from "../../img/icons/writing.png";

import "./ViewStudent.css";

class CompanyApplicationsList extends Component {
  state = {
    trainee: [],
    isLoaded: false
  };

  componentDidMount() {
    const { mode } = this.props;
    const idCompany = sessionStorage.getItem("token");
    axios
      .get(MakeCompletedUrl(`application/${idCompany}/${mode}/mytrainee`))
      .then(res => {
        this.setState({ trainee: res.data.data, isLoaded: true });
      });
  }

  handleCloseRefresh = (idTrainee, missionId) => {
    const trainee = [];
    this.state.trainee.map(e => {
      if (e.mission_id === missionId) {
        const newDataApplication = [
          ...e.dataApplications.filter(
            element => element.TraineeId !== idTrainee
          )
        ];
        const result = {
          isFull: e.isFull,
          mission_id: e.mission_id,
          titleMission: e.titleMission,
          dataApplications: newDataApplication
        };
        trainee.push(result);
      } else {
        const result = {
          isFull: e.isFull,
          mission_id: e.mission_id,
          titleMission: e.titleMission,
          dataApplications: e.dataApplications
        };
        trainee.push(result);
      }
    });
    this.setState({
      trainee
    });
  };

  sortData = data => data.sort((a, b) => a.mission_id - b.mission_id);

  render() {
    const { trainee, isLoaded } = this.state;
    console.log(trainee);
    const { mode, modeRefuse, modeSelect } = this.props;
    return (
      <div style={{ marginTop: 80 }} className="general_margin">
        {isLoaded
          ? this.sortData(trainee).map(element => (
              <div>
                {element.dataApplications.length !== 0 && (
                  <div>
                    <div className="mission-title-application">
                      <img
                        src={write}
                        width="25"
                        height="25"
                        style={{ marginRight: 5, marginBottom: -5 }}
                        alt=""
                      />
                      <p className="mission_title"> {element.titleMission}</p>
                    </div>
                    <hr className="hr_horizontal_orange" />
                  </div>
                )}

                <div className="blocList">
                  {element.dataApplications.map(e => (
                    <StudentApplication
                      firstname={e.Trainee.firstname}
                      town={e.Trainee.town}
                      pictures={e.Trainee.pictures}
                      // dateStart={e.Trainee.dateStart}
                      // dateEnd={e.Trainee.dateEnd}
                      titre={e.Trainee.titre}
                      descriptionTrainee={e.Trainee.description}
                      LevelStudy={
                        e.Trainee.LevelStudy ? e.Trainee.LevelStudy.label : null
                      }
                      // LevelStudy={e.Trainee.LevelStudy}
                      school={e.Trainee.school}
                      age={e.Trainee.dateBirth}
                      size={SMALL}
                      missionId={element.mission_id}
                      traineeId={e.Trainee.id}
                      modeSelect={modeSelect}
                      modeRefuse={modeRefuse}
                      mode={mode}
                      isFull={element.isFull}
                      handleCloseRefresh={this.handleCloseRefresh}
                      newDateStart={e.Trainee.dateStart}
                      newDateEnd={e.Trainee.dateEnd}
                      {...this.props}
                    />
                  ))}
                </div>
              </div>
            ))
          : "loading"}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  idCompany: state.company.id
});

export default connect(mapStateToProps)(CompanyApplicationsList);
