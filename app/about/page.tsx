import clsx from "clsx"
import styles from "./page.module.css"
import { about } from "@/data/about"
import SkillsCard from "@/components/about/skillsCard/skillsCard"
import {
    BookOpen,
    School,
    Award,
    CalendarDays
} from "lucide-react";

export default async function AboutPage() {
    return (
        <main>
            <section className={styles.container}>
                <div className={styles.leftContent}>
                    <h1>About Me</h1>
                    <p>{about.intro}</p>
                    <p>{about.bio}</p>
                </div>
                <div className={styles.rightContent}>
                    <img src={about.headshot} className={styles.headshot} />
                </div>
            </section>
            <SkillsCard />
            <section className={styles.container}>
                <h1>Education</h1>
                <div className={styles.educationDiv}>
                    {about.education.map((edu) => (
                        <div className={styles.education} key={edu.qualification}>
                            <div className={styles.educationRow}>
                                <BookOpen className={styles.icon} />
                                <h3>{edu.qualification}</h3>
                            </div>
                            <div className={styles.educationRow}>
                                <School className={styles.icon} />
                                <p>{edu.institution}</p>
                            </div>
                            <div className={styles.educationRow}>
                                <Award className={styles.icon} />
                                <p>{edu.result}</p>
                            </div>
                            <div className={styles.educationRow}>
                                <CalendarDays className={styles.icon} />
                                <p>{edu.dates}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </section>
            <section className={styles.container}>
                <h1>Want to work with me?</h1>
                <h3>I'm currently looking for graduate and junior software development opportunities.</h3>
                <div className={styles.actions}>
                    <a href="/projects">
                        View Projects
                    </a>
                    <a href="/contact">
                        Get In Touch
                    </a>
                </div>
            </section>
        </main>
    )   
}