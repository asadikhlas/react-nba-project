import React, {Component} from 'react'
import FormField from '../Widgets/formFields/formFields';
import styles from './dashboard.module.css';
 class Dashboard extends Component{
     state={
        postError: "",
        loading: false,
        formdata:{
            author: {
                element: "input",
                value: "",
                config: {
                  name: "author_input",
                  type: "email",
                  placeholder: "Enter your name"
                },
                validation: {
                  required: true,
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
                  required: true,
                },
                valid: false,
                touched: false,
                validationMessage: ""
              },
        }
     }

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


     submitForm = () => {
        event.preventDefault();
     }
     submitButton = () =>
     this.state.loading ? (
       "loading..."
     ) : (
       <div>
         <button type="submit">
           {" "}
           Add Post{" "}
         </button>
       </div>
     );

     render(){
         return(
             <div className={styles.postContainer}>
                 <form onSubmit={this.submitForm}>
                 <h2>Add Post</h2>
                 <FormField
            id={"author"}
            formdata={this.state.formdata.author}
            change={element => this.updateForm(element)}
          />
          {this.submitButton()}
                 </form>
             </div>
         )
     }
 }

 export default Dashboard;