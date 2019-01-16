import React, { Component } from "react";
import CompanyPresentationFull from "./CompanyPresentationFull";

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
      <div>
        <div onClick={() => this.clickMissionSmall()}>
          <p>{titleMission}</p>
          <p>{company}</p>
          <p>début: {new Date(dateStart).toLocaleDateString()}</p>
          <p>fin: {new Date(dateEnd).toLocaleDateString()}</p>
          <p>{town}</p>
          <p>{introduction}</p>
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
