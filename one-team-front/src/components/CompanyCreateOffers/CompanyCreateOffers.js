import React from "react";
import "./CompanyCreateOffers.css";
import Axios from "axios";

const API_ENDPOINT_MISSION = "http://localhost:3001/mission/";

const CompanyCreateOffers = class extends React.Component {
  state = this.defaultState();

  handlerOnChange = event => {
    const updateMission = {
      ...this.state.mission,
      [event.target.name]: event.target.value
    };
    this.setState({
      mission: updateMission
    });
  };

  handlerOnChangeLevelStudy = event => {
    this.setState({
      levelStudyId: event.target.value
    });
  };

  handlerOnSubmit = event => {
    event.preventDefault();
    const { mission } = this.state;
    const postFormMission = {
      titleMission: mission.title,
      dateStart: mission.startDate,
      dateEnd: mission.endDate,
      description: mission.descritpion,
      town: mission.town,
      intro: mission.intro,
      companyId: 1,
      levelStudyId: mission.levelStudyId
    };
    // console.log(this.state.mission);
    // console.log(this.postFormMission);
    Axios.post(API_ENDPOINT_MISSION, postFormMission); //.then(
    //   this.setState({ mission: this.defaultState() }, () =>
    //     console.log(this.state.mission)
    //   )
    // );
  };

  defaultState() {
    return {
      mission: {
        title: "",
        startDate: new Date().toLocaleDateString(),
        endDate: new Date().toLocaleDateString(),
        descritpion: "",
        town: "",
        intro: "",
        companyId: 1,
        levelStudyId: 1
      }
    };
  }

  render() {
    const { mission } = this.state;
    return (
      <div className="CompanyCreateOffers">
        <p>Je crée une mission</p>
        <form
          method="post"
          onSubmit={this.handlerOnSubmit}
          className="container"
        >
          <input
            placeholder="Titre de la mission de stage"
            name="title"
            value={mission.title}
            onChange={this.handlerOnChange}
            required
          />
          <input
            placeholder="Date de début"
            name="startDate"
            value={mission.startDate}
            onChange={this.handlerOnChange}
            required
          />
          <input
            placeholder="Date de fin"
            name="endDate"
            value={mission.endDate}
            onChange={this.handlerOnChange}
            required
          />
          <input
            placeholder="Ville"
            name="town"
            value={mission.town}
            onChange={this.handlerOnChange}
            required
          />
          <textarea
            placeholder="Introduction"
            name="intro"
            value={mission.intro}
            onChange={this.handlerOnChange}
            required
          />
          <textarea
            placeholder="Description"
            name="descritpion"
            value={mission.descritpion}
            onChange={this.handlerOnChange}
            required
          />
          <select
            name="levelStudyId"
            required
            value={mission.levelStudyId}
            onChange={this.handlerOnChangeLevelStudy}
          >
            <option value="1">Bac + 1</option>
            <option value="2">Bac + 2</option>
          </select>
          <input type="submit" className="submit" />
        </form>
        <p>cette offre sera publiée après validation</p>
      </div>
    );
  }
};

export default CompanyCreateOffers;
