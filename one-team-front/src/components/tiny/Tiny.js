import React from "react";
import { Editor } from "@tinymce/tinymce-react";

class Tinymce extends React.Component {
  componentDidMount() {
    console.log("handle", this.props.handleEditor);
  }

  render() {
    return (
      <div>
        <Editor
          const
          apikey="x5t31wqjeaxfw9sd5xo0obj1e9j0vde0p4wehermyrz3agp6"
          initialValue={this.props.mission}
          init={{
            selector: "textarea",
            height: 300,
            width: "100%",
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor textcolor searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount"
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
            content_css: [
              "//fonts.googleapis.com/css?family=Lato:300,300i,400,400i",
              "//www.tiny.cloud/css/codepen.min.css"
            ]
          }}
          onChange={this.props.handle}
        />
      </div>
    );
  }
}

export default Tinymce;
