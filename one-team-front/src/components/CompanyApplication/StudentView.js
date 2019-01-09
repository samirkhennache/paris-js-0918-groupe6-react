import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  row: {
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "center",
    border: "1px solid black"
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
    textAlign: "center",

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
        <div >
          <Paper classeName="blocList"  elevation={2}>
            <ul className={classes.list}>
              <li>
                <img className={classes.image} src={pictures} alt="" />
              </li>
              <li>{firstname}</li>
              <li className={classes.address}>
                {address} - {postalCode} - {town}
              </li>
            </ul>
          </Paper>
        </div>
      );
    }
    case "FULL_RESTRICTED": {
      return (
        <div className={classes.row}>
          <Paper className={classes.root} elevation={2}>
            <ul className={classes.list}>
              <li>
                <img className={classes.image} src={pictures} alt="" />
              </li>
              <li>{firstname}</li>
              <li className={classes.address}>
                {address} - {postalCode} - {town}
              </li>
            </ul>
          </Paper>
        </div>
      );
    }
    case "FULL": {
      return (
        <div className={classes.row}>
          <Paper className={classes.root} elevation={2}>
            <ul className={classes.list}>
              <li>
                <img className={classes.image} src={pictures} alt="" />
              </li>
              <li>{firstname}</li>
              <li className={classes.address}>
                {address} - {postalCode} - {town}
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
