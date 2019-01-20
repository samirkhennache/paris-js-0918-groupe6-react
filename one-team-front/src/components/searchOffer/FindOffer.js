import React, { Component } from "react";
import axios from "axios";
import ModalOffer from "../offerView/ModalOffer";
import { MIDDLE } from "../offerView";

import logoSearch from "../../img/icons8-chercher-208.png";

import Button from "@material-ui/core/Button";

import "./OffersStud.css";

class FindOffers extends Component {
  state = {
    result: [],
    search: "",
    town: "",
    isLoad: false
  };

  componentDidMount() {
    this.getResult();
    this.getCount();
  }

  getCount = () => {
    const url = "http://localhost:3001/mission/getcount";
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

  getResult = () => {
    const { search, town } = this.state;
    const url = `http://localhost:3001/mission?search=${search}&town=${town}`;
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
    this.getResult();
  };

  render() {
    const { result, count } = this.state;
    console.log(result);
    return (
      <div>
        <p>{count || "x"} stages pour votre recherche</p>
        <form onSubmit={this.handleSubmit}>
          <input
            name="search"
            id="search"
            type="search"
            placeholder="Stage"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="town"
            id="town"
            placeholder="ville"
            onChange={this.handleChange}
          />
          {/* <button type="submit">Rechercher</button> */}
          <Button variant="contained" type="submit" className="searchButton">
            <img
              src={require("../../img/icons8-chercher-208.png")}
              width="30"
              height="30"
            />
          </Button>
        </form>
        {result.map(element => (
          <ModalOffer
            size={MIDDLE}
            key={`${element.id}-${element.titleMission}`}
            missionId={element.id}
            titleMission={element.titleMission}
            company={element.Company.companyName}
            dateStart={element.dateStart}
            dateEnd={element.dateEnd}
            description={element.description}
            intro={element.intro}
            town={element.town}
            LevelStudy={element.LevelStudy.label}
            {...this.props}
          />
        ))}
      </div>
    );
  }
}

export default FindOffers;
