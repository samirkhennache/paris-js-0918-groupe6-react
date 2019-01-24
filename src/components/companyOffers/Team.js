import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import StudentApplication from "../CompanyApplication/StudentApplication";
import { SMALL } from "../CompanyApplication/studentConstant";

class Team extends Component {
  seeApplications = () => {
    const { history } = this.props;
    history.push("/company/mytrainees");
  };

  render() {
    const { trainee, idMission } = this.props;
    // console.log("team trainee", trainee);

    return (
      <div className="Team">
        <Grid container>
          <Grid item xs={12}>
            <p className="regular_orange_title">La team</p>
          </Grid>
          <Grid item xs={12}>
            <div className="btn_see_application">
              <Fab
                className="classic_button_orange "
                size="large"
                aria-label="Add"
                variant="round"
                onClick={this.seeApplications}
              >
                <AddIcon />
              </Fab>
            </div>
          </Grid>
          <Grid item xs={12}>
            {trainee &&
              trainee.map(data => (
                <div className="blocList">
                  {data.mission_id === idMission &&
                    data.dataApplications.map(e => (
                      <StudentApplication
                        firstname={e.Trainee.firstname}
                        town={e.Trainee.town}
                        pictures={e.Trainee.pictures}
                        // dateStart={e.Trainee.dateEnd}
                        // dateEnd={e.Trainee.dateEnd}
                        titre={e.Trainee.titre}
                        descriptionTrainee={e.Trainee.description}
                        LevelStudy={e.LevelStudy ? e.LevelStudy.label : null}
                        school={e.Trainee.school}
                        size={SMALL}
                        missionId={data.mission_id}
                        traineeId={e.Trainee.id}
                        newDateStart={e.Trainee.dateStart}
                        newDateEnd={e.Trainee.dateEnd}
                        {...this.props}
                      />
                    ))}
                </div>
              ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Team;
