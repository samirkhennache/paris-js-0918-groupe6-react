import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { AwesomeButton } from "react-awesome-button";
import "./Button.css";

class OfferView extends Component {
  state = {
    missionId: null,
    seeMore: false
  };

  componentDidMount() {
    const { missionId } = this.props;
    this.setState({
      missionId
    });
  }

  handleClickSeemore = () => {
    const { seeMore } = this.state;
    this.setState({
      seeMore: !seeMore
    });
  };

  handleClickApplicate = () => {
    const { missionId } = this.state;

    axios
      .post("http://localhost:3001/application", {
        missionId,
        traineeId: 2
      })
      .then(res => console.log(res));
  };

  render() {
    const {
      size,
      titleMission,
      dateStart,
      dateEnd,
      statusAppli,
      description,
      company
    } = this.props;
    const { seeMore } = this.state;
    switch (size) {
      case "SMALL": {
        return (
          <div className="OfferView">
            <h3> {titleMission} </h3> <p> {company} </p> <p> {dateStart} </p>
            <p> {dateEnd} </p> {statusAppli && <p> en cours </p>}
            {seeMore && (
              <div>
                <p> {description} </p>
              </div>
            )}
            <AwesomeButton
              type="primary"
              className="aws-btn remove"
              action={this.handleClickSeemore}
            >
              {seeMore ? "Voir moins" : "En savoir plus"}
            </AwesomeButton>
          </div>
        );
      }
      case "MIDDLE": {
        return (
          <div className="OfferView">
            <h3> {titleMission} </h3> <p> {dateStart} </p> <p> {dateEnd} </p>
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
      case "FULL": {
        return (
          <div className="OfferView">
            <h3> {titleMission} </h3> <p> {dateStart} </p> <p> {dateEnd} </p>
            <p> {description} </p>
            <AwesomeButton
              type="primary"
              className="aws-btn remove"
              action={this.handleClickApplicate}
            >
              Postuler
            </AwesomeButton>
          </div>
        );
      }
      default:
        break;
    }
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
