
import styles from "./Projects.module.css"

export default function Projectcard({link, title, desc}){
    return <div>
    <a><img src = {`${link}`}></img>
    <h3>{title}</h3>
    <p>{desc}</p>
    </a>


</div>
        
}