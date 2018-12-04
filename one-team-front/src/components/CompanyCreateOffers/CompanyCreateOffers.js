import React from "react";
import "./CompanyCreateOffers.css";

const CompanyCreateOffers = class extends React.Component {
  state = {
    title: "",
    startDate: new Date().toLocaleDateString(),
    endDate: new Date().toLocaleDateString(),
    descritpion: "",
    town: "",
    intro: ""
  };

  handlerOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handlerOnSubmit = event => {
    event.preventDefault();
    console.log(this.state);
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
          <input type="submit" className="submit" />
        </form>
        <p>cette offre sera publiée après validation</p>
      </div>
    );
  }
};

export default CompanyCreateOffers;
