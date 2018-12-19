import React, { Component } from "react";
import "./Modal.css";
import { AwesomeButton } from "react-awesome-button";

const backdropStyle = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.3)",
  padding: 50,
  zIndex: 999
};

const modalStyle = {
  backgroundColor: "#fff",
  borderRadius: 5,
  maxWidth: 1200,
  minHeight: 500,
  margin: "0 auto",
  padding: 30,
  position: "relative",
  zIndex: 999
};

const footerStyle = {
  position: "relative",
  bottom: 20
};

export default class Modal extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div style={backdropStyle}>
        <div style={modalStyle}>
          {this.props.children}
          <div style={footerStyle}>
            <AwesomeButton
              action={e => {
                this.onClose(e);
              }}
              className="close"
            >
              Fermer
            </AwesomeButton>
          </div>
        </div>
      </div>
    );
  }
}
