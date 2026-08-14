export type SkillTitle =
    | "Languages"
    | "Frontend"
    | "Backend"
    | "Databases"
    | "Testing & Tools"
export interface SkillsCategory {
    title: SkillTitle;
    technologies: string[];
}