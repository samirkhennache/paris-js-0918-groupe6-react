import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { MakeCompletedUrl } from "../../tools";
import ville from "../../img/cardEtudiant/placeholder-filled-point.png";
import calendrier from "../../img/cardEtudiant/calendar.png";
import chevron from "../../img/cardEtudiant/right-chevron.png";

import "./StudentView.css";
import "./StudentApplication.css";

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
    margin: "0px",
    textAlign: "left"
  }
});

const StudentView = props => {
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
    modeRefuse
  } = props;
  // console.log("StudentView", dateStart, dateEnd);

  switch (size) {
    case "SMALL": {
      return (
        <div>
          <Paper className={classes.paper} elevation={2}>
            <ul className={classes.list}>
              <li>
                <img
                  className={classes.image}
                  src={
                    pictures !== null
                      ? MakeCompletedUrl(`${pictures}`)
                      : MakeCompletedUrl("public/photoProfile/PhotoProfil.jpg")
                  }
                  alt=""
                />
              </li>
              <li className="regular_orange_subtitle">{firstname}</li>
              <div style={{ fontSize: 15 }}>
                <li>{titre !== null ? titre : "Poste : à completer"}</li>
                <li className={classes.address}>
                  <img
                    src={ville}
                    alt=""
                    width="20"
                    height="20"
                    style={{ marginRight: 5 }}
                  />
                  {town !== null ? town : " à compléter"}
                </li>

                {/* <div>
                  <p className={classes.address}>
                    <img
                      src={calendrier}
                      alt=""
                      width="20"
                      height="20"
                      style={{ marginRight: 5 }}
                    />
                    {dateStart
                      ? new Date(dateStart).toLocaleDateString()
                      : " à compléter"}
                  </p>
                  <p className={classes.address}>
                    <img
                      src={chevron}
                      alt=""
                      width="20"
                      height="20"
                      style={{ marginRight: 5, marginTop: 7 }}
                    />
                    {dateEnd
                      ? new Date(dateEnd).toLocaleDateString()
                      : " à compléter"}
                  </p>
                </div> */}

                <div class="section group" style={{ fontSize: 15 }}>
                  <div class="col span_1_of_2">
                    <p className={classes.address}>
                      <img
                        src={calendrier}
                        alt=""
                        width="20"
                        height="20"
                        style={{ marginRight: 5, marginTop: 5 }}
                      />
                      {dateStart
                        ? new Date(dateStart).toLocaleDateString()
                        : " à compléter"}
                    </p>
                  </div>
                  <div class="col span_1_of_2">
                    <p className={classes.address}>
                      <img
                        src={chevron}
                        alt=""
                        width="20"
                        height="20"
                        style={{ marginRight: 2, marginTop: 6 }}
                      />
                      {dateEnd
                        ? new Date(dateEnd).toLocaleDateString()
                        : " à compléter"}
                    </p>
                  </div>
                </div>
              </div>
            </ul>
          </Paper>
        </div>
      );
    }
    case "FULL_RESTRICTED": {
      return (
        <div>
          <Paper className={classes.paperFull} elevation={2}>
            <p>Size FULL_RESTRICTED</p>
            <ul className={classes.list}>
              <li>
                <img
                  className={classes.image}
                  src={
                    pictures !== null
                      ? MakeCompletedUrl(`${pictures}`)
                      : MakeCompletedUrl("public/photoProfile/PhotoProfil.jpg")
                  }
                  alt=""
                />
              </li>
              <li>{firstname}</li>
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
              <li className={classes.address}>
                {town !== null ? town : "Ville : à compléter"}
              </li>
              <li>
                {descriptionTrainee !== null
                  ? descriptionTrainee
                  : "description : à compléter"}
              </li>
              <li>
                {LevelStudy !== null
                  ? LevelStudy
                  : "Niveau d'étude : à compléter"}
              </li>
            </ul>
          </Paper>
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
                      : MakeCompletedUrl("public/photoProfile/PhotoProfil.jpg")
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
                {postalCode !== null ? postalCode : "Code postal : à compléter"}
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
};

export default withStyles(styles)(StudentView);
