import React from "react"
import Tabs from "./Tabs/Tabs"

import Form from "./Form/Form"
import EmployeeInfo from "./EmployeeInfo/EmployeeInfo"
const Title = () => {
{/*import Button from "./Button/Button" */}
return( 
    <div>
        {/*heading of the form*/}
        <h1>Form Creation</h1>
        <p>Build a form created by Java Buddies</p>
        {/* Tab button and the description of what they will do */}
        <Tabs>
            <div label = "View">
                <h2>View</h2>
                <p>
                    View the complete form that user wants to use.
                </p>

            </div> 
            <div label = "Test">
                <h2>Testing</h2>
                <p>
                    Test forms by filling it out. It is than sent to Result to view.
                </p>
               
            </div> 
            <div label = "Result">
                <h2>Result</h2>
                <p>
                   Displays the results of the recent forms created.
                </p>
                </div>
            <div label = "Create">
                <h2>Create</h2>
                <p>
                    An easy to use platform that allows
                    user to custumize forms.
                </p>
                <select>
                       <option value="choose option">choose option ...</option>
                       <option value="form">form</option>
                       <option value="mutiple choice">mutliple choice</option>
                       <option value ="contact us">Contact Us</option>
                       <option value="none">none</option>
                       
                   </select>
    </div> 
    <div label = "Contact Us">
                <h2>Contact Us</h2>
                <Form>
                </Form>
              
    </div> 
    <div label = "Employee Info">
                <h2>Employee Information</h2>
                <EmployeeInfo>
                </EmployeeInfo>
              
    </div> 
         </Tabs>
        
  </div>
)
}

Title.getInitalProps= ({ query }) =>{
    return{query};
}

export default Title;

