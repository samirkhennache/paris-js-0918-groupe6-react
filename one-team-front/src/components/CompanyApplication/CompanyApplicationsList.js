import React, { Component } from "react";
import axios from "axios";
import CompanyApplicationItem from "./CompanyApplicationItem";

class CompanyApplicationsList extends Component {
  state = {
    trainee: [],
    id: "",
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get(`http://localhost:3001/application/${this.state.id}/mytrainee`)
      .then(res => this.setState({ trainee: res.data, isLoaded: true }));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.isLoaded && (
          <CompanyApplicationItem trainee={this.state.trainee} />
        )}
      </div>
    );
  }
}

export default CompanyApplicationsList;
