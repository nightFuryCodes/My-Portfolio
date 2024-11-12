import styles from "./Contact.module.css"

export default function Contact(){


    return <section id ="contact" className={styles.container}>
        <h1 className = "sectionTitle">Contact Me</h1>
        <form action="https://formspree.io/f/xpwzrryg" method = "post">
            <div className = {styles.formBox}>
            <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
                
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="name"
            placeholder="Email"
            required
          />
            <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <button className = {styles.button} value = "submit" type = "submit">Submit</button>

        </form>

    </section>
}