import React, { Component } from "react";
import axios from "axios";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import noResult from "../../img/icons/delete-button.png";
import { MakeCompletedUrl } from "../../tools";
import ModalOffer from "../offerView/ModalOffer";
import { MIDDLE } from "../offerView";

import "../pages.css";

import logoSearch from "../../img/icons8-chercher-208.png";

import Button from "@material-ui/core/Button";

import "./OffersStud.css";
import { Grid, TextField, withStyles, Paper } from "@material-ui/core";

const styles = theme => ({
  TextField: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    marginTop: "3px",
    marginBottom: "3px"
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
        this.setState({ result: res.data, isLoad: true });
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
    const { result, count, isLoad } = this.state;
    const { classes } = this.props;
    console.log(result);
    return (
      <div>
        <div className="home-company header-search">
          <div className="compnay-overlay">
            <div className="block-company ">
              <h1 className="page_title">
                Trouve la mission de stage de tes rêves !
              </h1>
              <h2 className="page_subtitle">
                Nombre d’offres disponibles : {count || "x"}{" "}
              </h2>

              <form onSubmit={this.handleSubmit}>
                <Grid
                  container
                  alignItems="center"
                  justify="center"
                  className="container-bloc"
                  spacing={8}
                >
                  <Grid item xs={10} sm={6} md={5} className="item-textfield">
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
                  </Grid>
                  <Grid item xs={10} sm={6} md={5} className="item-textfield">
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
                  </Grid>
                  <Grid item xs={4} sm={4} md={2} className="item-textfield">
                    <Grid
                      container
                      justify="center"
                      alignItems="center"
                      spacing={0}
                      className="container-button"
                    >
                      <Grid item xs={12} className="grid-button">
                        <Button
                          variant="contained"
                          type="submit"
                          className="searchButton classic_button_orange button-search-offer"
                        >
                          <img
                            src={require("../../img/icons8-chercher-208.png")}
                            width="30"
                            height="30"
                          />
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>

        {isLoad ? (
          <div className="general_margin content-search-offers">
            <Grid container justify="center" alignItems="center">
              <Grid xs={12}>
                {result.map(element => (
                  <div className="bloc-modalOffers">
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
                  </div>
                ))}
              </Grid>
            </Grid>
          </div>
        ) : null}
        {isLoad && !result.length && (
          <div>
            <img src={noResult} alt="pas de résultat" />
            <p className="noResult-search regular_text">
              Il n'y a pas de résultats pour cette recherche
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(FindOffers);
