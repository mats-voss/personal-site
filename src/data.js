/**
 * Every Project for the project cards
 *
 * Values:
 * - id: number
 * - title: Name
 * - body: description
 * - imgURL: image URL
 * - github: github-repo link
 * - demo: demo link
 * - comingSoon: true/false
 * - working: true/false
 */
const projectCars = [
    {
        id: 1,
        title: "Personal Website",
        body: "This is my personal website that contains my current portfolio & resume and is constantly expanding with new features/technologies that I am learning. I built it with <a href='https://reactjs.org' target='_blank' rel='noreferrer'>React</a> and want to improve it over time with things like <a href='https://graphql.org' target='_blank' rel='noreferrer'>GraphQL</a>, <a href='https://graphql.org' target='_blank' rel='noreferrer'><a href='https://www.gatsbyjs.com' target='_blank' rel='noreferrer'>Gatsby</a> and more.",
        imgURL: "https://i.postimg.cc/9VSyNKpX/Bild-2022-06-06-192254181.png",
        github: "https://github.com/mats-voss/todo-app",
        demo: "https://mats-todo.netlify.app",
        comingSoon: false,
        working: true,
    },
    {
        id: 2,
        title: "Botschiee",
        body: "\"Botschiee\" is my Discord Bot written in Python with the <a href='https://reactjs.org' target='_blank' rel='noreferrer'>Discord.py</a> library. I used the <a href='https://api.hypixel.net' target='_blank' rel='noreferrer'>Hypixel</a> and <a href='https://mojang.com' target='_blank' rel='noreferrer'>Mojang</a> Open-API to fetch User-Information. I implemented a <a href='https://www.mongodb.com' target='_blank' rel='noreferrer'>Mongo-DB</a> connection to save data like the muted users.",
        imgURL: "https://miro.medium.com/max/1200/1*pgOjBS0d_mc10JJG8yKGvQ.png",
        github: "https://github.com/mats-voss/Botschiee",
        demo: "https://discord.gg/sG3tnxF8v8",
        comingSoon: false,
        working: false,
    },
    {
        id: 3,
        title: "Old - First Personal Site",
        body: "This is one of my CSS lerning projects where I worked with css for the first time. I used JavaScript for the background and the 'change color' finctionality.",
        imgURL: "https://i.postimg.cc/MH1KKMR2/Bild-2022-06-06-234331683.png",
        github: "https://github.com/mats-voss/first-personal-page",
        demo: "https://mats-firstsite.netlify.app",
        comingSoon: false,
        working: false,
    },
    {
        id: 4,
        title: "Old - Todo App",
        body: "This is one of my JavaScript lerning projects that I build a long time ago. I used the local-storage to save the todos and generate them again when the page gets reloaded or revisited. The hint text changes dynamically based on an array.",
        imgURL: "https://i.postimg.cc/Kjjyk1Cs/Bild-2022-06-06-232922154.png",
        github: "https://github.com/mats-voss/todo-app",
        demo: "https://mats-todo.netlify.app",
        comingSoon: false,
        working: false,
    },
    {
        id: 5,
        title: "Discord.js Bot - Dashboard",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus blanditiis accusamus, aspernatur maiores aliquam omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus blanditiis accusamus, aspernatur maiores aliquam omnis.",
        imgURL: "https://cdn2.unrealengine.com/what-is-discord-1920x1080-c3d90ca45f57.jpg",
        github: "https://example.com",
        demo: "https://example.com",
        comingSoon: true,
        working: false,
    },
];

export { projectCars };
