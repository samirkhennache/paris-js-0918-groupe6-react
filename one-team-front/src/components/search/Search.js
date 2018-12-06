import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    missions: [],
    search: "",
    isLoad: false
  };

  componentDidMount() {
    axios.get("http://localhost:3001/mission").then(res => {
      //console.log("lolo" + res.data);
      this.setState({ missions: res.data, isLoad: true });
    });
  }

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search, missions, isLoad } = this.state;
    let searchMission = missions.filter(
      f => f.titleMission.toLowerCase().indexOf(search) !== -1
    );

    // console.log("lolo" + search);
    return (
      <div>
        <form>
          <input
            type="search"
            placeholder="Recherche"
            value={search.titleMission}
            onChange={this.handleSearch}
          />
          <button type="submit"> Submit</button>
        </form>
        {!isLoad ? (
          <p>Loading ...</p>
        ) : (
          searchMission.map((e, i) => (
            <div key={i}>
              {" "}
              <h4>{e.titleMission}</h4>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Search;
