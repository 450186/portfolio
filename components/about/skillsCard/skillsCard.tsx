import { about } from "@/data/about";
import styles from "./skillsCard.module.css"
import Badge from "@/components/ui/badge/Badge";
import { 
    Code2,
    Monitor,
    Server,
    Database,
    FlaskConical
 } from "lucide-react";

const skillIcons = {
    Languages: Code2,
    Frontend: Monitor,
    Backend: Server,
    Databases: Database,
    "Testing & Tools": FlaskConical
}

export default function SkillsCard() {
    return (
        <div className={styles.container}>
            <h1>Technical Skills</h1>
            <div className={styles.skillGrid}>
                {about.skills.map((skill) => {
                    const Icon = skillIcons[skill.title];
                    return (
                        <div className={styles.skillCard} key={skill.title}>
                            <div className={styles.header}>
                                <Icon className={styles.icon} />
                                <h2>{skill.title}</h2>
                            </div>
                            <div className={styles.skills}>
                                {skill.technologies.map((tech) => (
                                    <div className={styles.skill} key={tech}>
                                        <Badge message={tech} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}