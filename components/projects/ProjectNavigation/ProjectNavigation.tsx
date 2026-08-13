import Link from "next/link"
import { projects } from "@/data/projects"
import clsx from "clsx"
import styles from "./ProjectNavigation.module.css"

type ProjectNavigationProps = {
    activeSlug?: string;
}

export default function ProjectNavigation(
    {
        activeSlug
    }: ProjectNavigationProps
) {
    return (
        <nav className={styles.navigation}>
            <Link href="/projects" className={
                clsx(
                    styles.link,
                    !activeSlug && styles.active
                )
            }>
                Overview
            </Link>
            {projects.map((project) => (
                <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className={clsx(
                        styles.link,
                         activeSlug === project.slug && styles.active
                    )}
                >
                    {project.title}
                </Link>
            ))}
        </nav>
    )
}