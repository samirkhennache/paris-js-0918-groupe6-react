import React, { Component } from "react";
import axios from "axios";
import StudentApplication from "../CompanyApplication/StudentApplication";
import CompanyPresentation from "./CompanyPresentation";
import { FULL } from "../CompanyApplication/studentConstant";

const mode = "ADMIN";

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
                  <CompanyPresentation
                    size="FULL"
                    titleMission={e.titleMission}
                    missionId={e.id}
                    company={e.Company.companyName}
                    description={e.description}
                    introduction={e.intro}
                    dateStart={e.dateStart}
                    dateEnd={e.dateEnd}
                    town={e.town}
                    companyName={e.Company.companyName}
                    firstNameContact={e.Company.firstnameContact}
                    lastNameContact={e.Company.lastnameContact}
                    companyPhone={e.Company.phone}
                    companyEmail={e.Company.email}
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
                              dateStart={student.Trainee.dateStart}
                              dateEnd={student.Trainee.dateEnd}
                              titre={student.Trainee.titre}
                              descriptionTrainee={student.Trainee.description}
                              school={student.Trainee.school}
                              address={student.Trainee.address}
                              postalCode={student.Trainee.postalCode}
                              phone={student.Trainee.phone}
                              email={student.Trainee.email}
                              missionId={e.id}
                              traineeId={student.Trainee.id}
                              mode={mode}
                              size={FULL}

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
