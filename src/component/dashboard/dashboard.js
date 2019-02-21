import React, { Component } from "react";
import FormField from "../Widgets/formFields/formFields";
import styles from "./dashboard.module.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

class Dashboard extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    postError: "",
    loading: false,
    formdata: {
      author: {
        element: "input",
        value: "",
        config: {
          name: "author_input",
          type: "email",
          placeholder: "Enter your name"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      title: {
        element: "input",
        value: "",
        config: {
          name: "title_input",
          type: "email",
          placeholder: "Enter the title"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };

  updateForm = element => {
    const newFormdata = {
      ...this.state.formdata
    };
    const newElement = {
      ...newFormdata[element.id]
    };
    newElement.value = element.event.target.value;
    if (element.blur) {
      let validData = this.validate(newElement);
      newElement.valid = validData[0];
      newElement.validationMessage = validData[1];
    }
    newElement.touched = element.blur;
    newFormdata[element.id] = newElement;

    this.setState({
      formdata: newFormdata
    });
  };

  validate = element => {
    let error = [true, ""];

    if (element.validation.required) {
      const valid = element.value.trim() !== "";
      const message = `${!valid ? "This field is required" : ""}`;
      error = !valid ? [valid, message] : error;
    }
    return error;
  };

  submitForm = event => {
    event.preventDefault();
    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
    }
    for (let key in this.state.formdata) {
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }
    if (formIsValid) {
      console.log("submit post");
    } else {
      this.setState({
        postError: "something went wrong"
      });
    }
  };

  submitButton = () =>
    this.state.loading ? (
      "loading..."
    ) : (
      <div>
        <button type="submit"> Add Post </button>
      </div>
    );
  showError = () =>
    this.state.postError !== "" ? (
      <div className={styles.error}>{this.state.registerError}</div>
    ) : (
      ""
    );

  onEditorStateChange = editorState => {
    let contentState = editorState.getCurrentContent();
    let rawState = convertToRaw(contentState);
    let html = stateToHTML(contentState);
    console.log(html);
    this.setState({
      editorState
    });
  };

  render() {
    return (
      <div className={styles.postContainer}>
        <form onSubmit={this.submitForm}>
          <h2>Add Post</h2>
          <FormField
            id={"author"}
            formdata={this.state.formdata.author}
            change={element => this.updateForm(element)}
          />
          <FormField
            id={"title"}
            formdata={this.state.formdata.title}
            change={element => this.updateForm(element)}
          />
          <Editor
            editorState={this.state.editorState}
            wrapperClassName="myEditor-wrapper"
            editorClassName="myEditor-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
          {this.submitButton()}
          {this.showError()}
        </form>
      </div>
    );
  }
}

export default Dashboard;
