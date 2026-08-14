import ProjectNavigation from "@/components/projects/ProjectNavigation/ProjectNavigation";
import styles from "./page.module.css";
import ProjectCard from "@/components/projects/ProjectCard/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <main>
            <ProjectNavigation />
            <div className={styles.pageHeader}>
                <h1>Projects</h1>
            </div>

            <div className={styles.container}>
                <h2>
                    A selection of projects I've built across web and
                    mobile development.
                </h2>

                <div className={styles.projects}>
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </main>
    );
}