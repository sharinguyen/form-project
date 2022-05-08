import React, { useState } from "react";
//import ReactDOM from "react-dom";
import "./Validating.css";

function Validating() {
  // React States
  //stores objects with error message and the name of the field.
  const [errorMessages, setErrorMessages] = useState({});
  //boolean  to determine if form has sucessfully submitted or not.
  const [isSubmitted, setIsSubmitted] = useState(false);
  //const [formId,setFormId] = useState({});

  // Valid User form info 
  //how to store formId and password
  const database = [
    {
      formId: "form1",
      password: "pass1"
    },
    {
      formId: "form2",
      password: "pass2"
    },
    {
        formId: "",
        password: ""
    }
  ];

//Error message when it occurs
  const errors = {
    fname: "invalid form id",
    pass: "invalid password"
  };

  //the function accesses of the event object of the form element
  const handleSubmit = (event) => {
    //Prevent page from reloading
    event.preventDefault();

    var { fname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.formId === fname.value);

    // Compare user info 
    if (userData) {
      if (userData.password !== pass.value) {
        // if password is invalid
        setErrorMessages({name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      //form ID not found sends error of invalid form id
      setErrorMessages({name: "fname", message: errors.fname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    

  // JSX code for login form
  const renderForm = (
    <div className="form">

        {/*Form Id box*/}
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Form Id:</label>
          <input 
          type="text" 
          name="fname"
          required 
          />
          {renderErrorMessage("fname")}
        </div>

        {/* password box */}
        <div className="input-container">
          <label>Password: </label>
          <input 
          type="password" 
          name="pass" 
          required 
          />
          {renderErrorMessage("pass")}
        </div>
          {/*Submit button */}
          <div className="button-container">
          <input type ="submit"/>
        </div>
       
      </form>
    </div>
  );

  return (
    <div className="Validating">
      
          {/* Once user inputs form id and password the user would be logged in */}
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
  
  );
  
}

export default Validating;