import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Select from "@material-ui/core/Select";
import StudentView from "../CompanyApplication/StudentView";
import { FULL_RESTRICTED } from "../CompanyApplication/studentConstant";
import "./traineeProfile.css";

class TraineeProfile extends Component {
  state = {
    selectedFile: null
  };

  componentDidMount() {
    const id = sessionStorage.getItem("token");
    axios
      .get(`http://localhost:3001/trainee/profile/${id}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  handleChange = event => {
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [event.target.name]: event.target.value
      }
    }));
  };

  onSubmit = e => {
    // e.preventDefault();
    // const { id } = this.state;
    const id = sessionStorage.getItem("token");
    axios
      .put("http://localhost:3001/trainee/profile", {
        id,
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        phone: e.target.phone.value,
        address: e.target.address.value,
        town: e.target.town.value,
        postalCode: e.target.postalCode.value,
        school: e.target.school.value,
        titre: e.target.titre.value,
        description: e.target.description.value,
        dateStart: e.target.dateStart.value,
        dateEnd: e.target.dateEnd.value,
        LevelStudyId: e.target.LevelStudyId.value
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
    this.uploadPhoto();
  };

  uploadPhoto = () => {
    // e.preventDefault();
    const selectedFile = this.state;
    const id = sessionStorage.getItem("token");
    if (selectedFile !== null) {
      console.log("uploadphoto", selectedFile);
      const formData = new FormData();
      formData.append("avatar", selectedFile, selectedFile.name);
      axios.post(`http://localhost:3001/trainee/uploadphoto/${id}`, formData);
    }
  };

  fileChangedHandler = event => {
    const fr = new FileReader();

    fr.onload = a => {
      this.setState({ image: a.currentTarget.result });
    };
    fr.readAsDataURL(document.querySelector('input[type="file"]').files[0]);

    this.setState({ selectedFile: event.target.files[0] });
    // console.log("okkkkk");
  };

  date = data => {
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
  };

  render() {
    const { data } = this.state;
    if (this.state.data == null) {
      return <div>Loading</div>;
    }
    console.log("Profile", this.state);
    return (
      <div>
        <h1>Complète ton profile</h1>
        <div className="createForm">
          <form onSubmit={this.onSubmit}>
            <div>
              <label htmlFor="file-input">
                {this.state.data.pictures !== null ? (
                  <div>
                    <img
                      src={
                        this.state.image ||
                        `http://localhost:3001/${this.state.data.pictures}`
                      }
                      width="100"
                      height="100"
                      alt=" Profile"
                    />
                  </div>
                ) : (
                  <img
                    src={
                      this.state.image ||
                      "http://localhost:3001/public/photoProfile/PhotoProfil.jpg"
                    }
                    width="100"
                    height="100"
                    alt=" default Profile"
                  />
                )}
              </label>
              <input
                id="file-input"
                type="file"
                accept=".jpg, .png, .jpeg,|images/*"
                onChange={this.fileChangedHandler}
                hidden
              />
            </div>
            <TextField
              type="text"
              className="profileTextField"
              name="firstname"
              placeholder="Prénom"
              defaultValue={data.firstname}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              type="text"
              className="profileTextField"
              name="lastname"
              placeholder="Nom"
              defaultValue={data.lastname}
              margin="normal"
              variant="outlined"
              required
            />

            <TextField
              disabled
              type="email"
              className="profileTextField"
              name="email"
              placeholder="Email"
              defaultValue={data.email}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              type="text"
              className="profileTextField"
              name="phone"
              placeholder="Phone"
              defaultValue={data.phone}
              margin="normal"
              variant="outlined"
            />
            <TextField
              type="text"
              className="profileTextField"
              name="address"
              placeholder="Adress"
              defaultValue={data.address}
              margin="normal"
              variant="outlined"
            />
            <TextField
              type="text"
              className="profileTextField"
              name="town"
              placeholder="Ville"
              defaultValue={data.town}
              margin="normal"
              variant="outlined"
            />
            <TextField
              type="text"
              className="profileTextField"
              name="postalCode"
              placeholder="Postal Code"
              defaultValue={data.postalCode}
              margin="normal"
              variant="outlined"
            />
            <TextField
              type="text"
              className="profileTextField"
              name="school"
              placeholder="École"
              defaultValue={data.school}
              margin="normal"
              variant="outlined"
            />

            <FormControl className="profileTextField">
              <InputLabel>Level</InputLabel>
              <Select
                value={this.state.data.LevelStudyId || ""}
                onChange={this.handleChange}
                inputProps={{
                  name: "LevelStudyId"
                }}
              >
                <MenuItem value={1}>BAC+2</MenuItem>
                <MenuItem value={2}>BAC+3</MenuItem>
                <MenuItem value={3}>BAC+4</MenuItem>
                <MenuItem value={4}>BAC+5</MenuItem>
              </Select>
            </FormControl>

            <TextField
              type="text"
              className="profileTextField"
              name="titre"
              placeholder="Intitulé de stage"
              defaultValue={data.titre}
              margin="normal"
              variant="outlined"
            />
            <TextField
              type="text"
              multiline
              className="profileTextField"
              name="description"
              placeholder="Descriptions"
              defaultValue={data.description}
              margin="normal"
              variant="outlined"
              rows="5"
            />
            <TextField
              id="date"
              name="dateStart"
              label="Debut stage"
              type="date"
              defaultValue={
                this.state.data.dateStart !== null
                  ? this.date(this.state.data.dateStart)
                  : null
              }
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="date"
              name="dateEnd"
              label="Fin stage"
              type="date"
              defaultValue={
                this.state.data.dateEnd !== null
                  ? this.date(this.state.data.dateEnd)
                  : null
              }
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              variant="outlined"
            />

            <Button
              variant="contained"
              className="buttonCreateForm"
              type="submit"
            >
              {`Enregistrer`}
            </Button>
          </form>
        </div>
        <StudentView
          firstname={data.firstname}
          address={data.address}
          postalCode={data.postalCode}
          town={data.town}
          pictures={data.pictures}
          descriptionTrainee={data.description}
          school={data.school}
          titre={data.titre}
          dateStart={data.dateStart}
          dateEnd={data.dateEnd}
          size={FULL_RESTRICTED}
          LevelStudy={data.LevelStudy ? data.LevelStudy.label : null}
        />
      </div>
    );
  }
}

export default TraineeProfile;
