import React /*,{useState} */from "react"
import Tabs from "./Tabs/Tabs"
import Create from "./Create/Create"
import EmployeeInfo from "./EmployeeInfo/EmployeeInfo"
import ContactUs from "./ContactUs/ContactUs"
import Option from "./Option/Option"
import Validating from "./Validating/Validating"

const Title = () => {

/*import Button from "./Button/Button" */
return( 
    <div>
        {/*heading of the form*/}
        <h1>Form Buddy</h1>
        <h3>by Java Buddies</h3>
        {/* Tab button and the description of what they will do */}
        <Tabs>
        <div label = "Create">
                <h2>Create</h2>
                <p>
                    Allows user to custumize forms.
                </p>
                
               <Option></Option>
               <Validating></Validating>
               
                   <Create></Create>
                   </div>
                   
                    <div label = "Edit">
                <h2>
                Edit Forms 
                </h2>
                <p>
                    Where the client would need to type in the unique id of the form, 
                    and then be asked the password, in order to make changes
                </p>
                <button 
                type="edit" value='edit' 
                >Edit</button>
            </div> 

            <div label = "Submit">
                <h2>Submitted form</h2>
                <p>
                    View the complete form that user wants to use.
                </p>
                <button type ="submit" className = "submit">submit</button>
            </div> 

            <div label = "Complete">
                <h2>Fill Out Forms</h2>
                <p>
                   Displays the results of the recent forms created.
                </p>
                
                </div>

    <div label = "Contact Us">
                <h2>Contact Us</h2>
                <ContactUs>
                </ContactUs>
              
    </div>

    <div label = "Employee Info">
                <h2>Employee Information</h2>
                <EmployeeInfo>
                </EmployeeInfo>
              
    </div> 
 </Tabs>
        
  </div>
);
}

Title.getInitalProps = ({ query }) =>{
    return{query};
}

export default Title;

