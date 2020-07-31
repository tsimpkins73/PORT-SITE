'use strict';
import React from 'react';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import WorkHistory from './components/WorkHistory'
import Contact from './components/Contact'
import './css/index.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAboutMeActive: true,
      isProjectsActive: false,
      isWorkHistoryActive: false,
      isContactActive: false,
      projects: [
            {

        title: "Web Dev Toolkit App",
          img: "https://github.com/tsimpkins73/PORT-SITE/blob/master/images/WDTK-Dashboard-SC.png?raw=true",
            repoLink: "https://github.com/tsimpkins73/Web-Dev-Toolkit-Client",
              liveLink: "https://web-dev-toolkit-client.now.sh/",
                description: "Web Dev Toolkit is an aggregated resource hub. This app makes it easy for Web Developers to find learning and working resources in one location. The resources are grouped together based upon their type; Tutorials, Course, Videos, and Utilities. This app allows authorized users to visit a variety of web development resources, save favorite resources, and search through resources to find specific content. Web Dev Toolkit client was built using React and vanilla HTML & CSS.It utilizes React - Router and other functions to navigate through content choices and manipulation.The custom Web Dev Toolkit API was built using Node, PostgreSQL, knex, and Express.It also utilizes chai & Mocha as testing methods.",
            },
    {

        title: "theConsole Web Development Blog",
          img: "https://github.com/tsimpkins73/PORT-SITE/blob/master/images/theConsole-Dashboard-SC.png?raw=true",
            repoLink: "https://github.com/tsimpkins73/theConsole",
              liveLink: "https://theconsole-thankful-cassowary.now.sh/",
                description: "theConsole is a blog dedicated to republishing articles useful to and centered around web development. This app allows authorized users to read articles, save favorite articles, and comment on articles.The user can also search for articles or peruse articles based on their category. theConsole client was built using React and vanilla HTML & CSS.It utilizes React - Router and other functions to navigate through content choices and manipulation.The custom theConsole API was built using Node, PostgreSQL, knex, and Express.It also utilizes chai & Mocha as testing methods.",
    },
    {
      title: "Flipping Wars",
          img: "https://raw.githubusercontent.com/tsimpkins73/PORT-SITE/master/images/FlippingAppScreenshot.png",
            repoLink: "https://github.com/tsimpkins73/Flipping-Game",
              liveLink: "https://flipping-wars.vercel.app/",
                description: " <p>A buying and selling game where you buy low and (hopefully) sell high. It is built with HTML5, CSS, JavaScript, & React. </p>",
            },
    {

        title: "Marvel Character Search App Project",
          img: "https://raw.githubusercontent.com/tsimpkins73/PORT-SITE/master/images/CharacterSearchAppScreenshot.png",
            repoLink: "https://github.com/tsimpkins73/Marvel-Character-Search-App",
              liveLink: "https://tsimpkins73.github.io/Marvel-Character-Search-App/",
                description: "<p>This is a character search app that returns images, storylines and other information about the searched character. The search functionality retrieves information from the Marvel API(https: //developer.marvel.com) & the Movie Database API (https: //developers.themoviedb.org/3). This page was built with HTML5, CSS, Javascript, & Jquery. </p>",
                }, 
                {

        title: "Marvel Quiz App",
          img: "https://repository-images.githubusercontent.com/193247239/5c9a6380-98e7-11e9-99c1-e985be06553d",
            repoLink: "https://github.com/tsimpkins73/Web-Dev-Toolkit-Clienthttps://github.com/tsimpkins73/Quiz-App",
              liveLink: "https://tsimpkins73.github.io/Quiz-App//",
                description: "This is a functional quiz app built with HTML5, CSS, Javascript, & Jquery.",
                }
      ]
  }
};


aboutMeButton = () => {

  this.setState({
    isAboutMeActive: true,
    isProjectsActive: false,
    isWorkHistoryActive: false,
    isContactActive: false,
  })
};

projectsButton = () => {

  this.setState({
    isAboutMeActive: false,
    isProjectsActive: true,
    isWorkHistoryActive: false,
    isContactActive: false,
  })
};

workHistoryButton = () => {

  this.setState({
    isAboutMeActive: false,
    isProjectsActive: false,
    isWorkHistoryActive: true,
    isContactActive: false,
  })
};

contactButton = () => {

  this.setState({
    isAboutMeActive: false,
    isProjectsActive: false,
    isWorkHistoryActive: false,
    isContactActive: true,
  })
};      


render() {
  return (
    <div class="container" >
      <nav id="navbar">
      <ul id="navList">
         <li class="navbartext"><a onClick={() => this.aboutMeButton()} >About</a></li>
         <li class="navbartext"><a onClick={() => this.projectsButton()}>Projects</a></li>
         <li class="navbartext"><a onClick={() => this.workHistoryButton()}>Experience</a></li>
         <li class="navbartext"><a href="mailto:t73designs@yahoo.com" target="_blank">t73designs@yahoo.com</a>
         | <a href="https://github.com/tsimpkins73" target="_blank">Github</a> | <a
            href="https://www.linkedin.com/in/travis-simpkins/" target="_blank">LinkedIn</a></li>
      </ul>
   </nav>
    <AboutMe isActive={this.state.isAboutMeActive} /> 
    <Projects isActive={this.state.isProjectsActive} projects={this.state.projects} /> 
    <WorkHistory isActive={this.state.isWorkHistoryActive} /> 
    <Contact isActive={this.state.isContactActive} /> 
    <footer>
      <p id="footertext" > Designed and Coded by Travis Simpkins• < a href="mailto:t73designs@yahoo.com" target="_blank" > t73designs @yahoo.com </a></p>
        </footer>
         </div>
            );
          }
        }