import { projects } from "@/data/projects"
import ProjectCard from "@/components/projects/ProjectCard/ProjectCard"
import styles from "./FeaturedProjects.module.css"

export default function FeaturedProjects() {
    return (
        <section className={styles.projects}>
            <h2>Featured Projects</h2>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))} 
            </div>
        </section>
    )
}