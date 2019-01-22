import React, { Component } from "react";
import axios from "axios";
import { MakeCompletedUrl } from "../../tools";
import ModalOffer from "../offerView/ModalOffer";
import { MIDDLE } from "../offerView";

import logoSearch from "../../img/icons8-chercher-208.png";

import Button from "@material-ui/core/Button";

import "./OffersStud.css";
import { Grid, TextField, withStyles, Paper } from "@material-ui/core";

const styles = theme => ({
  // container: {
  //   display: "flex",
  //   flexDirection: "column",
  //   border: "1px solid red"
  // }
  TextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    backgroundColor: "#fff",
    borderRadius: 10
  },
  Form: {
    display: "flex",
    justify: "center",
    alignItems: "center"
  }
});

class FindOffers extends Component {
  state = {
    result: [],
    search: "",
    town: "",
    isLoad: false
  };

  componentDidMount() {
    this.getMission();
    this.getCount();
  }

  getCount = () => {
    const url = MakeCompletedUrl("mission/getcount");
    axios.get(url).then(res => {
      console.log("res", res);
      this.setState({ ...this.state, count: res.data.count });
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // getResult = () => {};

  getMission = () => {
    const { search, town } = this.state;
    const url = MakeCompletedUrl(`mission?search=${search}&town=${town}`);
    axios
      .get(url)
      .then(res => {
        this.setState({ result: res.data });
      })
      .catch(err => {
        if (err.response.status === 304) {
          console.log("status", err.response.status);
        }
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.getMission();
  };

  render() {
    const { result, count } = this.state;
    const { classes } = this.props;
    console.log(result);
    return (
      <div>
        <Grid xs direction="column" justify="center" alignItems="center">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className="Haut"
            xs
          >
            <h3 className="titrePage">
              Trouve la mission de stage de tes rêves !
            </h3>

            <p className="count">
              Nombre d’offres disponibles : {count || "x"}{" "}
            </p>
            <form onSubmit={this.handleSubmit} className={classes.Form}>
              <TextField
                name="search"
                label="Recherche"
                margin="normal"
                variant="outlined"
                className={classes.TextField}
                id="search"
                type="search"
                placeholder="Stage"
                onChange={this.handleChange}
              />
              <TextField
                type="search"
                name="town"
                id="town"
                placeholder="ville"
                onChange={this.handleChange}
                label="Town"
                margin="normal"
                variant="outlined"
                className={classes.TextField}
              />
              {/* <button type="submit">Rechercher</button> */}
              <Button
                variant="contained"
                type="submit"
                className="searchButton"
              >
                <img
                  src={require("../../img/icons8-chercher-208.png")}
                  width="30"
                  height="30"
                />
              </Button>
            </form>
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            {result.map(element => (
              <Paper className="Middle">
                <ModalOffer
                  size={MIDDLE}
                  key={`${element.id}-${element.titleMission}`}
                  missionId={element.id}
                  company={element.Company.companyName}
                  titleMission={element.titleMission}
                  dateStart={element.dateStart}
                  dateEnd={element.dateEnd}
                  description={element.description}
                  intro={element.intro}
                  town={element.town}
                  LevelStudy={element.LevelStudy.label}
                  {...this.props}
                />
              </Paper>
            ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(FindOffers);
