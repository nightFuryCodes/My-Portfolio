import React from 'react';
import styles from "./Navbar.module.css"
import { faAddressBook, faContactBook, faHouse, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react"
import { useTheme } from '../ThemeContext';


export default function Navbar(){

    const [active, setActive] = useState();
    const { theme } = useTheme()

    const iconColor = theme === 'dark' ? '#222' : 'e5e5e5';



    return <div className={styles.container}>
        <a onClick = {()=>{setActive("#hero")}}
        className = {active === "#hero" ? `${styles.active}` : ""}
        href = "#hero"><FontAwesomeIcon icon={faHouse} style={{color:iconColor}}/></a>

        <a onClick = {()=>{setActive("#projects")}}
        className = {active === "#projects" ? `${styles.active}` : ""}
        href = "#projects"><FontAwesomeIcon icon={faProjectDiagram} style={{color:iconColor}}/></a> 

       <a onClick = {()=>{setActive("#contact")}}
        className = {active === "#contact" ? `${styles.active}` : ""}
        href = "#contact"><FontAwesomeIcon icon={faContactBook} style={{color:iconColor}}/></a>

    </div>
}