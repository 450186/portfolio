import type { SkillsCategory } from "@/types/skillsCategory"

export const skills: SkillsCategory[] = [
    {
        title: "Languages",
        technologies: [
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "SQL"
        ]
    },
    {
        title: "Frontend",
        technologies: [
            "React",
            "Next.js",
            "React Native",
            "EJS"
        ]
    },
    {
        title: "Backend",
        technologies: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "JWT"
        ]
    },
    {
        title: "Databases",
        technologies: [
            "PostgreSQL",
            "MongoDB",
            "Mongoose"
        ]
    },
    {
        title: "Testing & Tools",
        technologies: [
            "Vitest",
            "React Testing Library",
            "Git",
            "GitHub",
        ]
    }
];

export const about = {
    headshot: "/images/Headshot.jpg",
    intro: 
    "I'm a First-Class Creative Computing graduate and full-stack developer with a passion for building practical, user-focused software.",
    bio: 
    "My interest in software development started through studying Software and Game Development at college before progressing to Creative Computing at Bath Spa University. Throughout my degree, I became increasingly interested in full-stack development and enjoyed taking projects from an initial idea through to a working application. Since then, I've continued developing my skills through independent projects, exploring technologies such as React, TypeScript, Next.js, Node.js and PostgreSQL. I particularly enjoy solving problems, learning new technologies and building software that has a clear purpose for the people using it.",

    currentFocus: [
        "Building full-stack applications with React, Next.js and TypeScript",
        "Improving backend architecture with Node.js, Express and PostgreSQL",
        "Learning more about testing, deployment and production workflows"
    ],

    skills,

    education: [
        {
            qualification: "BSc (Hons) Creative Computing",
            institution: "Bath Spa University",
            result: "First Class Honours",
            dates: "2023 – 2026"
        },
        {
            qualification: "Level 3 Extended Diploma in Software and Game Development",
            institution: "West Herts College",
            result: "DDM",
            dates: "2019 – 2021"
        }
    ],

    experience: [
        {
            role: "Key Holder / Team Leader",
            company: "Card Factory",
            dates: "2023 – Present",
            description:
                "Developed leadership, communication and problem-solving skills while supporting day-to-day store operations and managing a team."
        }
    ],

    interests: [
        "Full-stack development",
        "Frontend UI and UX",
        "Mobile development",
        "Building independent software projects"
    ]
};