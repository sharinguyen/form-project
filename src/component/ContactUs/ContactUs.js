import { useState } from "react";
import React from "react";
import "./ContactUs.css";
import Axios from 'axios';

const ContactUs = () => {
    const [first,setFirst] = useState('');
    const [last,setLast] = useState('');
    const [phone,setPhone] = useState('');
    const [mail,setMail] = useState('');
    const [message,setMessage] = useState('');

    const submit = () => {
        Axios.post('http://localhost:3002/contactus', {
            first: first,
            last: last,
            phone: phone,
            mail: mail,
            message: message,
        }).then(() => {
            console.log("sucess");
        });
    };

    const clearInput = () => {
        setFirst('');
        setLast('');
        setPhone('');
        setMail('');
        setMessage('');
    };

    return(
        //uses form css to align the labels vertically
        <div className = "ContactUs">
            {/*form creation process*/}
            <form  autoComplete="off">
                   <label >First Name: </label> 
                   <input 
                   type ="text"
                   required
                   placeholder="Enter first name ..."
                   id="first"
                   value ={first}
                   onChange={(e)=> setFirst(e.target.value)}
                   />
                   <label>Last Name: </label> 
                   <input 
                   type ="text"
                   required
                   placeholder="Enter last name ..."
                   value ={last}
                   onChange={(e)=> setLast(e.target.value)}
                   
                   />
                   <label>Phone Number: </label> 
                   <input 
                   type ="text"
                   required
                   placeholder="e.g. 1234567890"
                   value ={phone}
                   onChange={(e)=> setPhone(e.target.value)}
                   />
                   <label>Email: </label> 
                   <input 
                   type ="email"
                   required
                   placeholder="abc@email.com"
                   value ={mail}
                   onChange={(e)=> setMail(e.target.value)}
                   />   
                  <label>Message: </label> 
                  {/*bigger textbox so that user can put more information in*/}
                  <textarea
                  type="text"
                  required
                  /*leaves message inside box*/
                  placeholder ="Enter your messege ..."
                  value ={message}
                  id="txtName"
                  onChange={(e)=> setMessage(e.target.value)}
                  ></textarea>
                 { /*Display infomation of the form
                   <p>{first}</p>
                   <p>{last}</p>
                   <p>{phone}</p>
                   <p>{mail}</p>
                   <p>{message}</p> */}
                </form>
                {/*<button type= "button" 
                value="clear"
                onClick="deleteSomething()">Clear</button> */}
              <button type= "button" value="clear"
                onClick={clearInput}>Clear</button>
               <button onClick={submit} >Submit</button>
                    
        </div>
    );
}
export default ContactUs;