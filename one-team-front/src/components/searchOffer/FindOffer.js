import React, { Component } from "react";
import axios from "axios";
import ModalOffer from "../offerView/ModalOffer";
import { MIDDLE } from "../offerView";

class FindOffers extends Component {
  state = {
    result: [],
    search: "",
    town: "",
    isLoad: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { search, town } = this.state;
    const url = `http://localhost:3001/mission?search=${search}&town=${town}`;
    axios.get(url).then(res => {
      this.setState({ result: res.data });
    });
  };

  componentDidMount() {
    const url = "http://localhost:3001/mission/getcount";
    axios.get(url).then(res => {
      console.log("res", res);
      this.setState({ ...this.state, count: res.data.count });
    });
  }

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
          <button type="submit">Submit</button>
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
            {...this.props}
          />
        ))}
      </div>
    );
  }
}

export default FindOffers;
