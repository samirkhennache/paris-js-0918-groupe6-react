import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import StudentApplication from "./StudentApplication";
import { SMALL } from "./studentConstant";
import "./ViewStudent.css";

class CompanyApplicationsList extends Component {
  state = {
    trainee: [],
    id: 1,
    isLoaded: false
  };

  componentDidMount() {
    const { idCompany } = this.props;

    console.log(idCompany);
    axios
      .get(`http://localhost:3001/application/${this.state.id}/mytrainee`)
      .then(res => this.setState({ trainee: res.data, isLoaded: true }));
  }

  compareMissions = (a, b) => {
    return a - b;
  };

  render() {
    const { trainee, isLoaded } = this.state;
    console.log(trainee.data);
    return (
      <div>
        {isLoaded &&
          trainee.data.sort(this.compareMissions).map(element => (
            <div>
              <Typography variant="h2" component="h3">
                {element.titleMission}
              </Typography>
              <div className="blocList">
                {element.dataApplications.map(e => (
                  <StudentApplication
                    firstname={e.Trainee.firstname}
                    town={e.Trainee.town}
                    pictures={e.Trainee.pictures}
                    address={e.Trainee.address}
                    postalCode={e.Trainee.postalCode}
                    size={SMALL}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  idCompany: state.company.id
});

export default connect(mapStateToProps)(CompanyApplicationsList);
