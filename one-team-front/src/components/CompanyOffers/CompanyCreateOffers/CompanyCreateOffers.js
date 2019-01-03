import React from "react";
import "./CompanyCreateOffers.css";
import Axios from "axios";
import { connect } from "react-redux";

const API_ENDPOINT_MISSION = "http://localhost:3001/mission/";

const CompanyCreateOffers = class extends React.Component {
  state = this.defaultState();

  componentDidMount() {
    const { mission } = this.props;
    if (mission && mission.id) {
      this.setState({ mission, isEditMode: true });
    }
  }

  handlerOnChange = event => {
    const { name, value } = event.target;
    this.setState(previousState => ({
      mission: {
        ...previousState.mission,
        [name]: value
      }
    }));
    // console.log(this.state);
  };

  handlerOnChangeLevelStudy = event => {
    const { value } = event.target;
    this.setState(previousState => ({
      mission: {
        ...previousState.mission,
        levelStudyId: value
      }
    }));
  };

  handlerOnSubmit = event => {
    event.preventDefault();
    const { mission, isEditMode } = this.state;
    const postFormMission = {
      titleMission: mission.titleMission,
      dateStart: mission.dateStart,
      dateEnd: mission.dateEnd,
      description: mission.description,
      town: mission.town,
      intro: mission.intro,
      companyId: mission.CompanyId,
      levelStudyId: mission.levelStudyId
    };
    // console.log(this.state.mission);

    if (!isEditMode) {
      Axios.post(API_ENDPOINT_MISSION, postFormMission).then(
        // res => console.log(res)
        // console.log(postFormMission);


        window.alert("Ajout ok")
      );
    } else {
      Axios.put(`${API_ENDPOINT_MISSION}${mission.id}`, postFormMission).then(
        window.alert("Modification ok")
      );
    }

    //
    // .then(
    //   this.setState({ mission: this.defaultState() }, () =>
    //     console.log(this.state.mission)
    //   )
    // );
  };

  defaultState() {
    const { idCompany } = this.props;

    return {
      mission: {
        titleMission: "",
        dateStart: new Date().toLocaleDateString(),
        dateEnd: new Date().toLocaleDateString(),
        description: "",
        town: "",
        intro: "",
        CompanyId: idCompany,
        LevelStudyId: 1
      },
      isEditMode: false
    };
  }

  render() {
    const { mission, isEditMode } = this.state;
    return (
      <div className="CompanyCreateOffers">
        <p>{isEditMode ? "Je modifie une mission" : "Je crée une mission"}</p>
        <form
          method="post"
          onSubmit={this.handlerOnSubmit}
          className="container"
        >
          <input
            placeholder="Titre de la mission de stage"
            name="titleMission"
            value={mission.titleMission}
            onChange={this.handlerOnChange}
            required
          />
          <input
            placeholder="Date de début"
            name="dateStart"
            value={mission.dateStart}
            onChange={this.handlerOnChange}
            required
          />
          <input
            placeholder="Date de fin"
            name="dateEnd"
            value={mission.dateEnd}
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
            name="description"
            value={mission.description}
            onChange={this.handlerOnChange}
            required
          />
          <select
            name="LevelStudyId"
            required
            value={mission.LevelStudyId}
            onChange={this.handlerOnChangeLevelStudy}
          >
            <option value={1}>Bac + 1</option>
            <option value={2}>Bac + 2</option>
          </select>
          <button type="submit" className="submit">
            {isEditMode ? "Modifier" : "Créer"}
          </button>
        </form>
        <p>{isEditMode ? "" : "Cette offre sera publiée après validation"}</p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    idCompany: state.company.id
  };
};

export default connect(mapStateToProps)(CompanyCreateOffers);
