import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  root: {
    ...theme.mixins.gutters(),
    padding: "0",
    // paddingTop: theme.spacing.unit * 2,
    // paddingBottom: theme.spacing.unit * 2,
    // border: "1px solid green",
    margin: "10px",
    width: "250px",
    height: "310px"
  },
  list: {
    listStyle: "none",
    padding: "0",
    textAlign: "center"
  },
  image: {
    borderRadius: "100%",
    height: "150px",
    width: "150px",
    padding: "10px 0"
  },
  adress: {
    margin: "10px"
  }
});

function compareMissions(a, b) {
  return a - b;
}

const CompanyApplicationItem = props => {
  const { classes, trainee } = props;
  return (
    <div>
      {/* {console.log("trainee", trainee)} */}
      {trainee.data.sort(compareMissions).map((
        e // console.log("e", e.dataApplications)
      ) => (
        <p key={e.mission_id}>
          <Typography variant="h2" component="h3">
            {e.titleMission}
          </Typography>
          <div className={classes.row}>
            {e.dataApplications.map(name => (
              <Paper className={classes.root} elevation={2}>
                <ul className={classes.list}>
                  {/* <li>{name.trainee.lastname}</li> */}
                  <li>
                    <img
                      className={classes.image}
                      src={name.Trainee.pictures}
                      alt=""
                    />
                  </li>
                  <li>{name.Trainee.firstname}</li>
                  <li>{name.Trainee.email}</li>
                  <li className={classes.adress}>
                    {" "}
                    {name.Trainee.address} - {name.Trainee.postalCode}{" "}
                    {name.Trainee.town}
                  </li>
                  <Button variant="contained" color="primary">
                    Ajouter
                  </Button>{" "}
                  -{" "}
                  <Button variant="contained" color="secondary">
                    Refuser
                  </Button>
                </ul>
              </Paper>
            ))}
          </div>
        </p>
      ))}
    </div>
  );
};

CompanyApplicationItem.prototype = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CompanyApplicationItem);
