import { useState } from "react";
import styles from "./form.css";
const Form = () => {
    const [first,setFirst] = useState('');
    const [last,setLast] = useState('');
    const [phone,setPhone] = useState('');
    const [mail,setMail] = useState('');
    const [message,setMessage] = useState('');
    return(
        //uses form css to align the labels vertically
        <div className = "form">
            {/*form creation process*/}
            <form >
                   <label >First Name: </label> 
                   <input 
                   type ="text"
                   required
                   value ={first}
                   onChange={(e)=> setFirst(e.target.value)}
                   />
                   <label>Last Name: </label> 
                   <input 
                   type ="text"
                   required
                   value ={last}
                   onChange={(e)=> setLast(e.target.value)}
                   />
                   <label>Phone Number: </label> 
                   <input 
                   type ="number"
                   required
                   value ={phone}
                   onChange={(e)=> setPhone(e.target.value)}
                   />
                   <label>Email: </label> 
                   <input 
                   type ="email"
                   required
                   value ={mail}
                   onChange={(e)=> setMail(e.target.value)}
                   />   
                  <label>Message: </label> 
                  {/*bigger textbox so that user can put more information in*/}
                  <textarea
                  type="text"
                  required
                  value ={message}
                  id="txtName"
                  onChange={(e)=> setMessage(e.target.value)}
                  ></textarea>
                  {/*Display infomation of the form*/}
                   <p>{first}</p>
                   <p>{last}</p>
                   <p>{phone}</p>
                   <p>{mail}</p>
                   <p>{message}</p>
                </form>
                <button type= "button" value="clear"
                onclck="deleteSomething()">Clear</button>
               <button type= "submit">Submit</button>
        </div>
    );
}
export default Form;