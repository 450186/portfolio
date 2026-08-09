import type { Project } from "@/types/Project";

export const projects: Project[] = [
    {
        title: "JobPilot",
        tagLine: "A job search app for the future",
        description: "A full-stack application for tracking and managing job applications.",
        slug: "jobpilot",
        status: ["Featured", "In Progress"],
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        githubLink: "https://github.com/450186/JobPilot",
        liveLink: "https://jobpilot-m6w2.onrender.com",
        image: "/screenshots/JobPilot-screenshot.png",
        featured: true,
    },
    {
        title: "PlayVault",
        tagLine: "Personal Game Library",
        description: "A game library application for discovering and organising games.",
        slug: "playvault",
        status: ["University Project"],
        techStack: ["Node.js", "EJS", "MongoDB"],
        githubLink: "https://github.com/450186/PlayVault",
        liveLink: "https://playvault.uk/",
        image: "/screenshots/PlayVault-screenshot.png",
    },
    {
        title: "GrazeGood",
        tagLine: "Sustainability Scanner",
        description: "A mobile application that helps users understand product sustainability.",
        slug: "grazegood",
        status: ["University Project"],
        techStack: ["React Native", "Express", "MongoDB"],
        githubLink: "https://github.com/450186/GrazeGood",
        image: "/grazegood.png",
    }
]