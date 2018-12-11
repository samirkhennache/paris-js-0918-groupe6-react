import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    result: [],
    search: "",
    town: "",
    isLoad: false
  };

  handleChange = e => {
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { search, town } = this.state;
    //console.log((e.this.state.search, e.town));
    const url = `http://localhost:3001/mission?search=${search}&town=${town}`;
    axios.get(url).then(res => {
      this.setState({ result: res.data, isLoad: true });
    });
  };

  render() {
    const { result, isLoad } = this.state;
    console.log("state", this.state.search, this.state.town);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="search"
            id="search"
            type="search"
            placeholder="search ..."
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="town"
            id="town"
            placeholder="ville"
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        {!isLoad ? (
          <p>Loading ...</p>
        ) : (
          result.map(e => <div key={e.id}>{e.titleMission}</div>)
        )}
      </div>
    );
  }
}

export default Search;
