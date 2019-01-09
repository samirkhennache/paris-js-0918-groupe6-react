import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
// import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import StudentView from "./StudentView";
import StudentProfilView from "./StudentProfilView";

const styles = theme => ({
  row: {
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "center",
    // border: "1px solid black",
    width: "400px"
  },
  studentApp: {
    border: "1px solid green"
  }
});

class StudentApplication extends Component {
  state = {
    open: false
  };

  clickStudentSmall = () => {
    console.log("open");
    this.setState({ open: true });
  };

  clickClose = () => {
    this.setState({ open: false });
  };

  render() {
    console.log("render");
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.row}>
        <div className={classes.studentApp}>
          <StudentView {...this.props} open={open} />
          <Button
            onClick={this.clickStudentSmall}
            variant="contained"
            color="primary"
          >
            Ajouter
          </Button>
          <Button variant="contained" color="secondary">
            Refuser
          </Button>
          <StudentProfilView
            {...this.props}
            open={open}
            close={this.clickClose}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(StudentApplication);

// ******************** COMPOSANT CLASS MATERIAL UI
// const styles = theme => ({
//   row: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center"
//   },
//   root: {
//     ...theme.mixins.gutters(),
//     padding: "0",
//     // paddingTop: theme.spacing.unit * 2,
//     // paddingBottom: theme.spacing.unit * 2,
//     // border: "1px solid green",
//     margin: "10px",
//     width: "250px",
//     height: "310px"
//   },
//   list: {
//     listStyle: "none",
//     padding: "0",
//     textAlign: "center"
//   },
//   image: {
//     borderRadius: "100%",
//     height: "150px",
//     width: "150px",
//     padding: "10px 0"
//   },
//   adress: {
//     margin: "10px"
//   }
// });

// function compareMissions(a, b) {
//   return a - b;
// }
// class StudentApplication extends Component {
//   state = {};

//   // addStudentTeam = id => {
//   //   console.log("addStudent", trainee.data);
//   //   trainee.data.map(e =>
//   //     e.dataApplications.map(element => console.log(element.Trainee.id))
//   //   );
//   // };

//   render() {
//     const { classes, trainee } = this.props;
//     return (
//       <div>
//         {console.log("trainee", trainee.data)}
//         {trainee.data.sort(compareMissions).map((
//           e //console.log("e", e.dataApplications)
//         ) => (
//           <p key={e.mission_id}>
//             <Typography variant="h2" component="h3">
//               {e.titleMission}
//             </Typography>
//             <div className={classes.row}>
//               {e.dataApplications.map(name => (
//                 <Paper className={classes.root} elevation={2}>
//                   <ul className={classes.list}>
//                     {/* <li>{name.trainee.lastname}</li> */}
//                     <li>
//                       <img
//                         className={classes.image}
//                         src={name.Trainee.pictures}
//                         alt=""
//                       />
//                     </li>
//                     <li>{name.Trainee.firstname}</li>
//                     <li>{name.Trainee.email}</li>
//                     <li className={classes.adress}>
//                       {" "}
//                       {name.Trainee.address} - {name.Trainee.postalCode}{" "}
//                       {name.Trainee.town}
//                     </li>
//                     <Button
//                       // onClick={() => addStudentTeam(name.Trainee.id)}
//                       variant="contained"
//                       color="primary"
//                     >
//                       Ajouter
//                     </Button>{" "}
//                     -{" "}
//                     <Button variant="contained" color="secondary">
//                       Refuser
//                     </Button>
//                   </ul>
//                 </Paper>
//               ))}
//             </div>
//           </p>
//         ))}
//         <StudentProfilStamp />
//         <Button
//           // onClick={() => addStudentTeam(name.Trainee.id)}
//           variant="contained"
//           color="primary"
//         >
//           Ajouter
//         </Button>{" "}
//         -{" "}
//         <Button variant="contained" color="secondary">
//           Refuser
//         </Button>
//       </div>
//     );
//   }
// }

// export default withStyles(styles)(StudentApplication);

// ******************* COMPOSANT STATELESS
// const addStudentTeam = id => {
//   console.log("addStudent", props.trainee.data);
//   const { trainee } = props;
//   trainee.data.map(e =>
//     e.dataApplications.map(element => console.log(element.Trainee.id))
//   );
// };

// const CompanyApplicationItem = props => {
//   const { classes, trainee } = props;

//   const addStudentTeam = id => {
//     console.log("addStudent", trainee.data);
//     trainee.data.map(e =>
//       e.dataApplications.map(element => console.log(element.Trainee.id))
//     );
//   };
//   return (
//     <div>
//       {console.log("trainee", trainee.data)}
//       {trainee.data.sort(compareMissions).map((
//         e //console.log("e", e.dataApplications)
//       ) => (
//         <p key={e.mission_id}>
//           <Typography variant="h2" component="h3">
//             {e.titleMission}
//           </Typography>
//           <div className={classes.row}>
//             {e.dataApplications.map(name => (
//               <Paper className={classes.root} elevation={2}>
//                 <ul className={classes.list}>
//                   {/* <li>{name.trainee.lastname}</li> */}
//                   <li>
//                     <img
//                       className={classes.image}
//                       src={name.Trainee.pictures}
//                       alt=""
//                     />
//                   </li>
//                   <li>{name.Trainee.firstname}</li>
//                   <li>{name.Trainee.email}</li>
//                   <li className={classes.adress}>
//                     {" "}
//                     {name.Trainee.address} - {name.Trainee.postalCode}{" "}
//                     {name.Trainee.town}
//                   </li>
//                   <Button
//                     onClick={() => addStudentTeam(name.Trainee.id)}
//                     variant="contained"
//                     color="primary"
//                   >
//                     Ajouter
//                   </Button>{" "}
//                   -{" "}
//                   <Button variant="contained" color="secondary">
//                     Refuser
//                   </Button>
//                 </ul>
//               </Paper>
//             ))}
//           </div>
//         </p>
//       ))}
//     </div>
//   );
// };

// CompanyApplicationItem.prototype = {
//   classes: PropTypes.object.isRequired
// };
//export default withStyles(styles)(CompanyApplicationItem);
