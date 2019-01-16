import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import StudentApplication from "./StudentApplication";
import { SMALL } from "./studentConstant";
import "./ViewStudent.css";

class CompanyApplicationsList extends Component {
  state = {
    trainee: [],
    id: 1,
    isLoaded: false
  };

  componentDidMount() {
    const { mode } = this.props;
    const idCompany = sessionStorage.getItem("token");
    axios
      .get(`http://localhost:3001/application/${idCompany}/${mode}/mytrainee`)
      .then(res => {
        console.log("trainee", res.data.data);
        this.setState({ trainee: res.data.data, isLoaded: true });
      });
  }

  compareMissions = (a, b) => {
    return a - b;
  };

  handleCloseRefresh = (idTrainee, missionId) => {
    const trainee = [];
    this.state.trainee.map(e => {
      console.log("e", e);
      if (e.mission_id === missionId) {
        // const newDataApplication = e.dataApplications.map(f => {
        //   if (f.TraineeId !== idTrainee) return f;
        // });
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
        console.log(newDataApplication);
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
    console.log(trainee);
    // this.setState(
    //   {
    //     trainee: [
    //       ...this.state.trainee.data.map(element => {
    //         element.dataApplications.filter(e => e.TraineeId !== idTrainee);
    //       })
    //     ]
    //   },
    //   console.log("after trainee", this.state.trainee)
    // );
  };

  render() {
    const { trainee, isLoaded } = this.state;
    console.log("before trainee", trainee);
    const { mode, modeRefuse, modeSelect, size } = this.props;
    return (
      <div>
        {isLoaded
          ? trainee.map(element => (
              <div>
                <Typography variant="h2" component="h3">
                  {element.titleMission}
                </Typography>
                <div className="blocList">
                  {element.dataApplications.map(e => (
                    <StudentApplication
                      firstname={e.Trainee.firstname}
                      town={e.Trainee.town}
                      pictures={e.Trainee.pictures}
                      dateStart={e.Trainee.dateStart}
                      dateEnd={e.Trainee.dateEnd}
                      titre={e.Trainee.titre}
                      descriptionTrainee={e.Trainee.description}
                      school={e.Trainee.school}
                      size={SMALL}
                      missionId={element.mission_id}
                      traineeId={e.Trainee.id}
                      modeSelect={modeSelect}
                      modeRefuse={modeRefuse}
                      mode={mode}
                      handleCloseRefresh={this.handleCloseRefresh}
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
