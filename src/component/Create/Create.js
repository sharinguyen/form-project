import { useState } from "react";
import React from "react";
import "./Create.css";

//import Type from "../Type/Type";

function Create() {

  const [elementList, setElementList] = useState([{ element: "" }]);

 
  /*changes index of elements when new element created */
  const handleElementChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...elementList];
    list[index][name] = value;
    setElementList(list);
  };

  
/* Used to remove index */
  const handleElementRemove = (index) => {
    const list = [...elementList];
    list.splice(index, 1);
    setElementList(list);
  };

  /*Add element into list */
  const handleElementAdd = () => {
    setElementList([...elementList, { element: "" }]);
  };


  //returns form id, password, and element
  return (
      /* Name of css to set layout */
    <form className="Create" autoComplete="off">
       
    <div >
     {/*Form Id box*/}
        <div>
          <label>Form Id:</label>
          <input 
          type="formText" 
          name="fname"
          required 
          />
         
        </div>

        {/* password box */}
        <div>
          <label>Password: </label>
          <input 
          type="password" 
          name="pass" 
          required 
          />
         
          </div>
          
        </div>
      <div className="form-field">
          {/*label of form and element*/}
        <label htmlFor="element">Element(s):</label>
        {/*creates element list */}
        
        {elementList.map((singleElement, index) => (
        /*uses css to set layout */
          <div key={index} className="element">
            <div className="first-division">
                {/*creates a text box for element for user to insert infomation. 
                Stores it changes it index */}
              <input
                name="element"
                type="text"
                id="element"
                value={singleElement.element}
                onChange={(e) => handleElementChange(e, index)}
                required
                
              /> 
              
              {/*add options to choose which type it */}
   

              {/*the max index is 20. Add element by clicking button */}
              {elementList.length - 1 === index && elementList.length < 20 && (
                <button
                            type="button"
                            onClick={handleElementAdd}
                            className="add-btn"
                        >
                            <span>Add Element</span>

                        </button>
      
              )}
     
            </div>
            

            {/*Button to remove index */}
            <div className="second-division">
                {/* Remove button only present when there is more than one box */}
              {elementList.length !== 1 && (
               <button
                  type="button"
                  onClick = {() => handleElementRemove(index)}
                  className = "remove-btn"
                >
                  <span>Remove</span>
                  
                </button>
              )
              
              }
              
            </div>
        
          </div>
        ))

        
        }
        {/*save button for all of Create Page*/}
        <button
             className = "submit"
             >Save</button> 
      </div>
   
   
      {/*Displays elements information to box*/}
      
      <div className="box">
      <h2>Form</h2>
        {elementList &&
          elementList.map((singleService, index) => (
            <ul key={index}>
              
              {singleService.element && <li>{singleService.element}</li>  }
            </ul>
          )) 
          
        } 
      </div> 
 
    </form>
  );
 
}

export default Create;