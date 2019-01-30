import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { MakeCompletedUrl } from "../../tools";
import noResult from "../../img/icons/delete-button.png";
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
        console.log(res.data);

        this.setState({ applications: res.data, isLoaded: true });
      });
  }

  render() {
    const { applications, isLoaded } = this.state;
    console.log(isLoaded, applications, applications.length);

    return (
      <div>
        {isLoaded && applications.length !== 0 ? (
          <div className="application-bloc general_margin">
            <Grid container justify="center">
              {applications.map(element => (
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <ModalOffer
                    size={SMALL}
                    key={`${element.Mission.id}-${
                      element.Mission.titleMission
                    }`}
                    missionId={element.Mission.id}
                    titleMission={element.Mission.titleMission}
                    town={element.Mission.town}
                    LevelStudy={element.Mission.LevelStudy.label}
                    company={element.Mission.Company.companyName}
                    dateStart={element.Mission.dateStart}
                    dateEnd={element.Mission.dateEnd}
                    statusAppli={element.statusAppli}
                    description={element.Mission.description}
                    {...this.props}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : null}
        {isLoaded && !applications.length && (
          <div className="noResult-trainee-applications">
            <img src={noResult} alt="pas de résultat" />
            <p className="noResult-search regular_text">
              Tu n'as pas encore candidaté à des offres de stages
            </p>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  traineeId: state.student.id
});
export default connect(mapStateToProps)(StudentApplicationList);
