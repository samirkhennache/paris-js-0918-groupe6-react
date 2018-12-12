import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { AwesomeButton } from "react-awesome-button";
import "./Button.css";
import "./OffersStud.css";

class OfferView extends Component {
  state = {
    missionId: null
  };

  componentDidMount() {
    const { missionId } = this.props;
    this.setState({ missionId });
  }

  handleClick = () => {
    const { missionId } = this.state;

    axios
      .post("http://localhost:3001/application", {
        missionId,
        traineeId: 2
      })
      .then(res => console.log(res));
  };

  render() {
    const { titleMission, dateStart, dateEnd, description } = this.props;
    return (
      <div className="OfferView">
        <h3> {titleMission} </h3>
        <p> {dateStart} </p>
        <p> {dateEnd} </p>
        <p> {description} </p>
        <AwesomeButton
          type="primary"
          className="aws-btn remove"
          action={this.handleClick}
        >
          Postuler
        </AwesomeButton>
      </div>
    );
  }
}
OfferView.propTypes = {
  missionId: PropTypes.number.isRequired,
  titleMission: PropTypes.string.isRequired,
  dateStart: PropTypes.instanceOf(Date).isRequired,
  dateEnd: PropTypes.instanceOf(Date).isRequired,
  description: PropTypes.string.isRequired
};
export default OfferView;
