import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

class ButtonStudent extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Button variant="contained">S'inscrire</Button>
      </MuiThemeProvider>
    );
  }
}

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      contained: { backgroundColor: "#ff8900" },
      label: { color: "white", fontSize: "calc(15px + 1vw)" }
    }
  }
});

export default ButtonStudent;
