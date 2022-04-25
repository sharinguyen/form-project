import { useState } from "react";
//import styles from "./form.css";
const EmployeeInfo = () => {
    const [employeeId,setEmployeeId] = useState('');
    const [birthDate,setBirthDate] = useState('');
    const [first,setFirst] = useState('');
    const [last,setLast] = useState('');
    const [phone,setPhone] = useState('');
    const [mail,setMail] = useState('');
   
    
    return(
        //uses form css to align the labels vertically
        <div className = "ContactUs">
            {/*form creation process*/}
            <form >
                 <label>Employee ID: </label> 
                  {/*bigger textbox so that user can put more information in*/}
                  <input
                  type="number"
                  required
                  placeholder="e.g.1234567890"
                  value ={employeeId}
                  id="txtName"
                  onChange={(e)=> setEmployeeId(e.target.value)}
                  />
                   <label >First Name: </label> 
                   <input 
                   type = "text"
                   required
                   placeholder =" Enter first name ..."
                   value = {first}
                   onChange={(e)=> setFirst(e.target.value)}
                   />
                   <label>Last Name: </label> 
                   <input 
                   type = "text"
                   required
                   placeholder = "Enter last name ..."
                   value ={last}
                   onChange={(e)=> setLast(e.target.value)}
                   />
                    <label>Birth Date: </label> 
                   <input 
                   type ="number"
                   required
                   placeholder="MMDDYYYY"
                   value ={birthDate}
                   onChange={(e)=> setBirthDate(e.target.value)}
                   /> 
                   <label>Phone Number: </label> 
                   <input 
                   type ="number"
                   required
                   placeholder="e.g. 1234567890"
                   value ={phone}
                   onChange={(e)=> setPhone(e.target.value)}
                   />
                   <label>Email: </label> 
                   <input 
                   type = "email"
                   required
                   placeholder = "abc@email.com"
                   value ={mail}
                   onChange={(e)=> setMail(e.target.value)}
                   />   
                
                  {/*Display infomation of the form*/}
                  <p>{employeeId}</p>
                   <p>{first}</p>
                   <p>{last}</p>
                   <p>{birthDate}</p>
                   <p>{phone}</p>
                   <p>{mail}</p>
                   
                </form>
                <button type= "button" value="clear"
                onClick="deleteSomething()">Clear</button>
            <button type= "submit">Submit</button>
        </div>
    );
}
export default EmployeeInfo;