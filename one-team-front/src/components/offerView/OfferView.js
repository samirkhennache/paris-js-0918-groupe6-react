import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import PropTypes from "prop-types";
import { AwesomeButton } from "react-awesome-button";
import ModalOffer from "./ModalOffer";
import { openModal } from "../../actions/offerViewActions";
import "./Button.css";

class OfferView extends Component {
  state = {
    missionId: null,
    seeMore: false
  };

  componentDidMount () {
    const { missionId } = this.props;
    this.setState({
      missionId
    });
  }

  handleClickSeemore = () => {
    this.props.openModal(this.props.open);
    this.setState({
      seeMore: !this.state.seeMore
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

  render () {
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
            <ModalOffer />
            <AwesomeButton
              type="primary"
              className="aws-btn remove"
              action={this.handleClickSeemore}
            >
              En savoir plus
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
const mapStateToProps = state => ({
  open: state.offerViewModal.openModal
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      openModal
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferView);
