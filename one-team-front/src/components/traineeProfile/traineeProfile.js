import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class traineeProfile extends Component {
  state = {
    id: 1,
    lastname: "",
    firstname: "",
    email: "",
    pictures: "",
    phone: "",
    address: "",
    town: "",
    postalCode: ""
  };
  componentDidMount() {
    axios
      .post("http://localhost:3001/trainee/profile", { id: this.state.id })
      .then(response => {
        console.log(response);
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  onSubmit = e => {
    e.preventDefault();
    const { id } = this.state;
    axios
      .put("http://localhost:3001/trainee/profile", {
        id,
        lastname: e.target.lastname.value,
        firstname: e.target.firstname.value,
        phone: e.target.phone.value,
        address: e.target.address.value,
        town: e.target.town.value,
        postalCode: e.target.postalCode.value
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  render() {
    console.log(this.state.data);
    if (this.state.data == null) {
      return <div>Loading</div>;
    } else {
      return (
        <div>
          <h1>Complète ton profile</h1>
          <img src={this.state.data.pictures} alt="profile image" />
          <div className="createForm">
            <form method="post" onSubmit={this.onSubmit}>
              <TextField
                type="text"
                className="textField"
                name="firstname"
                placeholder="Prénom"
                defaultValue={this.state.data.firstname}
                margin="normal"
                variant="outlined"
                required
              />
              <TextField
                type="text"
                className="textField"
                name="lastname"
                placeholder="Nom"
                defaultValue={this.state.data.lastname}
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
                defaultValue={this.state.data.email}
                margin="normal"
                variant="outlined"
                required
              />

              <TextField
                type="password"
                className="textField"
                name="password"
                placeholder="Mot de passe"
                margin="normal"
                variant="outlined"
              />
              <TextField
                type="text"
                className="textField"
                name="phone"
                placeholder="Phone"
                defaultValue={this.state.data.phone}
                margin="normal"
                variant="outlined"
              />
              <TextField
                type="text"
                className="textField"
                name="address"
                placeholder="Adress"
                defaultValue={this.state.data.address}
                margin="normal"
                variant="outlined"
              />
              <TextField
                type="text"
                className="textField"
                name="town"
                placeholder="Ville"
                defaultValue={this.state.data.town}
                margin="normal"
                variant="outlined"
              />
              <TextField
                type="text"
                className="textField"
                name="postalCode"
                placeholder="Postal Code"
                defaultValue={this.state.data.postalCode}
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
        </div>
      );
    }
  }
}

export default traineeProfile;
