import React, { Component } from "react";
import axios from "axios";

class StudentCreateAccount extends Component {
  state = {
    firstname: null,
    lastname: null,
    email: null,
    password: null
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const postFormStudent = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password
    };
    console.log(postFormStudent);
    axios
      .post("http://localhost:3001/trainee", postFormStudent)
      .then(value => console.log(value));
  };
  render() {
    return (
      <div>
        <form method="post" onSubmit={this.onSubmit}>
          <div>
            <input
              type="text"
              name="firstname"
              placeholder="Prénom"
              onChange={this.onChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="lastname"
              placeholder="Nom"
              onChange={this.onChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.onChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              onChange={this.onChange}
            />
          </div>
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    );
  }
}

export default StudentCreateAccount;
