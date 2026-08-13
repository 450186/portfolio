export type ProjectStatus =
    | "Featured"
    | "In Progress"
    | "University Project";

export type ProjectChallenge = {
    title: string;
    description: string;
};

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
    screenshots: string[];

    overview: string;
    features: string[];

    challenges: ProjectChallenge[];

    lessons: string[];
    futureImprovements: string[];

    featured?: boolean;

    date: string;
}