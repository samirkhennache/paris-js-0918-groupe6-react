import React, { Component } from "react";
import StudentApplication from "../CompanyApplication/StudentApplication";
import { SMALL } from "../CompanyApplication/studentConstant";

class Team extends Component {
  state = {};

  render() {
    const { trainee, idMission } = this.props;
    // console.log("team trainee", trainee);

    return (
      <div>
        <h2>My team</h2>
        {trainee &&
          trainee.map(data => (
            <div>
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
      </div>
    );
  }
}

export default Team;
