import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

class Search extends Component {
  state = {
    missions: [],
    search: "",
    town: [],
    townSelect: [],
    selectTown: [],
    isLoad: false
  };

  componentDidMount() {
    axios.get("http://localhost:3001/mission").then(res => {
      //console.log("lolo", res.data);
      this.setState({ missions: res.data, isLoad: true }, () => {
        this.getChoix();
        // this.filterCity();
      });
    });
  }

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  getChoix = () => {
    const { missions } = this.state;
    const town = [];
    missions
      .map(e => e.town)
      .filter(f => {
        if (!town.includes(f)) {
          town.push({ value: f, label: f });
        }
        return f;
      });
    this.setState({ town });
  };

  // getSelectTown = () => {
  //   const { missions } = this.state;
  //   const townSelect = [];
  //   const town = [];
  //   missions
  //     .map(e => e.town)
  //     .filter(f => {
  //       //console.log("f", f);
  //       if (!town.includes(f)) {
  //         townSelect.push(f);
  //         // console.log("f", townSelect);
  //         town.push({ value: f, label: f });
  //       }
  //       return f;
  //     });
  //   this.setState({ town });
  // };

  handleTown = town => {
    console.log(town.target.value);
    const { missions } = this.state;
    this.filterCity(town.target.value);
    // this.setState({ selectTown: town });
  };

  // townFilter = () => {
  //   const { town, missions } = this.state;
  //   const optionTown = town.map(e => e.value);
  //   if (town.length !== 0) {
  //     return missions.filter(f => optionTown.includes(f.town));
  //   }

  //   return missions;
  // // };

  filterMission = mission  => {
    const { missions, search } = this.state;
    missions.filter(
      m => m.titleMission.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  };

  filterCity = city => {
    this.setState(prevState => ({
      townSelect: [
        ...prevState.missions.filter(mission => mission.town === city)
      ]
    }));
  };

  // filterSelect = (town, arrObjet = []) => {
  //   const { selectTown } = this.state;
  //   if (selectTown) {
  //     arrObjet.some(filterTown => filterTown === selectTown);
  //   }
  //   let filterT = town.map((objet, index) => {
  //     let isVisble = objet.label === selectTown;
  //   });
  // };

  // townFilter = (arrTown = []) => {
  //   const { selectTown } = this.state;
  //   if (selectTown) {
  //     arrTown.some(filterTown => filterTown === selectTown);
  //   }
  //   console.log("arr", arrTown);
  //   return arrTown;
  // };

  render() {
    const { search, selectTown, town, missions, isLoad } = this.state;
    // console.log("t", town, selectTown);
    //console.log("mi", missions);
    // const searchMission = missions.filter(
    //   f => f.titleMission.toLowerCase().indexOf(search.toLowerCase()) !== -1
    // );
    // console.log("select", search);

    // const selectTowns = town.filter(f => f.find(selectTown) !== -1);
    // console.log("S" + searchMission);
    // const townMission = missions.town.filter(
    //   f => f.toLowerCase().indexOf(town) !== -1
    // );
    // console.log("lol" + townMission);

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

          <select name="town" placeholder="Ville" onChange={this.handleTown}>
            {town.map(e => (
              <option value={e.value}>{e.label}</option>
            ))}
          </select>

          {/* <Select value={town.value} option={town.label} /> */}
        </form>
        {!isLoad ? (
          <p>Loading ...</p>
        ) : (
          this.filterMission.map((e, i) => (
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
