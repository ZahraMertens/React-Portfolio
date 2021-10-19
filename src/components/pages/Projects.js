import React from "react";
import "../../styles/Projects.css";
import ProjectCard from "./pageComponents/ProjectCard";
import GrannyCrush from "../../assets/images/granny-crush.gif";
import Cocktail from "../../assets/images/cocktail.gif";
import Fitness from "../../assets/images/fitness-tracker.gif";
import Budget from "../../assets/images/budget-tracker.gif";
import Tech from "../../assets/images/tech-blog.gif";
import Weather from "../../assets/images/weather.gif";

const cardContent = [
  {
    id: 1,
    image: GrannyCrush,
    title: "Granny Crush",
    describtion: `Granny Crush is a full-stack web application powered by many different technologies such as 
    node.js, express.js, mySQL, sequelize, Socket.io, multer and many more.
    The app is a dating app for elderly where users can sign up or login, search for other users by their age,
    gender and postcode, can search for a match or can remove a match, as well as uploading a profile image and
    joining real time chat rooms to communicate with others.`,
    GitUrl: "https://github.com/ZahraMertens/granny-crush.git",
    AppUrl: "https://obscure-dusk-34538.herokuapp.com/login",
  },
  {
    id: 2,
    image: Cocktail,
    title: "Cocktail Hub",
    describtion: `The web application Cocktail Hub allows the user to search for hundreds of cocktails made with their 
    favorite spirit. All cocktails come with an image, ingredients and receipt. The main technology is fetching data from 
    a rest API. `,
    GitUrl: "https://github.com/ZahraMertens/Project-1.git",
    AppUrl: "https://zahramertens.github.io/Project-1/",
  },
  {
    id: 3,
    image: Fitness,
    title: "Fitness Tracker",
    describtion: `The Fitness Tracker app allows the user to track and create workouts. It is possible to add exercises to a workout 
    and display them on graphs. The application is created with a MongoDB database to dynamically connect frontend to backend. `,
    GitUrl: "https://github.com/ZahraMertens/Fitness-Tracker.git",
    AppUrl: "https://fitness-tracker182.herokuapp.com/?id=615aa25006ece646e03c3d98",
  },
  {
    id: 4,
    image: Budget,
    title: "Budget Tracker",
    describtion: `The Budget Tracker is a PWA (Progressive Web Application) which is created with indexedDB, web mannifest and service worker
    and allows a user to install the application on a desktop or phone and works offline. A user can track its expenses by adding and substracting
    funds which get displayed in a graph.`,
    GitUrl: "https://github.com/ZahraMertens/Budget-Tracker.git",
    AppUrl: "https://sheltered-mountain-98720.herokuapp.com/",
  },
  {
    id: 5,
    image: Tech,
    title: "Tech Blog",
    describtion: `The Tech Blog was my first real full stack web app. It is an app to login and signup to an account, post to a blog 
    comment blog posts and create & update your own. It dynamically connects frontend and backend in order to create a unique user experience.`,
    GitUrl: "https://github.com/ZahraMertens/Tech-Blog.git",
    AppUrl: "https://serene-escarpment-55797.herokuapp.com/",
  },
  {
    id: 6,
    image: Weather,
    title: "Weather App",
    describtion: `The Weather Dashboard is a pure frontend web app interacting with the open weather API in order to fetch data. 
    A user can search for any city and will see the current weather conditions and a five day forecast. Data gets stored in the local storage in order to 
    remember the last search.`,
    GitUrl: "https://github.com/ZahraMertens/Weather-Dashboard.git",
    AppUrl: "https://zahramertens.github.io/Weather-Dashboard/",
  },
];

export default function Projects() {
  return (
    <div className="projectsPage">
      <div className="projects-wrapper">
        <div className="row justify-content-center">
          <div className="projects-header-container">
            <div className="row justify-content-center">
              <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-5 col-xs-6 col-8">
                <p className="projects-header">Projects</p>
              </div>
            </div>
          </div>
          <div className="projects-container">
              <ProjectCard cardContent={cardContent}/>
          </div>
        </div>
      </div>
    </div>
  );
}
