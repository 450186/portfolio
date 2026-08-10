"use client"
import styles from "./Contact.module.css"
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa6"
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
export default function Contact() {
    const router = useRouter();
    return (
        <section className={styles.contactSection}
            onClick={() => router.push("/contact")}
        >
            <div className={styles.header}>
                <h2>Contact</h2>
                <ArrowUpRight size={30} className={styles.arrow}/>
            </div>
            <h3>Let's build something together.</h3>
            <p>
                Interested in working together?
                I'm always happy to discuss new opportunities, 
                collaborate on projects, or connect with other developers.
            </p>
            <div className={styles.spacer}></div>
            <div className={styles.links}>
                <a href="mailto:jack.simcox@hotmail.com?subject=Portfolio"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer">
                    <FaEnvelope size={30} />
                    Email
                </a>
                <a href="https://github.com/450186"
                onClick={(e) => e.stopPropagation()}>
                    <FaGithub size={30} />
                    Github
                </a>
                <a href="https://www.linkedin.com/in/jack-simcox-a68153217/"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                >
                    <FaLinkedin size={30} />
                    LinkedIn
                </a>
                <a href="/cv/Jack Simcox CV.pdf" download
                onClick={(e) => e.stopPropagation()}>
                    <FaDownload size={30} />
                    Download CV
                </a>
            </div>
        </section>
    )
}