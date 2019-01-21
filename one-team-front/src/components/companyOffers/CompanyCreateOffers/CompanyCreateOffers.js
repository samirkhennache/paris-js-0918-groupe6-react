import React from "react";
import "./CompanyCreateOffers.css";
import Axios from "axios";
import { MakeCompletedUrl, ConvertDate } from "../../../tools";
import { TextField, Select, MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
// import ConvertDate from "../../../tools";
import Tinymce from "../../tiny/Tiny";

const API_ENDPOINT_MISSION = MakeCompletedUrl("mission/");

const CompanyCreateOffers = class extends React.Component {
  state = this.defaultState();

  componentDidMount() {
    Axios.get(MakeCompletedUrl("paradata/levelstudies")).then(res => {
      this.setState({ idLoaded: true, levelstudies: res.data });
    });
    const { modifMission } = this.props;
    // console.log(">>>CompanyCreateOffers", modifMission);
    if (modifMission && modifMission.id) {
      this.setState({ mission: modifMission, isEditMode: true });
    }
  }

  // TinyMce Editeur pour la description
  handleEditor = e => {
    console.log("tiny", e);
    console.log("miss", e.target.getContent());
    this.setState(previousState => ({
      mission: {
        ...previousState.mission,
        description: e.target.getContent()
      }
    }));
  };

  handlerOnChange = event => {
    const { name, value } = event.target;
    this.setState(previousState => ({
      mission: {
        ...previousState.mission,
        [name]: value
      }
    }));
  };

  handlerOnChangeLevelStudy = event => {
    const { value } = event.target;
    this.setState(previousState => ({
      mission: {
        ...previousState.mission,
        LevelStudyId: value
      }
    }));
  };

  // handlerOnSubmit = event => {
  //   event.preventDefault();
  saveMission = () => {
    const { mission, isEditMode } = this.state;
    const postFormMission = {
      titleMission: mission.titleMission,
      dateStart: mission.dateStart,
      dateEnd: mission.dateEnd,
      description: mission.description,
      town: mission.town,
      intro: mission.intro,
      CompanyId: Number(mission.CompanyId),
      LevelStudyId: Number(mission.LevelStudyId)
    };

    const levelStudy = this.state.levelstudies.filter(
      level => level.id == postFormMission.LevelStudyId
    )[0];
    if (!isEditMode) {
      Axios.post(API_ENDPOINT_MISSION, postFormMission).then(res => {
        const { handlerCreateMission } = this.props;
        res.data = { ...res.data, LevelStudy: levelStudy };
        handlerCreateMission(res.data);
        this.closeMission();
      });
    } else {
      Axios.put(`${API_ENDPOINT_MISSION}${mission.id}`, postFormMission).then(
        res => {
          const { handlerUpdateMission } = this.props;
          res.data = { ...res.data, LevelStudy: levelStudy };
          handlerUpdateMission(res.data);
          this.closeMission();
        }
      );
    }
  };

  defaultState(isLoaded = false) {
    const idCompany = sessionStorage.getItem("token");
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
      isEditMode: false,
      idLoaded: isLoaded
    };
  }

  closeMission = () => {
    const { onClose } = this.props;
    // this.setState(this.defaultState(true));
    onClose();
  };

  cancelMission = () => {
    const { onClose } = this.props;
    const { isEditMode } = this.state;
    if (!isEditMode) this.setState(this.defaultState(true));
    onClose();
  };

  render() {
    const { mission, isEditMode, idLoaded, levelstudies } = this.state;
    const { onClose, ...other } = this.props;
    return (
      <Dialog
        className="dialog"
        // onClose={onClose}
        {...other}
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle>
          {isEditMode ? "Je modifie une mission" : "Je crée une mission"}
        </DialogTitle>
        <div className="CompanyCreateOffers">
          <form className="container">
            <TextField
              placeholder="Titre de la mission de stage"
              name="titleMission"
              label="Titre de la Mission"
              value={mission.titleMission}
              onChange={this.handlerOnChange}
              required
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <div className="date">
              <div className="dateText">
                <TextField
                  placeholder="Date de début"
                  label="Date de début"
                  name="dateStart"
                  type="date"
                  value={
                    mission.dateStart !== null
                      ? ConvertDate(mission.dateStart)
                      : null
                  }
                  onChange={this.handlerOnChange}
                  required
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </div>
              <div className="dateText">
                <TextField
                  placeholder="Date de fin"
                  label="Date de fin"
                  type="date"
                  name="dateEnd"
                  value={
                    mission.dateEnd !== null
                      ? ConvertDate(mission.dateEnd)
                      : null
                  }
                  onChange={this.handlerOnChange}
                  required
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
              </div>
            </div>

            <TextField
              placeholder="Ville"
              name="town"
              label="Ville"
              value={mission.town}
              onChange={this.handlerOnChange}
              required
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              placeholder="Introduction"
              name="intro"
              label="Introduction"
              value={mission.intro}
              onChange={this.handlerOnChange}
              required
              fullWidth
              // multiline
              // rows="2"
              // rowsMax="2"
              margin="normal"
              variant="outlined"
            />

            <Tinymce
              mission={this.state.mission.description}
              handle={this.handleEditor}
            />

            {/* <TextField
              placeholder="Description"
              name="description"
              label="Description"
              value={mission.description}
              onChange={this.handlerOnChange}
              required
              fullWidth
              multiline
              rows="5"
              // rowsMax="10"
              margin="normal"
              variant="outlined"
            /> */}
            <Select
              name="LevelStudyId"
              required
              value={mission.LevelStudyId}
              onChange={this.handlerOnChangeLevelStudy}
            >
              {idLoaded
                ? levelstudies.map(element => (
                    <MenuItem key={element.id} value={element.id}>
                      {element.label}
                    </MenuItem>
                  ))
                : "loading..."}
            </Select>
          </form>
        </div>
        <DialogActions>
          <Button onClick={this.cancelMission} color="primary">
            Annuler
          </Button>
          <Button onClick={this.saveMission} color="primary" autoFocus>
            {isEditMode ? "Modifier" : "Créer"}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
};

export default CompanyCreateOffers;
