import styles from "./Footer.module.css"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6"
import Badge from "@/components/ui/badge/Badge"

export default function Footer() {
    return (
        <footer className={styles.footerSection}>
            <div className={styles.info}>
                <p className={styles.name}>Jack Simcox</p>
                <p className={styles.title}>Full Stack Software Developer</p>
                <div className={styles.copyright}>
                    <p>&copy; 2026 Jack Simcox</p>
                    <Badge message="React" />
                    <Badge message="Next.js" />
                    <Badge message="TypeScript" />
                    <Badge message="Vercel" />
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.links}>
                    <a href="/projects">
                        Projects
                    </a>
                    <a href="/about">
                        About
                    </a>
                    <a href="/contact">
                        Contact
                    </a>
                </div>
                <div className={styles.socials}>
                    <a href="https://github.com/450186" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/jack-simcox/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="mailto:jack.simcox@hotmail.com?subject=Portfolio" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope size={30} />
                    </a>
                </div>
            </div>
        </footer>
    )
}