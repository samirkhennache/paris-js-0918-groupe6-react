import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

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
    description,
    school,
    lastname,
    email
  } = props;
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
                      ? `http://localhost:3001/${pictures}`
                      : "http://localhost:3001/public/photoProfile/PhotoProfil.jpg"
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
        <div>
          <Paper className={classes.paperFull} elevation={2}>
            <p>Size FULL_RESTRICTED</p>
            <ul className={classes.list}>
              <li>
                <img
                  className={classes.image}
                  src={
                    pictures !== null
                      ? `http://localhost:3001/${pictures}`
                      : "http://localhost:3001/public/photoProfile/PhotoProfil.jpg"
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
                {description !== null
                  ? description
                  : "description : à compléter"}
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
                      ? `http://localhost:3001/${pictures}`
                      : "http://localhost:3001/public/photoProfile/PhotoProfil.jpg"
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
                {description !== null
                  ? description
                  : "Description: à compléter"}
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
