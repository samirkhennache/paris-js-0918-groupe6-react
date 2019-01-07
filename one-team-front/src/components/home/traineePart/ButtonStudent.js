import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import "./ButtonStudent.css";

class ButtonStudent extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Button variant="contained" className="ButtonStudent">
          S'inscrire
        </Button>
      </MuiThemeProvider>
    );
  }
}

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      contained: { backgroundColor: "#ff8900" }
    }
  }
});

export default ButtonStudent;
