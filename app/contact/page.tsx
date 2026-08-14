import styles from './page.module.css'
import { FaLinkedin, FaEnvelope,  } from 'react-icons/fa6'

export default async function ContactPage() {
    return (
        <main className={styles.main}>
            <h1>Contact</h1>
            <div className={styles.container}>
                <h2>Get in touch</h2>
                <p> 
                    I'm currently looking for graduate 
                    and junior software 
                    development opportunities. 
                    If you'd like to discuss an opportunity, a project, or just get in touch, feel free to contact me.
                </p>
                <div className={styles.actions}>
                    <a 
                    href="mailto:jack.simcox@hotmail.com"
                    className={styles.action}>
                        <FaEnvelope size={30} />
                        jack.simcox@hotmail.com
                    </a>
                    <a 
                    href="https://www.linkedin.com/in/jack-simcox-a68153217/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.action}>
                        <FaLinkedin size={30} />
                        Jack Simcox
                    </a>
                </div>
            </div>
        </main>
    )
}