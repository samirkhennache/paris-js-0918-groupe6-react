import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import Axios from "axios";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "calc(100px + 12em)",
    margin: "auto"
    // border: "1px solid black"
  },
  margin: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    width: "calc(107px + 12em)",
    margin: "15px auto 5px auto"
  }
});

class Connexion extends Component {
  state = {
    showPassword: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const postDataLogin = {
      email,
      password
    };
    console.log(postDataLogin);

    Axios.post("http://localhost:3001/company/login", postDataLogin).then(
      data => console.log(data)
    );
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;
    const { showPassword } = this.state;
    return (
      <div>
        <form
          className={classes.container}
          method="post"
          onSubmit={this.handleOnSubmit}
        >
          <TextField
            type="email"
            className={classes.textField}
            name="email"
            label="Email"
            onChange={this.onChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            name="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            margin="normal"
            onChange={this.onChange}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Button variant="contained" className={classes.button} type="submit">
            Se connecter
          </Button>
        </form>
      </div>
    );
  }
}
Connexion.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Connexion);
