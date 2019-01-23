import React, { Component } from "react";
import CompanyPresentationFull from "./CompanyPresentationFull";
import companyIcon from "../../img/icons/three-buildings-black.png";
import ageTrainee from "../../img/icons/cake.png";
import schoolTrainee from "../../img/icons/scholl.png";
import townTrainee from "../../img/icons/placeholder-filled-point.png";
import calendarAdmin from "../../img/icons/calendar-black.png";
import levelTrainee from "../../img/icons/graduate-cap.png";
import next from "../../img/icons/right-chevron(1).png";
import teamAdmin from "../../img/icons/team.png";
import logoCompany from "../../img/three-buildings.png";

class CompanyPresentation extends Component {
  state = {
    open: false
  };

  clickClose = () => {
    this.setState({ open: false });
  };

  clickMissionSmall = () => {
    console.log("open");
    this.setState({ open: true });
  };

  render() {
    const {
      titleMission,
      company,
      introduction,
      dateStart,
      dateEnd,
      town
    } = this.props;
    const { open } = this.state;
    return (
      <div className="bloc-company-admin">
        <div className="bloc-logo-admin">
          <div className="logo-company-admin">
            <img className="logo-img" src={logoCompany} alt="logo company" />
          </div>
        </div>

        <div onClick={() => this.clickMissionSmall()}>
          <div className="icon-and-text company-admin">
            <div className="img-student-view">
              <img src={companyIcon} alt="entreprise" />
            </div>
            <p className="regular_orange_subtitle">{company}</p>
          </div>
          <p className="mission_title">{titleMission}</p>

          <div className="icon-and-text">
            <div className="img-student-view">
              <img src={townTrainee} alt="ville" />
            </div>
            <p className="criteres_big">{town}</p>
          </div>
          <div className="icon-and-text">
            <div className="img-student-view">
              <img src={calendarAdmin} alt="calendrier" />
            </div>
            <p className="criteres_big">
              {new Date(dateStart).toLocaleDateString()}
            </p>
            <div className="img-student-view margin-chevron">
              <img src={next} alt="chevron" />
            </div>
            <p className="criteres_big">
              {new Date(dateEnd).toLocaleDateString()}
            </p>
          </div>
        </div>
        <hr className="hr_horizontal_orange" />
        <div className="icon-and-text">
          <div className="img-student-view">
            <img src={teamAdmin} alt="entreprise" />
          </div>
          <p className="regular_orange_subtitle">Team</p>
        </div>

        <CompanyPresentationFull
          open={open}
          close={this.clickClose}
          {...this.props}
        />
      </div>
    );
  }
}

export default CompanyPresentation;
