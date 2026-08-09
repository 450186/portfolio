import styles from "./Hero.module.css"
import cslx from "clsx";
import Badge from "@/components/ui/badge/Badge";
import Link from "next/link";
import { ArrowUpRight, Stars } from "lucide-react";

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h2 className={styles.greeting}>Hi, I'm Jack!</h2>
                <h1 className={styles.title}>Building software that solves real-world problems</h1>
                <p className={styles.description}>
                    I'm a Creative Computing graduate 
                    who enjoys building polished full-stack web 
                    applications and learning modern technologies.
                </p>
                <div className={styles.techStack}>
                    <Badge message="React" />
                    <Badge message="TypeScript" />
                    <Badge message="Node.js" />
                    <Badge message="PostgreSQL" />
                </div>

                <div className={styles.actions}>
                    <a className={styles.button} href="/projects">View Projects</a>
                    <a className={cslx(styles.contactButton, styles.button)} href="/contact">Contact Me</a>
                </div>
            </div>
            <div className={styles.heroVisual}>
                <Link href="/projects/jobpilot" 
                className={cslx(styles.project, styles.jobPilot)}
                >
                    <div className={styles.projectHeader}>
                        <div className={styles.leftHeader}>
                            <h3>JobPilot</h3>
                            <Stars size={20} color="#FFDF00"/>
                        </div> 
                        <ArrowUpRight size={20} />
                    </div>
                    <h4>Job Application Tracker</h4>
                    <p>React · TypeScript · PostgreSQL</p>
                </Link>
                <Link href="/projects/playvault" className={cslx(styles.project, styles.playVault)}>
                    <div className={styles.projectHeader}>
                        <h3>PlayVault</h3>
                        <ArrowUpRight size={20} />
                    </div>
                    <h4>Personal Game Library</h4>
                    <p>Node.js · EJS · MongoDB</p>
                </Link>
                <Link href="/projects/grazegood" className={cslx(styles.project, styles.grazeGood)}>
                    <div className={styles.projectHeader}>   
                        <h3>GrazeGood</h3>
                        <ArrowUpRight size={20} />
                    </div>
                    <h4>Sustainability Scanner</h4>
                    <p>React Native · Express</p>
                </Link>
            </div>
        </section>
    )
}