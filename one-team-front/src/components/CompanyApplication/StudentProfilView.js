import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import StudentView from "./StudentView";
import { FULL } from "./studentConstant";

class StudentProfilView extends Component {
  handleCloseFull = () => {
    const { close } = this.props;
    close();
  };

  render() {
    const { open } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="customized-dialog-title" />
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <StudentView {...this.props} size={FULL} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseFull}>fermer</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default StudentProfilView;

// class StudentProfilView extends Component {
//   state = {
//     infosTrainee: null
//   };

//   componentDidMount() {
//     const { traineeId } = this.props;
//     axios
//       .get(`http://localhost:3001/trainee/${traineeId}/profile`)
//       .then(result => {
//         this.setState({
//           infosTrainee: result.data
//         });
//       });
//   }

//   render() {
//     const { infosTrainee } = this.state;
//     console.log(infosTrainee);
//     return (
//       <div>
//         {infosTrainee &&
//           infosTrainee.map(e => (
//             <div>
//               <img src={e.pictures} alt={e.firstname} />
//               <h3>{e.firstname}</h3>
//               <h4>{e.town}</h4>
//             </div>
//           ))}
//       </div>
//     );
//   }
// }
// const mapStateToProps = state => ({
//   traineeId: state.student.id
// });

// export default connect(mapStateToProps)(StudentProfilView);
