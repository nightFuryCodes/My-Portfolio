import { useState } from "react"
import styles from "./Hero.module.css"
import profile from "../../assets/ashwin.jpg"
import resume from "../../assets/resume.pdf"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from "../ThemeContext";



export default function Hero(){

    const { theme, toggleTheme } = useTheme()

    const iconColor = theme === 'dark' ? '#ffffff' : '#000000';


    return <section id = "hero" className={styles.container}>
        <div><img className = "hover" src = {profile} alt = "ashwin"></img>
        <i className = {styles.mode} onClick={toggleTheme}>
            {theme === "light" ? <FontAwesomeIcon icon={faMoon} size = "2x" style={{color:iconColor}}/> : 
            <FontAwesomeIcon icon = {faLightbulb} size = "2x" style = {{color: iconColor}}/>}</i>
        </div>
        <div className = {styles.info}>
            <h1>Ashwin <br/> Kharkwal</h1>
            <h2>Web Developer</h2>
        <span>
        <a href = "https://github.com/nightFuryCodes"><FontAwesomeIcon icon={faGithub} size = "2x" style = {{color: iconColor}}/></a>
        <a href="https://www.linkedin.com/in/ashwinkharkwal/"><FontAwesomeIcon icon={faLinkedin} size = "2x" style = {{color: iconColor}}/></a>
        </span>
        <p>
            Passionate CS undergrad who<br/>
            loves developing modern react apps.
        </p>
        <a href = {resume}>
        <button className={styles.button} download>Resume</button>
        </a>
        </div>
    </section>
}