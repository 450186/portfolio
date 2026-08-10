"use client";
import type { Project } from "@/types/Project";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import styles from "./ProjectCard.module.css";
import Badge from "@/components/ui/badge/Badge";
import { useRouter } from "next/navigation";
import StatusBadge from "@/components/ui/badge/StatusBadge";

type ProjectCardProps = {
    project: Project
}

export default function ProjectCard({project}: ProjectCardProps) {
    const router = useRouter();
    return (
        <article
            className={styles.projectCard} 
            onClick={() => router.push(`/projects/${project.slug}`)}
        >
            <div className={styles.header}>
                <div>
                    <div className={styles.leftHeader}>
                        <h3>{project.title}</h3>
                        {project.status.map((status) => (
                            <div className={styles.statuses} key={status}>
                                <StatusBadge key={status} status={status} />
                            </div>
                        ))}
                    </div>
                    <p>{project.tagLine}</p>
                </div>
                <ArrowUpRight size={20} className={styles.arrow} />
            </div>
            <p className={styles.description}>
                {project.description}
            </p>
            <div className={styles.techStack}>
                {project.techStack.map((tech) => (
                    <Badge key={tech} message={tech} />
                ))}
            </div>
            <div className={styles.actions}>
                <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                >
                    <FaGithub size={20} />
                    <span>Github</span>
                </a>
            {project.liveLink && (
                <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                >
                    Live Demo
                    <ArrowUpRight size={20} />
                </a>
            )}
            </div>

        </article>
    )
}