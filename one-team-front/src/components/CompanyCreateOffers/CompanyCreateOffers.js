import React from "react";

const CompanyCreateOffers = class extends React.Component {
  render() {
    return (
      <div>
        <p>Je crée une mission</p>
        <form>
          <input placeholder="Titre de la mission de stage" />
          <input placeholder="Date de début" />
          <input placeholder="Date de fin" />
          <text placeholder="Description" />
          <button type="button">Valider</button>
        </form>
        <p>cette offre sera publiée après validation</p>
      </div>
    );
  }
};

export default CompanyCreateOffers;
