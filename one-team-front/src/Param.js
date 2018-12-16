import React, { Component } from "react";

class Param extends Component {
  render() {
    console.log(this.props.match.url)
    const { props } = this;
    return (
      <div>
        <h1>{props.match.params.id}</h1>
        <p>{props.match.url}</p>
      </div>
    );
  }
}

export default Param;
