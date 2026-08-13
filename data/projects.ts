import type { Project } from "@/types/Project";

export const projects: Project[] = [
    {
        title: "JobPilot",
        date: "2026 - Present",
        tagLine: "A smarter way to manage the job search",
        description:
            "A full-stack application for tracking, organising and analysing job applications throughout the job search process.",
        slug: "jobpilot",

        status: ["Featured", "In Progress"],

        techStack: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "JWT",
            "Vitest",
        ],

        githubLink: "https://github.com/450186/JobPilot",
        liveLink: "https://jobpilot-m6w2.onrender.com",

        image: "/images/screenshots/JobPilot-screenshot.png",

        screenshots: [
            "/images/screenshots/JobPilot/JobPilot-screenshot 1.png",
            "/images/screenshots/JobPilot/JobPilot-screenshot 2.png",
            "/images/screenshots/JobPilot/JobPilot-screenshot 3.png",
            "/images/screenshots/JobPilot/JobPilot-screenshot 4.png",
            "/images/screenshots/JobPilot/JobPilot-screenshot 5.png",
        ],

        overview:
            "JobPilot is a full-stack job application tracking platform designed to make managing a job search easier. Users can record applications, track their progress through different stages, search and filter their applications, and view analytics about their job search. I built JobPilot as an independent project to strengthen my experience with React and TypeScript while developing a complete application with a Node.js, Express and PostgreSQL backend.",

        features: [
            "Secure user registration and login using JWT authentication",
            "Create, view, edit and delete job applications",

            "Track applications through different stages of the recruitment process",
            "Search, filter and sort applications using multiple criteria",

            "Dashboard analytics providing an overview of job search activity",
            "Paginated application management for larger application lists",

            "Responsive interface designed for desktop and mobile devices",
            "Reusable React components and TypeScript interfaces",
        ],

        challenges: [
            {
                title: "Building a Full-Stack TypeScript Application",
                description:
                    "JobPilot was my first substantial project using React and TypeScript together. One of the main challenges was learning how to structure the frontend around reusable components while maintaining clear types for application data, forms and API responses.",
            },
            {
                title: "Advanced Sorting and Filtering",
                description:
                    "Application data can contain optional values such as deadlines, which made sorting more complicated than simply ordering a column. I had to design SQL queries that handled null values correctly while supporting different sort directions alongside search and filtering.",
            },
            {
                title: "Pagination",
                description:
                    "As the number of applications increased, displaying every application at once was no longer ideal. I implemented pagination while ensuring that searching, filtering and sorting continued to work correctly across the complete dataset.",
            },
            {
                title: "Authentication and Protected Data",
                description:
                    "I implemented JWT-based authentication and protected API routes so that application data is associated with the authenticated user. This required coordinating authentication state between the React frontend and Express backend.",
            },
            {
                title: "NULL deadline sorting",
                description:
                    "Applications without deadlines still need predictable behaviour when sorting ascending and descending."
            }
        ],

        lessons: [
            "Developed a much stronger understanding of React component architecture and state management",
            "Improved my TypeScript skills by modelling application data, component props and API responses with reusable types",
            "Learned how to connect a React frontend to a RESTful Node.js and Express backend",
            "Improved my understanding of relational database design and writing more complex PostgreSQL queries",
            "Gained practical experience implementing authentication and protecting user-specific data",
            "Learned how pagination, filtering, searching and sorting interact across the frontend, API and database",
            "Introduced automated testing using Vitest and React Testing Library",
            "Gained experience deploying and maintaining a full-stack application",
        ],

        futureImprovements: [
            "Add application reminders and notifications for upcoming interviews, assessments and deadlines",
            "Expand the analytics dashboard with more detailed job search insights and trends",
            "Introduce additional automated tests across both frontend and backend functionality",
            "Improve accessibility throughout the application and perform a full accessibility audit",
            "Continue refining the responsive mobile experience",
            "Add more customisation options for application stages and statuses",
        ],

        featured: true,
    },
    {
        title: "PlayVault",
        date: "2025 - 2026",
        tagLine: "Your games. Your library.",
        description:
            "A full-stack game library platform for discovering, tracking and reviewing video games.",
        slug: "playvault",

        status: ["University Project"],

        techStack: [
            "Node.js",
            "Express",
            "EJS",
            "MongoDB",
            "Mongoose",
            "IGDB API",
        ],

        githubLink: "https://github.com/450186/PlayVault",
        liveLink: "https://playvault.uk/",

        image: "/images/screenshots/PlayVault-screenshot.png",

        screenshots: [
            "/images/screenshots/PlayVault/PlayVault-screenshot 1.png",
            "/images/screenshots/PlayVault/PlayVault-screenshot 2.png",
            "/images/screenshots/PlayVault/PlayVault-screenshot 3.png",
            "/images/screenshots/PlayVault/PlayVault-screenshot 4.png",
            "/images/screenshots/PlayVault/PlayVault-screenshot 5.png",
            "/images/screenshots/PlayVault/PlayVault-screenshot 6.png",
            "/images/screenshots/PlayVault/PlayVault-screenshot 7.png",
            "/images/screenshots/PlayVault/PlayVault-screenshot 8.png",
            "/images/screenshots/PlayVault/PlayVault-screenshot 9.png",
        ],

        overview:
            "PlayVault is a full-stack game library platform that allows users to discover, organise and review video games. Inspired by platforms such as Letterboxd, the project applies the concept of a personal media library to gaming, allowing users to build their own collection and track games through different statuses. I developed PlayVault as my final university project using Node.js, Express, EJS and MongoDB, with game data provided through the IGDB API.",

        features: [
            "User registration and authentication with secure password hashing",
            "Personal user profiles and account management",

            "Search and discover games using data from the IGDB API",
            "Filter games by genre, platform, release date and rating",

            "Add games to a personal library",
            "Prevent duplicate games from being added to a user's library",

            "Organise games using statuses such as Playing, Completed, Wishlist and Dropped",
            "Review and rate games within a personal library",

            "Sort and paginate game discovery results",
            "Responsive interface for browsing and managing game collections",
        ],

        challenges: [
            {
                title: "Integrating the IGDB API",
                description:
                    "Integrating IGDB required working with Twitch OAuth authentication and constructing API queries for game discovery. I also had to handle limitations in the API, including differences between search queries and other sorting and filtering operations.",
            },
            {
                title: "Building Flexible Game Discovery",
                description:
                    "The Discover page needed to support multiple filters including genres, platforms, release dates and minimum ratings alongside sorting and pagination. Managing these options while keeping the results and interface predictable required careful handling of query parameters and API requests.",
            },
            {
                title: "Managing User Libraries",
                description:
                    "Each user needed their own persistent game library with additional information such as status, ratings and reviews. I designed the MongoDB data structure and backend routes to associate library entries with individual users while preventing duplicate entries.",
            },
            {
                title: "Authentication and Session Management",
                description:
                    "PlayVault required users to remain authenticated across different pages while keeping personal library and account functionality protected. I implemented session-based authentication and secure password hashing to manage user access.",
            },
        ],

        lessons: [
            "Developed a stronger understanding of structuring a complete full-stack application with Node.js and Express",
            "Learned how to integrate and work around the constraints of a large third-party API",
            "Improved my understanding of OAuth authentication when accessing external services",
            "Gained experience designing MongoDB and Mongoose models for user-specific application data",
            "Improved my understanding of session-based authentication and secure password storage",
            "Learned how to build complex filtering, sorting and pagination functionality",
            "Developed experience using server-side rendering with EJS and reusable partials",
            "Improved my ability to design an application around a real user problem rather than individual technical features",
        ],

        futureImprovements: [
            "Rebuild the frontend using React and TypeScript to create a more interactive user experience",
            "Expand the social features to allow users to follow other players and view their libraries",
            "Introduce richer user profiles with gaming statistics and activity history",
            "Add personalised game recommendations based on a user's library and ratings",
            "Expand the review system with likes and community interaction",
            "Improve accessibility and continue refining the responsive experience",
            "Increase automated testing across backend routes and core application functionality",
        ],

        featured: false,
    },
    {
        title: "GrazeGood",
        date: "2025 - 2026",
        tagLine: "Making sustainable choices easier",
        description:
            "A mobile application that helps users understand the nutritional and environmental impact of everyday products.",
        slug: "grazegood",

        status: ["University Project"],

        techStack: [
            "React Native",
            "Expo",
            "JavaScript",
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "REST APIs",
        ],

        githubLink: "https://github.com/450186/GrazeGood",

        image: "/images/screenshots/GrazeGood-screenshot.png",

        screenshots: [
            "/images/screenshots/GrazeGood/GrazeGood-screenshot 1.png",
            "/images/screenshots/GrazeGood/GrazeGood-screenshot 2.png",
            "/images/screenshots/GrazeGood/GrazeGood-screenshot 3.png",
        ],

        overview:
            "GrazeGood is a full-stack mobile application designed to help users make more informed and sustainable purchasing decisions. Users can scan product barcodes to retrieve nutritional and product information, which is combined with a custom sustainability scoring system to provide an easy-to-understand environmental rating. I developed the React Native application and its Node.js, Express and MongoDB backend as part of a university group project.",

        features: [
            "Barcode scanning using the device camera",
            "Product information retrieved from external food and product APIs",

            "Custom sustainability scoring system that grades products from A to E",
            "Detailed nutritional and environmental product information",

            "Save products to a personal collection for later viewing",
            "Product of the Week recommendations based on sustainability scores",

            "User accounts and authentication",
            "Customisable user profiles and generated profile avatars",

            "Daily scan credit system with support for additional rewarded scans",
            "Premium membership functionality with subscription periods and renewal support",
        ],

        challenges: [
            {
                title: "Turning Product Data Into a Sustainability Score",
                description:
                    "The external product data contained many different environmental indicators rather than a single sustainability rating. I developed custom scoring logic that evaluates available product information and converts it into a consistent score and A-E grade that users can understand quickly.",
            },
            {
                title: "Working With External Product APIs",
                description:
                    "Product information came from an external API where responses could be incomplete, rate-limited or temporarily unavailable. I implemented error handling and retry behaviour to make product retrieval more reliable and ensure the application could respond appropriately when data was unavailable.",
            },
            {
                title: "Implementing Barcode Scanning",
                description:
                    "The core interaction of GrazeGood relies on scanning physical product barcodes using a mobile device. I integrated Expo's camera functionality and handled multiple barcode formats while connecting scanned codes to the backend product lookup process.",
            },
            {
                title: "Designing Scan Limits and Premium Features",
                description:
                    "GrazeGood included both free and premium functionality. I implemented scan credits, daily resets, rewarded scans and premium membership data while ensuring these limits were persisted and enforced through the backend.",
            },
            {
                title: "Developing and Deploying a Mobile Backend",
                description:
                    "The mobile application needed to communicate reliably with a remotely hosted API rather than a local development server. I developed the Express and MongoDB backend and deployed it to Render, which gave me experience debugging network, hosting and production API issues.",
            },
        ],

        lessons: [
            "Gained practical experience developing a complete mobile application with React Native and Expo",
            "Learned how to integrate device hardware such as the camera into an application workflow",
            "Improved my understanding of consuming, validating and handling unreliable data from external APIs",
            "Developed experience designing custom application logic from complex real-world product data",
            "Strengthened my Node.js, Express and MongoDB skills by developing and deploying the application's backend",
            "Learned how mobile applications communicate with remotely hosted REST APIs",
            "Gained experience implementing persistent user features including saved products, scan credits and premium memberships",
            "Improved my understanding of developing software collaboratively as part of a university team",
        ],

        futureImprovements: [
            "Improve the sustainability scoring model using more comprehensive and reliable environmental datasets",
            "Expand product recommendations to suggest more sustainable alternatives to scanned products",
            "Add comparison functionality so users can compare the sustainability of multiple products",
            "Improve handling for products with incomplete environmental information",
            "Introduce more personalised sustainability insights based on a user's scanning history",
            "Expand automated testing across the mobile application and backend",
            "Further improve accessibility and the overall mobile user experience",
        ],

        featured: false,
    }
]