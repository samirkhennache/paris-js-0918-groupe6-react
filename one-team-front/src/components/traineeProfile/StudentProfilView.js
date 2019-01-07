import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class StudentProfilView extends Component {
  state = {
    infosTrainee: null
  };

  componentDidMount() {
    const { traineeId } = this.props;
    axios
      .get(`http://localhost:3001/trainee/${traineeId}/profile`)
      .then(result => {
        this.setState({
          infosTrainee: result.data
        });
      });
  }

  render() {
    const { infosTrainee } = this.state;
    console.log(infosTrainee);
    return (
      <div>
        {infosTrainee &&
          infosTrainee.map(e => (
            <div>
              <img src={e.pictures} alt={e.firstname} />
              <h3>{e.firstname}</h3>
              <h4>{e.town}</h4>
            </div>
          ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  traineeId: state.student.id
});

export default connect(mapStateToProps)(StudentProfilView);
