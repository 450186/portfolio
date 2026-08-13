import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy/ProjectCaseStudy"
import ProjectNavigation from "@/components/projects/ProjectNavigation/ProjectNavigation"
import styles from "./page.module.css"
import Footer from "@/components/home/Footer/Footer"
export default async function ProjectPage({ 
    params 
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;

    const project = projects.find(
        (project) => project.slug === slug
    );

    if (!project) {
        return notFound();
    }

    return (
        <main className={styles.container}>
            <ProjectNavigation activeSlug={slug} />
            <ProjectCaseStudy project={project} />
            <Footer />
        </main>
    )
}