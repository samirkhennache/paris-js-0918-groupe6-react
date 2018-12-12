import React, { Component } from "react";
import axios from "axios";

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
    axios.ger(url).then(res => {
      this.setState({ result: res.data, isLoad: true });
    });
  };

  render() {
    const { result, isLoad } = this.state;
    return (
      <div>
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
      </div>
    );
  }
}

export default FindOffers;
