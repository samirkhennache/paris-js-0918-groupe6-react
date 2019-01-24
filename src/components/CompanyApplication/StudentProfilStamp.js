import React from "react";

const StudentProfilStamp = ({ trainee }) => {
  return (
    <div>
      {trainee.map(name => (
        <div>
          <li>
            <img src={name.Trainee.pictures} alt="" />
          </li>
          <li>{name.Trainee.firstname}</li>
          <li>{name.Trainee.email}</li>
          <li>
            {name.Trainee.address} - {name.Trainee.postalCode}{" "}
            {name.Trainee.town}
          </li>
        </div>
      ))}
      {/* <li>{name.trainee.lastname}</li> */}
    </div>
  );
};

export default StudentProfilStamp;
