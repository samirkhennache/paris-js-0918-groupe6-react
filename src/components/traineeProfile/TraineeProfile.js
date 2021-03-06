import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import MenuItem from "@material-ui/core/MenuItem";
import withWidth from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";

import RemoveEye from "@material-ui/icons/RemoveRedEye";
import Save from "@material-ui/icons/Save";
import StudentView from "../CompanyApplication/StudentView";
import { FULL_RESTRICTED } from "../CompanyApplication/studentConstant";
import { MakeCompletedUrl, ConvertDate } from "../../tools";
import "./traineeProfile.css";

class TraineeProfile extends Component {
  state = {
    selectedFile: null,
    openTrainee: false,
    button: "Fermer"
  };

  traineeOpenConnexion = () => {
    this.setState({
      openTrainee: true
    });
  };

  handleCloseTrainee = () => {
    this.setState({ openTrainee: false });
  };

  handleChange = event => {
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [event.target.name]: event.target.value
      }
    }));
  };

  componentDidMount() {
    const id = sessionStorage.getItem("token");
    axios
      .get(MakeCompletedUrl(`trainee/profile/${id}`))
      .then(response => {
        // console.log(response.data);
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(error.response);
      });
    axios
      .get(MakeCompletedUrl("paradata/levelstudies"))
      .then(response => {
        // console.log(response.data);
        this.setState({
          levelstudies: response.data
        });
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  onSubmit = e => {
    e.preventDefault();
    // const { id } = this.state;
    const id = sessionStorage.getItem("token");
    axios
      .put(MakeCompletedUrl("trainee/profile"), {
        id,
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        phone: e.target.phone.value,
        address: e.target.address.value,
        town: e.target.town.value,
        postalCode: e.target.postalCode.value,
        dateBirth: e.target.dateBirth.value,
        school: e.target.school.value,
        titre: e.target.titre.value,
        description: e.target.description.value,
        dateStart: e.target.dateStart.value,
        dateEnd: e.target.dateEnd.value,
        LevelStudyId: e.target.LevelStudyId.value
      })
      .then(response => {
        // console.log(response.data);
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(error.response);
      });
    this.uploadPhoto();
  };

  uploadPhoto = () => {
    // e.preventDefault();
    const id = sessionStorage.getItem("token");
    if (this.state.selectedFile !== null) {
      console.log("uploadphoto", this.state.selectedFile);
      const formData = new FormData();
      formData.append(
        "avatar",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      axios
        .post(MakeCompletedUrl(`trainee/uploadphoto/${id}`), formData)
        .then(res =>
          this.setState(prevState => ({
            data: {
              ...prevState.data,
              pictures: res.data.pictures
            }
          }))
        );
    }
  };

  fileChangedHandler = event => {
    const fr = new FileReader();

    fr.onload = a => {
      this.setState({ image: a.currentTarget.result });
    };
    fr.readAsDataURL(document.querySelector('input[type="file"]').files[0]);

    this.setState({ selectedFile: event.target.files[0] });
  };

  date(data) {
    const date = new Date(data);
    let day = date.getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  countRow(dimensions) {
    if (dimensions !== "md" && dimensions !== "xl" && dimensions !== "lg") {
      return "10";
    }
    return "30";
  }

  render() {
    const { data, openTrainee, button } = this.state;
    if (this.state.data == null || this.state.levelstudies == null) {
      return <div>Loading</div>;
    }
    const { width, fullScreen } = this.props;
    return (
      <div>
        <div className="traineeProfileTitleBackGroud">
          <div className="traineeProfileTitle">
            <h1 className="page_title">Profil</h1>
            <h2 className="page_subtitle">
              Complète ton profil avant de postuler à toute offre de stage
            </h2>
          </div>
        </div>
        <div className="general_margin trainee-profil-margin">
          <form onSubmit={this.onSubmit}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={40}
            >
              <Grid item xs={12} md={5}>
                <div>
                  <label htmlFor="file-input">
                    {this.state.data.pictures !== null ? (
                      <div>
                        <img
                          className="traineeProfileImage"
                          src={
                            this.state.image ||
                            MakeCompletedUrl(`${this.state.data.pictures}`)
                          }
                          alt=" Profile"
                        />
                      </div>
                    ) : (
                      <img
                        className="traineeProfileImage"
                        src={
                          this.state.image ||
                          MakeCompletedUrl(
                            "public/photoProfile/PhotoProfil.jpg"
                          )
                        }
                        alt=" default Profile"
                      />
                    )}
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    onChange={this.fileChangedHandler}
                    hidden
                  />
                </div>
              </Grid>
              <Grid items xs={12} md={7}>
                <Grid container spacing={8}>
                  <Grid item xs={12} md={6}>
                    <Button
                      className="classic_button_blue"
                      color="primary"
                      variant="contained"
                      onClick={this.traineeOpenConnexion}
                    >
                      Aperçu profil
                      <RemoveEye className="traineeProfileIcon" />
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      className="classic_button_orange"
                      color="secondary"
                      variant="contained"
                      type="submit"
                    >
                      Sauvegarder
                      <Save className="traineeProfileIcon" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={40}>
              <Grid item xs={12} md={5}>
                <Grid container>
                  <Grid item xs={12}>
                    <TextField
                      className="traineeProfileTextField"
                      type="text"
                      name="firstname"
                      label="Prénom"
                      defaultValue={data.firstname}
                      margin="normal"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className="traineeProfileTextField"
                      type="text"
                      name="lastname"
                      label="Nom"
                      defaultValue={data.lastname}
                      margin="normal"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className="traineeProfileTextField"
                      disabled
                      type="email"
                      name="email"
                      label="Email"
                      defaultValue={data.email}
                      margin="normal"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className="traineeProfileTextField"
                      type="text"
                      name="phone"
                      label="Téléphone"
                      defaultValue={data.phone}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className="traineeProfileTextField"
                      type="text"
                      name="address"
                      label="Adresse"
                      defaultValue={data.address}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className="traineeProfileTextField"
                      type="text"
                      name="town"
                      label="Ville"
                      defaultValue={data.town}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className="traineeProfileTextField"
                      type="text"
                      name="postalCode"
                      label="Code postal"
                      defaultValue={data.postalCode}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className="traineeProfileTextField"
                      name="dateBirth"
                      label="Date de naissance"
                      type="date"
                      defaultValue={
                        this.state.data.dateBirth !== null
                          ? ConvertDate(this.state.data.dateBirth)
                          : null
                      }
                      InputLabelProps={{ shrink: true }}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className="traineeProfileTextField"
                      type="text"
                      name="school"
                      label="École"
                      defaultValue={data.school}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className="traineeProfileTextField"
                      select
                      label="Niveau d'étude"
                      value={this.state.data.LevelStudyId || ""}
                      onChange={this.handleChange}
                      inputProps={{ name: "LevelStudyId" }}
                      margin="normal"
                      variant="outlined"
                    >
                      {this.state.levelstudies.map(e => (
                        <MenuItem key={e.id} value={e.id}>
                          {e.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={7}>
                <Grid container>
                  <Grid item xs={12}>
                    <TextField
                      className="traineeProfileTextField"
                      type="text"
                      name="titre"
                      label="Poste"
                      defaultValue={data.titre}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={16}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          className="traineeProfileTextField"
                          name="dateStart"
                          label="Début du stage"
                          type="date"
                          defaultValue={
                            this.state.data.dateStart !== null
                              ? ConvertDate(this.state.data.dateStart)
                              : null
                          }
                          InputLabelProps={{ shrink: true }}
                          margin="normal"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          className="traineeProfileTextField"
                          name="dateEnd"
                          label="Fin du stage"
                          type="date"
                          defaultValue={
                            this.state.data.dateEnd !== null
                              ? ConvertDate(this.state.data.dateEnd)
                              : null
                          }
                          InputLabelProps={{ shrink: true }}
                          margin="normal"
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className="traineeProfileTextField"
                      type="text"
                      multiline
                      name="description"
                      label="Description"
                      defaultValue={data.description}
                      margin="normal"
                      variant="outlined"
                      rows={this.countRow(width)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </div>

        <Dialog
          open={openTrainee}
          onClose={this.handleCloseTrainee}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullScreen={fullScreen}
          fullWidth
          maxWidth="md"
        >
          <DialogContent>
            <StudentView
              firstname={data.firstname}
              address={data.address}
              postalCode={data.postalCode}
              town={data.town}
              pictures={data.pictures}
              descriptionTrainee={data.description}
              LevelStudy={
                this.state.data.LevelStudyId
                  ? this.state.levelstudies[this.state.data.LevelStudyId - 1]
                      .label
                  : null
              }
              age={data.dateBirth}
              school={data.school}
              titre={data.titre}
              dateStart={data.dateStart}
              dateEnd={data.dateEnd}
              size={FULL_RESTRICTED}
            />
          </DialogContent>
          <DialogActions className="btn_dialog_trainee">
            <Button
              onClick={this.handleCloseTrainee}
              color="primary"
              className="classic_button_blue"
              size="large"
            >
              {button}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default withWidth()(withMobileDialog()(TraineeProfile));
