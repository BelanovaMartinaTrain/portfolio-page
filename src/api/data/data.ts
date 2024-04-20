import { uid } from "uid";

export const projectData = [
    {
        id: "project-1",
        title: "Aurora Forecast website",
        description:
            "Website which displays data needed to forecast Northern lights. It has interactive parts like unit switchers and modals with detailed information. ",
        image: "/nahlad2.jpg",
        alt: "screenshot of the aurora forecast website",
        goals: [
            "Front-end Typescript",
            "Server Components",
            "Fast-loading Website",
            "Modern Design",
            "React Context",
            "NEXT JS App routing",
            "Grid Layouts",
            "Fetch and Display of Data",
            "Basic principles of frontend development",
        ],
        stack: ["NEXT JS 14.1", "Typescript", "Tailwind", "Chart JS", "React", "CSS", "HTML", "ES6"],
        links: [
            { text: "Live site", link: "https://auroraforecast.online" },
            { text: "Github", link: "https://github.com/BelanovaMartinaTrain/AuroraForecastFrontend" },
        ],
        imageClass: "xs:group-hover:opacity-40 opacity-100",
        lighthouse: "/lighthouse.jpg",
    },
    {
        id: "project-2",
        title: "Backend Data server",
        description:
            "Backend server to provide data obtained from public APIs created to conserve public API calls and cache data in Redis. It provides data to Aurora Forecast website.",
        image: "/server.jpg",
        alt: "server closeup",
        goals: [
            "Back-end Typescript :)",
            "Node JS backend server setup",
            "API endpoints",
            "Express JS framework",
            "Data manipulation",
            "REDIS",
            "Time limit for API calls and serving data from REDIS storage",
            "Docker deploy",
            "VPS setup with load balancer",
        ],
        stack: ["Node JS", "Express", "Typescript", "REDIS", "Docker", "Ubuntu", "Digital Ocean", "ES6"],
        links: [{ text: "Github", link: "https://github.com/BelanovaMartinaTrain/AuroraForecast" }],
        imageClass: "xs:group-hover:opacity-10 opacity-50",
        lighthouse: "",
    },
    {
        id: "project-3",
        title: "My portfolio page",
        description:
            "My personal portfolio page to present my projects I worked on during the continuous learning process. It provides CV, contact form and lists of projects, courses and tutorials. ",
        image: "/portfolio-screenshot.jpg",
        alt: "my portfolio webpage screenshot",
        goals: [
            "Playing with framer-motion",
            "Trying tricks and features of Tailwind",
            "React Router 6",
            "Implementation of classic React hooks",
            "Nested routes",
        ],
        stack: ["React", "Javascript", "Framer motion", "Tailwind", "HTML", "CSS"],
        links: [{ text: "Github", link: "https://github.com/BelanovaMartinaTrain/AuroraForecast" }],
        imageClass: "xs:group-hover:opacity-40 opacity-100 border border-t-blue-600/[0.2] border-x-blue-600/[0.3] border-b-transparent",
    },
    {
        id: "project-5",
        title: "Python scripts",
        description:
            "Scripts I created to facilitate the process of cleaning public IP subnets. With its help I solely released more than 800 IP addresses in a short amount of time. Without it it would require to access every single contract and manually check and reassign each address. It's what the script does within the bounds of the company's lack of automation tools. ",
        image: "/python.jpg",
        alt: "closeup of a cup with futuristic background",
        goals: [
            "Python scripting",
            "Automated SSH access",
            "Data manipulation and advanced filtering",
            "Access the data in .csv files",
            "Mikrotik router configuration within remote access",
        ],
        stack: ["Python 3", "paramiko", "csv", "getpass4"],
        links: [
            {
                text: "Github",
                link: "https://github.com/BelanovaMartinaTrain/python-script",
            },
        ],
        imageClass: "xs:group-hover:opacity-20 opacity-80",
        lighthouse: "",
    },
    {
        id: "project-4",
        title: "Future projects",
        description:
            "In the future I have several ideas about what I would like to build. Some are tools I need and that don't exist in the way I want to use them.",
        image: "/future.jpg",
        alt: "closeup of a cup with futuristic background",
        goals: [
            "Bike rides planner according to the weather forecast with filters based on the desired weather stats",
            "Advanced notes which are sorted into categories and have added tags by AI tools",
            "Shopping lists separated into different shops with database of favorite goods and shopping lists",
            "Bike ride map editor with stats",
        ],
        stack: ["Node JS", "Express", "Typescript", "REDIS", "MongoDB", "React", "Vue", "Angular", "Python", "Django", "C#", "SQL"],
        links: [
            {
                text: "Coming soon",
                link: "https://giphy.com/gifs/rickroll-rick-astley-never-gonna-give-you-up-Vuw9m5wXviFIQ",
            },
        ],
        imageClass: "xs:group-hover:opacity-40 opacity-80",
        lighthouse: "",
    },
] as const;

export const coursesList = [
    {
        id: uid(),
        title: "The Frontend Developer Career Path",
        description:
            "This career path will turn you into a hireable frontend developer, and teach you how to nail the job interview. It contains over 70 hours of top-notch tutorials, hundreds of coding challenges, and dozens of real-world projects.",
        platform: "Scrimba",
        learningStack: [
            "HTML",
            "CSS",
            "Responsive web design",
            "Essential Javascript",
            "Advanced Javascript",
            "APIs",
            "UI design",
            "React basics",
            "Advanced React",
            "ES6",
        ],
        duration: "70 hours 53 min",
        link: "https://scrimba.com/learn/frontend",
    },
    {
        id: uid(),
        title: "JavaScript Deep Dive",
        description:
            "This course will teach you advanced JavaScript from the ground up. It features a systematic walk-through of the most important concepts of the language, and teaches you to build a Google Keep clone and a Hacker News clone in vanilla JavaScript.",
        platform: "Scrimba",
        learningStack: ["Javascript"],
        duration: "14 hours 6 min",
        link: "https://scrimba.com/learn/javascript",
    },
    {
        id: uid(),
        title: "Learn Typescript",
        description: "A hands-on course giving you the basics of TypeScript while you build a real-world-style couchsurfing app.",
        platform: "Scrimba",
        learningStack: ["Typescript"],
        duration: "3 hours 14 min",
        link: "https://scrimba.com/learn/typescript",
    },
    {
        id: uid(),
        title: "Learn React",
        description:
            "The ultimate React 101 - the perfect starting point for any React beginner. Learn the basics of modern React by solving 140+ interactive coding challenges and building eight fun projects.",
        platform: "Scrimba",
        learningStack: ["React"],
        duration: "13 hours 46 min",
        link: "https://scrimba.com/learn/learnreact",
    },
    {
        id: uid(),
        title: "Advanced React",
        description:
            "The best learning experience paired with a world-class instructor. This massive course aims to turn you into hireable React developer as fast as possible.",
        platform: "Scrimba",
        learningStack: ["React"],
        duration: "13 hours 13 min",
        link: "https://scrimba.com/learn/react",
    },
    {
        id: uid(),
        title: "Learn Tailwind CSS",
        description:
            "Tailwind CSS is a utility-first framework for rapidly building custom designs. This tutorial will teach your Tailwind from scratch, using a mix of lectures and interactive coding challenges.",
        platform: "Scrimba",
        learningStack: ["Tailwind", "Javascript", "HTML"],
        duration: "2 hours 34 min",
        link: "https://scrimba.com/learn/tailwind",
    },
] as const;
