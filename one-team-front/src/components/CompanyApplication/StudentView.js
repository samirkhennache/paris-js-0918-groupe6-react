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
    size
  } = props;
  switch (size) {
    case "SMALL": {
      return (
        <div>
          <Paper className={classes.paper} elevation={2}>
            <ul className={classes.list}>
              <li>
                <img className={classes.image} src={pictures} alt="" />
              </li>
              <li>{firstname}</li>
              <li className={classes.address}>
                {address} - {postalCode} {town}
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
            <ul className={classes.list}>
              <li>
                <img className={classes.image} src={pictures} alt="" />
              </li>
              <li>{firstname}</li>
              <li className={classes.address}>
                {address} - {postalCode} {town}
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
            <ul className={classes.list}>
              <li>
                <img className={classes.image} src={pictures} alt="" />
              </li>
              <li>{firstname}</li>
              <li className={classes.address}>
                {address} - {postalCode} {town}
              </li>
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
