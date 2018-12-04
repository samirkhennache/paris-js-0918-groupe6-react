import React, { Component } from "react";
import "./App.css";
// import StudentCreateAccount from "./components/StudentCreateAccount";
import CompanyOffers from "./components/CompanyOffers/CompanyOffers";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <StudentCreateAccount /> */}
        <CompanyOffers />
      </div>
    );
  }
}

export default App;
