import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { MakeCompletedUrl } from "../../tools";
import ageTrainee from "../../img/icons/cake.png";
import schoolTrainee from "../../img/icons/scholl.png";
import townTrainee from "../../img/icons/placeholder-filled-point.png";
import calendar from "../../img/icons/calendar-black.png";
import levelTrainee from "../../img/icons/graduate-cap.png";
import next from "../../img/icons/right-chevron(1).png";

const styles = theme => ({
  row: {
    border: "1px solid black"
  },
  paper: {
    ...theme.mixins.gutters(),
    padding: "0",
    margin: "15px",
    width: "250px"
  },
  paperFull: {
    ...theme.mixins.gutters(),
    padding: "0",
    margin: "15px",
    width: "500px"
  },
  list: {
    listStyle: "none",
    padding: "10px",
    textAlign: "center"
  },
  image: {
    borderRadius: "100%",
    height: "150px",
    width: "150px",
    padding: "10px"
  },
  address: {
    margin: "10px"
  }
});

class StudentView extends Component {
  getAgeTrainee = dateTrainee => {
    const d = new Date(dateTrainee);
    const year = d.getFullYear();
    const actualD = new Date();
    const actualYear = actualD.getFullYear();
    const yearTrainee = actualYear - year;
    return yearTrainee;
  };

  render() {
    const {
      classes,
      pictures,
      address,
      postalCode,
      firstname,
      town,
      size,
      phone,
      dateStart,
      dateEnd,
      titre,
      descriptionTrainee,
      school,
      lastname,
      email,
      LevelStudy,
      age
    } = this.props;

    switch (size) {
      case "SMALL": {
        return (
          <div>
            <Paper className={classes.paper} elevation={2}>
              <p>Size SMALL</p>
              <ul className={classes.list}>
                <li>
                  <img
                    className={classes.image}
                    src={
                      pictures !== null
                        ? MakeCompletedUrl(`${pictures}`)
                        : MakeCompletedUrl(
                            "public/photoProfile/PhotoProfil.jpg"
                          )
                    }
                    alt=""
                  />
                </li>
                <li>{firstname}</li>
                <li>
                  {titre !== null ? titre : "Poste recherché : à compléter"}
                </li>
                <li>
                  début :
                  {dateStart
                    ? new Date(dateStart).toLocaleDateString()
                    : "à compléter"}
                </li>
                <li>
                  fin:
                  {dateEnd
                    ? new Date(dateEnd).toLocaleDateString()
                    : "à compléter"}
                </li>
                <li className={classes.address}>
                  {town !== null ? town : "Ville : à compléter"}
                </li>
              </ul>
            </Paper>
          </div>
        );
      }
      case "FULL_RESTRICTED": {
        return (
          <div className="bloc-trainee-profil">
            {/*  BANDEAU  */}
            <div className="bandeau-trainee-profil">
              <div className="user-photo">
                <img
                  src={
                    pictures !== null
                      ? MakeCompletedUrl(`${pictures}`)
                      : MakeCompletedUrl("public/photoProfile/PhotoProfil.jpg")
                  }
                  alt=""
                />
              </div>
            </div>
            {/* **********************  BLOC UNDER BANDEAU  **************************** */}
            <div className="bloc-under-bandeau">
              <p className="regular_orange_subtitle left">{firstname}</p>
              <p className="regular_black_subtitle left">
                {titre ? titre : "Poste recherché : à compléter"}
              </p>
              {/* CRITERES TRAINEE */}
              <div className="bloc-criteres-big">
                <div className="icon-and-text">
                  <div className="img-student-view">
                    <img src={ageTrainee} alt="age" />
                  </div>
                  <p className="criteres_big">
                    {age !== null
                      ? `${this.getAgeTrainee(age)} ans`
                      : "à compléter"}
                  </p>
                </div>

                <div className="icon-and-text">
                  <div className="img-student-view">
                    <img src={schoolTrainee} alt="école" />
                  </div>
                  <p className="criteres_big">
                    {school ? school : "à compléter"}
                  </p>
                </div>

                <div className="icon-and-text">
                  <div className="img-student-view">
                    <img src={townTrainee} alt="ville" />
                  </div>
                  <p className="criteres_big">{town ? town : "à compléter"}</p>
                </div>

                <div className="icon-and-text">
                  <div className="img-student-view">
                    <img src={calendar} alt="calendrier" />
                  </div>
                  <p className="criteres_big">
                    {dateStart
                      ? new Date(dateStart).toLocaleDateString()
                      : "à compléter"}
                  </p>
                  <div className="img-student-view margin-chevron">
                    <img src={next} alt="chevron" />
                  </div>
                  <p className="criteres_big">
                    {dateEnd
                      ? new Date(dateEnd).toLocaleDateString()
                      : "à compléter"}
                  </p>
                </div>

                <div className="icon-and-text">
                  <div className="img-student-view">
                    <img src={levelTrainee} alt="ville" />
                  </div>
                  <p className="criteres_big">
                    {LevelStudy !== null ? LevelStudy : "à compléter"}
                  </p>
                </div>
              </div>
              {/* FIN CRITERES TRAINEE */}
              <p className="regular_orange_subtitle left">à propos</p>
              <p className="regular_text left">
                {descriptionTrainee !== null
                  ? descriptionTrainee
                  : "description : à compléter"}
              </p>
            </div>
          </div>
        );
      }
      case "FULL": {
        return (
          <div>
            <Paper className={classes.paperFull} elevation={2}>
              <p>Size FULL</p>
              <ul className={classes.list}>
                <li>
                  <img
                    className={classes.image}
                    src={
                      pictures !== null
                        ? MakeCompletedUrl(`${pictures}`)
                        : MakeCompletedUrl(
                            "public/photoProfile/PhotoProfil.jpg"
                          )
                    }
                    alt=""
                  />
                </li>
                <li>{firstname}</li>
                <li>{lastname}</li>
                <li>
                  {titre !== null ? titre : "Poste recherché : à compléter"}
                </li>
                <li>{school !== null ? school : "École : à compléter"}</li>
                <li>
                  début :
                  {dateStart
                    ? new Date(dateStart).toLocaleDateString()
                    : "à compléter"}
                </li>
                <li>
                  fin:
                  {dateEnd
                    ? new Date(dateEnd).toLocaleDateString()
                    : "à compléter"}
                </li>
                <li className={classes.address}>{address}</li>
                <li>
                  {postalCode !== null
                    ? postalCode
                    : "Code postal : à compléter"}
                </li>
                <li> {town !== null ? town : "Ville : à compléter"}</li>
                <li>
                  {descriptionTrainee !== null
                    ? descriptionTrainee
                    : "Description: à compléter"}
                </li>
                <li>
                  {LevelStudy !== null
                    ? LevelStudy
                    : "Niveau d'étude : à compléter"}
                </li>
                <li>{phone !== null ? phone : "Télephone : à compléter"}</li>
                <li>{email}</li>
              </ul>
            </Paper>
          </div>
        );
      }
      default:
        break;
    }
  }
}

export default withStyles(styles)(StudentView);
