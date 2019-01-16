import React, { Component } from "react";
// import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import StudentView from "./StudentView";
import StudentProfilView from "./StudentProfilView";
import { SMALL } from "../CompanyApplication/studentConstant";

import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { loadavg } from "os";

class StudentApplication extends Component {
  state = {
    open: false,
    openMessageSelect: false,
    openMessageRefuse: false,
    title: ``,
    content: ``,
    button: ``
  };

  clickStudentSmall = () => {
    console.log("open");
    this.setState({ open: true });
  };

  clickClose = () => {
    this.setState({ open: false });
  };

  selectStudent = mode => {
    const { missionId, traineeId, firstname } = this.props;
    axios
      .put(`http://localhost:3001/application`, {
        missionId,
        traineeId,
        mode
      })
      .then(response => {
        console.log(response);
        this.setState({
          openMessageSelect: true,
          title: `Trainee added`,
          content: `L'étudiant ${firstname} a bien été pré-sélectionné pour la mission`,
          button: `Fermer`
        });
      })
      .catch(error => {
        console.log(error.response);
        if (error.response.status === 404) {
          this.setState({
            openMessageSelect: true,
            title: `Trainee already preselected`,
            content: `L'étudiant(e) ${firstname} a déjà été pré-sélectionné`,
            button: `Fermer`
          });
        } else {
          this.setState({
            openMessageSelect: true,
            title: `Oups une erreur s'est produite`,
            content: `Veuillez recommencer s'il-vous-plait`,
            button: `Fermer`
          });
        }
      });
  };

  refuseStudent = mode => {
    const { missionId, traineeId, firstname } = this.props;
    console.log("onclick", missionId, traineeId, mode);
    axios
      .put(`http://localhost:3001/application`, {
        missionId,
        traineeId,
        mode
      })
      .then(response => {
        console.log(response);
        this.setState({
          openMessageRefuse: true,
          title: `Trainee deleted`,
          content: `L'étudiant(e) ${firstname} a bien été refusé pour cette mission`,
          button: `Fermer`
        });
      })
      .catch(error => {
        console.log(error.response);
        if (error.response.status === 404) {
          this.setState({
            openMessageSelect: true,
            title: `Trainee already preselected`,
            content: `L'étudiant(e) ${firstname} a déjà été pré-sélectionné`,
            button: `Fermer`
          });
        } else {
          this.setState({
            openMessageSelect: true,
            title: `Oups une erreur s'est produite`,
            content: `Veuillez recommencer s'il-vous-plait`,
            button: `Fermer`
          });
        }
      });
  };

  handleClose = () => {
    const { handleCloseRefresh, traineeId, missionId } = this.props;
    console.log(traineeId);
    handleCloseRefresh(traineeId, missionId);
    this.setState({ openMessageSelect: false, openMessageRefuse: false });
  };

  render() {
    console.log(this.props.descriptionTrainee);
    const {
      open,
      openMessageSelect,
      openMessageRefuse,
      title,
      button,
      content
    } = this.state;
    const { mode, modeSelect, modeRefuse, isFull } = this.props;

    switch (mode) {
      case "APPLICATION": {
        return (
          <div>
            <div>
              <div onClick={() => this.clickStudentSmall()}>
                <StudentView {...this.props} size={SMALL} open={open} />
              </div>
              <Button
                onClick={() => this.selectStudent(modeSelect)}

                variant="contained"
                color="primary"
              >
                Ajouter
              </Button>
              <Button
                onClick={() => this.refuseStudent(modeRefuse)}
                variant="contained"
                color="secondary"
              >
                Refuser
              </Button>
              <StudentProfilView
                {...this.props}
                open={open}
                close={this.clickClose}
              />
            </div>
            {/* **************** DIALOG AJOUT OK ************************** */}
            <Dialog
              open={openMessageSelect}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {content}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  {button}
                </Button>
              </DialogActions>
            </Dialog>
            {/* **************** DIALOG SUPPRESSION OK ************************** */}
            <Dialog
              open={openMessageRefuse}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {content}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  {button}
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      }
      case "SELECT": {
        return (
          <div>
            <div>
              <div onClick={() => this.clickStudentSmall()}>
                <StudentView {...this.props} size={SMALL} />
              </div>
              {isFull === true ? (
                <Button disabled variant="contained" color="secondary">
                  Refuser
                </Button>
              ) : (
                <Button
                  onClick={() => this.refuseStudent(modeRefuse)}
                  variant="contained"
                  color="secondary"
                >
                  Refuser
                </Button>
              )}
              <StudentProfilView
                {...this.props}
                open={open}
                close={this.clickClose}
              />
            </div>
            {/* **************** DIALOG SUPPRESSION OK ************************** */}
            <Dialog
              open={openMessageRefuse}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {content}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  {button}
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      }
      case "ADMIN": {
        return (
          <div>
            <div>
              <div onClick={() => this.clickStudentSmall()}>
                <StudentView {...this.props} size={SMALL} />
              </div>
              <StudentProfilView
                {...this.props}
                open={open}
                close={this.clickClose}
              />
            </div>
          </div>
        );
      }
      default:
        break;
    }
  }
}

export default StudentApplication;

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
//     padding: "0",Voir mes missions
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

// ******************* COMPOSANT STATELESS DE BASE PAR MOHAMMED

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
