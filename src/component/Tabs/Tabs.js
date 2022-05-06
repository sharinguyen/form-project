import { useState,/*useEffect*/ } from "react";
import React from "react";
//import {useRoutes} from 'react-router-dom';
import styles from "./Tabs.module.css";

//import { slugify } from "../../utils/slugify";

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);
   // const router = useRouter();

    function handleClick(e, newActiveTab) {
        e.preventDefault();
        setActiveTab((newActiveTab));
    }


    //useEffect(()=> {
       // router.push('${router.pathname}?tabs=${slugify(activeTab)}', undefined, {shallow:true});
//console.log(activeTab);
    //}, [activeTab])

    return (
        <div>
            <ul className = {styles.tabs}>
                {children.map((tab)=>{
                    const label = tab.props.label; 
                    return (
                 <li 
                 className ={label === activeTab ? styles.current : ""} 
                 key ={label}
                 > 
                     <a href="2" onClick ={e => handleClick(e, label)}>
                     {label}
                     </a>
                </li>
                    )  
})}
            </ul>
            {children.map((one)=> {
                if ((one.props.label) === activeTab)
                return (
            <div key={one.props.label} className ={styles.content}>
                {one.props.children}
            </div>
                );
            })}
            </div>
            );
};
export default Tabs;
