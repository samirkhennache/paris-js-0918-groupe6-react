import React, { Component } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import LockIcon from "@material-ui/icons/Lock";
import StudentApplication from "../CompanyApplication/StudentApplication";
import CompanyPresentation from "./CompanyPresentation";
import { FULL } from "../CompanyApplication/studentConstant";
import { MakeCompletedUrl } from "../../tools";

const mode = "ADMIN";

class TeamsAdmin extends Component {
  state = {
    // fullMission: null,
    // trainee: null
  };

  componentDidMount() {
    axios.get(MakeCompletedUrl("salutadmin/missions")).then(res => {
      // console.log(res.data);
      this.setState({
        fullMission: res.data.data,
        trainee: res.data.trainee
      });
    });
  }

  render() {

    const { fullMission, trainee } = this.state;
    console.log(fullMission, trainee)
    return (
      <div>
        <div className="home-company">
          <div className="compnay-overlay">
            <div className="block-company">
              <h1 className="page_title">Bienvenue dans votre espace Admin</h1>
              <h2 className="page_subtitle">Bonjour Gérard Magro</h2>
              <div className="btn-add-offers">
                <Fab
                  className="classic_button_orange"
                  // color="primary"
                  size="large"
                  aria-label="Add"
                  variant="round"
                >
                  <LockIcon />
                </Fab>
              </div>
            </div>
          </div>
        </div>
        <div className="general_margin ">
          {fullMission &&
            fullMission.map(e => (
              <div className="bloc-admin">
                <Paper>
                  <CompanyPresentation
                    size="FULL"
                    titleMission={e.titleMission}
                    missionId={e.id}
                    company={e.Company.companyName}
                    description={e.description}
                    intro={e.intro}
                    dateStart={e.dateStart}
                    dateEnd={e.dateEnd}
                    LevelStudy={e.LevelStudy.label}
                    town={e.town}
                    companyName={e.Company.companyName}
                    firstNameContact={e.Company.firstnameContact}
                    lastNameContact={e.Company.lastnameContact}
                    companyPhone={e.Company.phone}
                    companyEmail={e.Company.email}
                  />

                  <div className="bloc-team-full">
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      spacing={24}
                    >
                      {trainee &&
                        trainee.map(element =>
                          element.mission_id === e.id
                            ? element.dataApplications.map(student => (
                                <Grid item xs={12} sm={8} md={6} lg={4}>
                                  <Paper elevation={4}>
                                    <StudentApplication
                                      firstname={student.Trainee.firstname}
                                      lastname={student.Trainee.lastname}
                                      town={student.Trainee.town}
                                      pictures={student.Trainee.pictures}
                                      // dateStart={student.Trainee.dateStart}
                                      // dateEnd={student.Trainee.dateEnd}
                                      titre={student.Trainee.titre}
                                      descriptionTrainee={
                                        student.Trainee.description
                                      }
                                      age={student.Trainee.dateBirth}
                                      LevelStudy={
                                        student.LevelStudy
                                          ? student.LevelStudy.label
                                          : null
                                      }
                                      school={student.Trainee.school}
                                      address={student.Trainee.address}
                                      postalCode={student.Trainee.postalCode}
                                      phone={student.Trainee.phone}
                                      email={student.Trainee.email}
                                      missionId={e.id}
                                      traineeId={student.Trainee.id}
                                      mode={mode}
                                      size={FULL}
                                      newDateStart={student.Trainee.dateStart}
                                      newDateEnd={student.Trainee.dateEnd}
                                    />
                                  </Paper>
                                </Grid>
                              ))
                            : null
                        )}
                    </Grid>
                  </div>
                </Paper>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default TeamsAdmin;
