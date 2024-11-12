import Projectcard from "./Projectcard"
import styles from "./Projects.module.css"
import profile from "../../assets/tttoe.png"

export default function Projects(){


    return <section id ="projects" className = {styles.container}>
            <h1 className = "sectionTitle">Projects</h1>
            <div className = {styles.projectsContainer}>
            <Projectcard 
                link = {profile}
                title = {"Mic-Mac-Moe"}
                desc = {"Multiplayer tic-tac-toe"}
            />
                        
            <Projectcard 
                link = {"https://picsum.photos/id/102/300/300"}
                title = {"Twitch"}
                desc = {"Video Streaming App"}
            />    

            <Projectcard 
            link = {"https://picsum.photos/id/10/300/300"}
            title = {"Twitch"}
            desc = {"Video Streaming App"}
        />
        </div>

            
    </section>
}