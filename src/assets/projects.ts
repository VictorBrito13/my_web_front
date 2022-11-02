export interface ProjectInterface{
    title:string,
    img:string,
    description:string,
    link:string,
    techs: Array<string>
}

export const projects: ProjectInterface[] = [
    {
        title: 'Pizzeria',
        img: './assets/imgs/projects/project6.webp',
        description: `
            This is my first angular project working with some basics features, FormsModule, HTTPClientModule
            for call the API that I create with nodeJS and Express. This API is a simple CRUD.
            MongoDB is the db for this project.
        `,
        link: '',
        techs: ['bxl-angular','bxl-nodejs', 'bxl-mongodb']
    },
    {
        title: 'Your Art',
        img: './assets/imgs/projects/project1.webp',
        description: `It's my first complete web app, is not a simple CRUD also we can follower the users,
        give likes to the posts the endpoints are protected by some middlewares and also use JWT for the users
        validation, and videos. The API is also make it with NodeJs and Express.
        MongoDB is the db for this project.`,
        link: '',
        techs: ['bxl-angular','bxl-nodejs', 'bxl-mongodb']
    },
    {
        title: 'Platzi fake store',
        img: './assets/imgs/projects/project2.webp',
        description: `
            For this project I do not use a own API, I use the Platzi fake store API, the front-end is make it
            only with JS, HTML and CSS.
            `,
        link: '',
        techs: ['bxl-css3', 'bxl-html5', 'bxl-javascript']
    },
    {
        title: 'Personal web',
        img: './assets/imgs/projects/project3.webp',
        description: 'This is my personal web make it with Angular',
        link: '',
        techs: ['bxl-angular']
    },
    {
        title: 'A little web project',
        img: './assets/imgs/projects/project4.webp',
        description: 'Make it with JS, HTML, and CSS',
        link: '',
        techs: ['bxl-css3', 'bxl-html5', 'bxl-javascript']
    },
    {
        title: 'Employees controller',
        img: './assets/imgs/projects/project5.webp',
        description: 'It is a web page make it with HTML, CSS and JS. The back-end is make it with nodeJS and Express',
        link: '',
        techs: ['bxl-css3', 'bxl-html5', 'bxl-javascript']
    },
]