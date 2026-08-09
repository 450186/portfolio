export type ProjectStatus = "Featured" | "In Progress"| "University Project";
export interface Project {
    title: string;
    tagLine: string;
    description: string;
    slug: string;

    status: ProjectStatus[];

    techStack: string[];

    githubLink: string;
    liveLink?: string;

    image: string;

    featured?: boolean;
}