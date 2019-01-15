import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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
        // console.log(response);
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(error.response);
      });
  }

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
        description: e.target.description.value,
        dateStart: e.target.dateStart.value,
        dateEnd: e.target.dateEnd.value
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
    const id = sessionStorage.getItem("token");
    if (this.state.selectedFile !== null) {
      console.log("uploadphoto", this.state.selectedFile);
      const formData = new FormData();
      formData.append(
        "avatar",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
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
    console.log("okkkkk");
  };

  // date() {
  //   const date = new Date();
  //   let day = date.getDate();
  //   if (day < 10) {
  //     day = "0" + day;
  //   }
  //   let month = date.getMonth() + 1;
  //   if (month < 10) {
  //     month = "0" + month;
  //   }
  //   const year = date.getFullYear();
  //   return `${year}-${month}-${day}`;
  // }

  date(data) {
    const date = new Date(data);
    let day = date.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  render() {
    const { data } = this.state;
    if (this.state.data == null) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <h1>Complète ton profile</h1>
        <div className="createForm">
          <form onSubmit={this.onSubmit}>
            <div>
              <label for="file-input">
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
                onChange={this.fileChangedHandler}
                hidden
              />
            </div>
            <TextField
              type="text"
              className="textField"
              name="firstname"
              placeholder="Prénom"
              defaultValue={data.firstname}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              type="text"
              className="textField"
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
              className="textField"
              name="email"
              placeholder="Email"
              defaultValue={data.email}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              type="text"
              className="textField"
              name="phone"
              placeholder="Phone"
              defaultValue={data.phone}
              margin="normal"
              variant="outlined"
            />
            <TextField
              type="text"
              className="textField"
              name="address"
              placeholder="Adress"
              defaultValue={data.address}
              margin="normal"
              variant="outlined"
            />
            <TextField
              type="text"
              className="textField"
              name="town"
              placeholder="Ville"
              defaultValue={data.town}
              margin="normal"
              variant="outlined"
            />
            <TextField
              type="text"
              className="textField"
              name="postalCode"
              placeholder="Postal Code"
              defaultValue={data.postalCode}
              margin="normal"
              variant="outlined"
            />
            <TextField
              type="text"
              multiline
              className="textField"
              name="description"
              placeholder="Descriptions"
              defaultValue={data.description}
              margin="normal"
              variant="outlined"
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
          pictures={`http://localhost:3001/${data.pictures}`}
          size={FULL_RESTRICTED}
        />
      </div>
    );
  }
}

export default TraineeProfile;
