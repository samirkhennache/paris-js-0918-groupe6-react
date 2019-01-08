import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import CompanyApplicationItem from "./CompanyApplicationItem";

class CompanyApplicationsList extends Component {
  state = {
    trainee: [],
    id: 1,
    isLoaded: false
  };

  componentDidMount() {
    //const { idCompany } = this.props;
    const idCompany = sessionStorage.getItem("token");
    console.log(idCompany);
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

const mapStateToProps = state => ({
  idCompany: state.company.id
});

export default connect(mapStateToProps)(CompanyApplicationsList);
