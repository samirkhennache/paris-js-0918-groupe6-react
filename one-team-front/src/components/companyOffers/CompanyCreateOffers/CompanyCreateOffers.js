import React from "react";
import "./CompanyCreateOffers.css";
import Axios from "axios";
import { TextField, Select, MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { MakeCompletedUrl, ConvertDate } from "../../../tools";
import logoCompany from "../../../img/three-buildings.png";
// import ConvertDate from "../../../tools";
import Tinymce from "../../tiny/Tiny";
import "../../pages.css";

const API_ENDPOINT_MISSION = MakeCompletedUrl("mission/");

const styles = theme => ({
  centerLogo: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      margin: "35px"
    }
  },
  marginContainer: {
    marginBottom: "20px"
  },
  centerButton: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    }
  },
  selectControl: {
    width: "100%"
  }
});

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
    const { onClose, classes, fullScreen, ...other } = this.props;
    return (
      <div className="CompanyCreateOffers">
        <Dialog
          className="dialog-create-offres"
          {...other}
          fullWidth
          maxWidth="lg"
          fullScreen={fullScreen}
        >
          {/* <DialogTitle>
            {isEditMode ? "Je modifie une mission" : "Je crée une mission"}
          </DialogTitle> */}
          <div className="createOffers">
            <form className="form-create-offers">
              <Grid container alignItems="center">
                <Grid
                  item
                  container
                  className={classes.centerLogo}
                  xs={12}
                  lg={2}
                  md={2}
                >
                  <div className="logo-company">
                    <img
                      className="logo-img"
                      src={logoCompany}
                      alt="logo company"
                    />
                  </div>
                </Grid>

                <Grid
                  item
                  container
                  xs={12}
                  lg={10}
                  md={10}
                  className={classes.marginContainer}
                  justify="flex-end"
                >
                  <TextField
                    placeholder="Titre de la mission de stage"
                    name="titleMission"
                    label="Titre de la Mission"
                    value={mission.titleMission}
                    onChange={this.handlerOnChange}
                    required
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  container
                  className={classes.marginContainer}
                  justify="center"
                  spacing={16}
                >
                  <Grid item container xs={6} md={3} justify="center">
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
                      variant="outlined"
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={6} md={3} justify="center">
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
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    container
                    xs={6}
                    md={3}
                    alignItems="center"
                    justify="center"
                  >
                    <TextField
                      placeholder="Ville"
                      name="town"
                      label="Ville"
                      value={mission.town}
                      onChange={this.handlerOnChange}
                      required
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item container xs={6} md={3}>
                    <Select
                      name="LevelStudyId"
                      className={classes.selectControl}
                      value={
                        mission.LevelStudyId // className="selct-level" // required
                      }
                      onChange={this.handlerOnChangeLevelStudy}
                      input={
                        <OutlinedInput
                          name="LevelStudyId"
                          id="outlined-age-simple"
                        />
                      }
                    >
                      {idLoaded
                        ? levelstudies.map(element => (
                            <MenuItem key={element.id} value={element.id}>
                              {element.label}
                            </MenuItem>
                          ))
                        : "loading..."}
                    </Select>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  className={classes.marginContainer}
                  justify="center"
                >
                  <TextField
                    placeholder="Introduction"
                    name="intro"
                    label="Introduction"
                    value={mission.intro}
                    onChange={this.handlerOnChange}
                    required
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} justify="center">
                  <Tinymce
                    mission={this.state.mission.description}
                    handle={this.handleEditor}
                  />
                </Grid>
              </Grid>
            </form>
          </div>
          <DialogActions className={classes.centerButton}>
            <Button
              onClick={this.closeMission}
              variant="contained"
              size="large"
            >
              Annuler
            </Button>
            <div className="btn">
              <Button
                className="classic_button_orange"
                onClick={this.saveMission}
                variant="contained"
                color="primary"
                size="large"
              >
                {isEditMode ? "Modifier" : "Créer"}
              </Button>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
};

export default withStyles(styles)(withMobileDialog()(CompanyCreateOffers));
