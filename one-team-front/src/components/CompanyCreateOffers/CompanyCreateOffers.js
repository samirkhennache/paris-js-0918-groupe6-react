import React from "react";
import "./CompanyCreateOffers.css";
import Axios from "axios";

const API_ENDPOINT_MISSION = "http://localhost:3001/mission/";

const CompanyCreateOffers = class extends React.Component {
  state = {
    title: "",
    startDate: new Date().toLocaleDateString(),
    endDate: new Date().toLocaleDateString(),
    descritpion: "",
    town: "",
    intro: "",
    companyId: 1,
    levelStudyId: 1
  };

  componentDidMount() {
    // this.setState({});
  }

  handlerOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handlerOnChangeLevelStudy = event => {
    this.setState({
      levelStudyId: event.target.value
    });
  };

  handlerOnSubmit = event => {
    event.preventDefault();
    const {
      title,
      startDate,
      endDate,
      descritpion,
      town,
      intro,
      levelStudyId
    } = this.state;
    const postFormMission = {
      titleMission: title,
      dateStart: startDate,
      dateEnd: endDate,
      description: descritpion,
      town,
      intro,
      companyId: 1,
      levelStudyId
    };
    // console.log(this.state);
    Axios.post(API_ENDPOINT_MISSION, postFormMission);
  };

  render() {
    const { title, startDate, endDate, descritpion, town, intro } = this.state;
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
            value={title}
            onChange={this.handlerOnChange}
            required
          />
          <input
            placeholder="Date de début"
            name="startDate"
            value={startDate}
            onChange={this.handlerOnChange}
            required
          />
          <input
            placeholder="Date de fin"
            name="endDate"
            value={endDate}
            onChange={this.handlerOnChange}
            required
          />
          <input
            placeholder="Ville"
            name="town"
            value={town}
            onChange={this.handlerOnChange}
            required
          />
          <textarea
            placeholder="Introduction"
            name="intro"
            value={intro}
            onChange={this.handlerOnChange}
            required
          />
          <textarea
            placeholder="Description"
            name="descritpion"
            value={descritpion}
            onChange={this.handlerOnChange}
            required
          />
          <select
            name="levelStudyId"
            required
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
