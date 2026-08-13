import ProjectNavigation from "@/components/projects/ProjectNavigation/ProjectNavigation";
import styles from "./page.module.css";

export default function ProjectsPage() {
    return (
        <main className={styles.container}>
            <ProjectNavigation />

            <h1>Projects</h1>
        </main>
    );
}