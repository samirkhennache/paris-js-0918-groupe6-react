import React, { Component } from "react";
import axios from "axios";
import CompanyOffersRoot from "../companyOffers/CompanyOffersRoot";
import StudentApplication from "../CompanyApplication/StudentApplication";
import ModalOffer from "../offerView/ModalOffer";
import { FULL } from "../CompanyApplication/studentConstant";

const mode = "ADMIN";
const part = "ADMIN";

class TeamsAdmin extends Component {
  state = {
    // fullMission: null,
    // trainee: null
  };

  componentDidMount() {
    axios.get("http://localhost:3001/salutadmin/missions").then(res => {
      console.log(res.data);
      this.setState({
        fullMission: res.data.data,
        trainee: res.data.trainee
      });
    });
  }

  render() {
    const { fullMission, trainee } = this.state;
    return (
      <div>
        <p>Bienvenue Gérard</p>
        <div>
          {/* <CompanyOffersRoot mode={mode} part={part} size={FULL} /> */}
          {fullMission &&
            fullMission.map(e => (
              <div>
                <div>
                  <ModalOffer
                    size="FULL"
                    titelMission={e.titelMission}
                    missionId={e.id}
                    company={e.Company.companyName}
                    description={e.description}
                    dateStart={e.dateStart}
                    dateEnd={e.dateEnd}
                  />
                </div>
                {trainee &&
                  trainee.map(element =>
                    element.mission_id === e.id
                      ? element.dataApplications.map(student => (
                          <div>
                            <StudentApplication
                              firstname={student.Trainee.firstname}
                              town={student.Trainee.town}
                              pictures={student.Trainee.pictures}
                              address={student.Trainee.address}
                              postalCode={student.Trainee.postalCode}
                              missionId={e.id}
                              traineeId={student.Trainee.id}
                              mode={mode}
                              size={FULL}
                              phone={student.Trainee.phone}
                            />
                          </div>
                        ))
                      : null
                  )}
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default TeamsAdmin;
