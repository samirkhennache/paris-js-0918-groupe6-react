import React, { Component } from "react";
import CompanyCreateOffers from "./components/CompanyCreateOffers";
import "./App.css";
import StudentCreateAccount from "./components/StudentCreateAccount";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CompanyCreateOffers />
        {/* <StudentCreateAccount /> */}
      </div>
    );
  }
}

export default App;
