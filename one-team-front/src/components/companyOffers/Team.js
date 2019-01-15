import React, { Component } from "react";
import StudentApplication from "../CompanyApplication/StudentApplication";
import { SMALL } from "../CompanyApplication/studentConstant";

class Team extends Component {
  state = {};

  render() {
    const { trainee, idMission } = this.props;
    console.log("team trainee", trainee);

    return (
      <div>
        <h2>My team</h2>
        {trainee &&
          trainee.data.map(data => (
            <div>
              {data.mission_id === idMission &&
                data.dataApplications.map(e => (
                  <StudentApplication
                    firstname={e.Trainee.firstname}
                    town={e.Trainee.town}
                    pictures={e.Trainee.pictures}
                    address={e.Trainee.address}
                    postalCode={e.Trainee.postalCode}
                    size={SMALL}
                    missionId={idMission}
                    traineeId={e.Trainee.id}
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
