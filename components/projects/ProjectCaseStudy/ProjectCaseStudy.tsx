import type { Project } from "@/types/Project";
import styles from "./ProjectCaseStudy.module.css";
import StatusBadge from "@/components/ui/badge/StatusBadge";
import Badge from "@/components/ui/badge/Badge";
import { FaGithub, FaLink, FaSquareCheck } from "react-icons/fa6";
import ScreenshotCarousel from "../ScreenshotCarousel/ScreenshotCarousel";
import clsx from "clsx";
import Footer from "@/components/home/Footer/Footer";
type ProjectCaseStudyProps = {
    project: Project
}

export default function ProjectCaseStudy(
    {
        project
    }: ProjectCaseStudyProps
) {
    return (
        <>
        <section className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>
                    {project.title}
                </h3>
                    <div className={styles.statuses} key={project.slug}>
                    {project.status.map((status) => (
                            <StatusBadge key={status} status={status} />
                    ))}
                    </div>
            </div>
                <h4 className={styles.subtitle}>
                    {project.tagLine}
                    <span className={styles.separator}>&#903;</span>
                    {project.date}
                </h4>
            <p className={styles.description}>
                {project.description}
            </p> 
            <p>{project.overview}</p>
            <div className={styles.techStack}>
                {project.techStack.map((tech) => (
                    <Badge key={tech} message={tech} />
                ))} 
            </div>  
            <div className={styles.actions}>
                <a href={project.githubLink}>
                    <FaGithub size={30} />
                    Github
                </a>   
                <a href={project.liveLink}>
                    <FaLink size={30} />
                    Live Demo
                </a>
            </div>
        </section>
        <section className={styles.container}>
            <h3>{project.title} Screenshots</h3>
            <ScreenshotCarousel screenshots={project.screenshots} />
        </section>
        <section className={styles.container}>
            <h3>Key Features</h3>
            <div className={styles.features}>
                {project.features.map((feature) => (
                    <div className={styles.feature} key={feature}>
                        <FaSquareCheck size={20} className={styles.checkIcon}/>
                        <p>{feature}</p>
                    </div>
                ))}
            </div>
        </section>
        <section className={clsx(styles.container, styles.challenges)}>
            <h3>Technical Challenges</h3>
                {project.challenges.map((challenge) => (
                    <div className={clsx(
                        styles.challenge, 
                        project.challenges.length % 2 === 0 ? styles.even : styles.odd   
                    )} key={challenge.title}>
                        <h4 className={styles.challengeTitle}>{challenge.title}</h4>
                        <p>{challenge.description}</p>
                    </div>
                ))}
        </section>
        <section className={styles.lastRow}>
                <section className={styles.lessons}>
                    <h3>What I Learned</h3>
                    {project.lessons.map((lesson) => (
                        <div className={styles.lesson} key={lesson}>
                            <FaSquareCheck size={20} className={styles.checkIcon}/>
                            <p>{lesson}</p>
                        </div>
                    ))}
                </section>
                <section className={styles.improvements}>
                    <h3>Future Improvements</h3>
                    {project.futureImprovements.map((improvement) => (
                        <div className={styles.improvement} key={improvement}>
                            <FaSquareCheck size={20} className={styles.checkIcon}/>
                            <p>{improvement}</p>
                        </div>
                    ))}
                </section>
        </section>
        </>
    )
}