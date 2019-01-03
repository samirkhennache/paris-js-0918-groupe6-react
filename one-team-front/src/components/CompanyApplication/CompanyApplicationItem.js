import React from "react";

const CompanyApplicationItem = ({ trainee }) => (
  <div>
    {console.log(trainee)}
    {trainee.map(e => (
      <p key={e.MissionId}>
        {e.Mission.Trainees.map(name => (
          <ul>
            <li>{name.lastname}</li>
            <li>{name.firstname}</li>
            <li>{name.email}</li>
            <li>
              <img src={name.pictures} />
            </li>
            <li>{name.town} </li>
          </ul>
        ))}
      </p>
    ))}
  </div>
);

export default CompanyApplicationItem;
