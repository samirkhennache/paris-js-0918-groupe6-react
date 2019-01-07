import React from "react";

const CompanyApplicationItem = ({ trainee }) => (
  <div>
    {/* {console.log("trainee", trainee)} */}
    {trainee.data.map(e => (
      <p key={e.mission_id}>
        <h2>{e.titleMission}</h2>
        {e.dataApplications.map(name => (
          <ul>
            {/* <li>{name.trainee.lastname}</li> */}
            <li>{name.Trainee.firstname}</li>
            <li>{name.Trainee.email}</li>
            <li>
              <img src={name.Trainee.pictures} alt="" />
            </li>
            <li>
              {" "}
              {name.Trainee.address} - {name.Trainee.postalCode}{" "}
              {name.Trainee.town}
            </li>
            <button>Ajouter</button> - <button>Refuser</button>
          </ul>
        ))}
      </p>
    ))}
  </div>
);

export default CompanyApplicationItem;
