import styles from "./About.module.css"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
export default function About() {
    return (
        <section className={styles.aboutSection}>
            <h2>About Me</h2>
            <h3>I enjoy turning ideas into real world, practical software.</h3>
            <div className={styles.divider} />
            <p>
                I'm a Creative Computing graduate focused on full-stack development.
                I enjoy building user-focused applications, solving technical problems,
                and continuously expanding the technologies I work with.
            </p>
            <div className={styles.spacer} />
            <Link href="/about" className={styles.button}>
                Learn More
                <ArrowUpRight size={30} />
            </Link>
        </section>
    )
}