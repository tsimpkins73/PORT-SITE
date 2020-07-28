'use strict';
import React from 'react';
import './css/index.css'
import './css/StartPage.css'

export default class Projects extends React.Component {
  
  render(){
  return (
    <section id="Projects">
    <h2>Web Development Projects</h2>
    <div id="projects-container">
       <div class="PortPiece1">
          <h2>Web Dev Toolkit App</h2>
          <img class="project-pic" src="https://github.com/tsimpkins73/PORT-SITE/blob/master/images/WDTK-Dashboard-SC.png?raw=true" alt="Web Dev Toolkit App Project" />
          <p>Web Dev Toolkit is an aggregated resource hub. This app makes it easy for Web Developers to find learning
             and working resources in one location. The resources are grouped together based upon their type;
             Tutorials, Course, Videos, and Utilities. This app allows authorized users to visit a variety of web
             development resources, save favorite resources, and search through resources to find specific content.
             <br></br>
             Web Dev Toolkit client was built using React and vanilla HTML & CSS. It utilizes React-Router and other
             functions to navigate through content choices and manipulation. The custom Web Dev Toolkit API was built
             using Node, PostgreSQL, knex, and Express. It also utilizes chai & Mocha as testing methods.
          </p>
          <a href="https://web-dev-toolkit-client.now.sh/" class="portfolioLinks"
             target="_blank">View Live Project</a>
          <a href="https://github.com/tsimpkins73/Web-Dev-Toolkit-Client" class="portfolioLinks"
              target="_blank">View Project Repo</a>
       </div>

       <div class="PortPiece1">
          <h2>theConsole Web Development Blog</h2>
          <img class="project-pic" src="https://github.com/tsimpkins73/PORT-SITE/blob/master/images/theConsole-Dashboard-SC.png?raw=true" alt="theConsole Web Development Blog Project" />
          <p>theConsole is a blog dedicated to republishing articles useful to and centered around web development.
             This app allows authorized users to read articles, save favorite articles, and comment on articles. The
             user can also search for articles or peruse articles based on their category.
            
             theConsole client was built using React and vanilla HTML & CSS. It utilizes React-Router and other
             functions to navigate through content choices and manipulation. The custom theConsole API was built
             using Node, PostgreSQL, knex, and Express. It also utilizes chai & Mocha as testing methods.</p>
          <a href="https://theconsole-thankful-cassowary.now.sh/" class="portfolioLinks"
            target="_blank">View Live Project</a>
          <a href="https://github.com/tsimpkins73/theConsole" class="portfolioLinks"
             target="_blank">View Project Repo</a>
       </div>

       <div class="PortPiece1">
          <h2>Flipping Wars</h2>
          <img src="https://raw.githubusercontent.com/tsimpkins73/PORT-SITE/master/images/FlippingAppScreenshot.png"
             alt="Flipping Wars Preview" width="75%" height="75%" />
          <p>A buying and selling game where you buy low and (hopefully) sell high. It is built with HTML5, CSS, JavaScript, & React. </p>
          <a href="https://flipping-wars.vercel.app/" class="portfolioLinks"
             alt="Flipping Wars Link" target="_blank">View Live Project</a>
          <a href="https://github.com/tsimpkins73/Flipping-Game" class="portfolioLinks"
             alt="Flipping Wars Repo Link" target="_blank">View Project Repo</a>
       </div>

       <div class="PortPiece1">
          <h2>Marvel Character Search App Project</h2>
          <img class="project-pic" src="https://raw.githubusercontent.com/tsimpkins73/PORT-SITE/master/images/CharacterSearchAppScreenshot.png" alt="Marvel Character Search App Project" />
          <p>This is a character search app that returns images, storylines and other information about the searched character. The search functionality
             retrieves information from the Marvel API (https://developer.marvel.com) & the Movie Database API
             (https://developers.themoviedb.org/3).
          
          This page was built with HTML5, CSS, Javascript, & Jquery.
       </p>
          <a href="https://tsimpkins73.github.io/Marvel-Character-Search-App/" class="portfolioLinks"
          target="_blank">View Live Project</a>
          <a href="https://github.com/tsimpkins73/Marvel-Character-Search-App" class="portfolioLinks"
             target="_blank">View Project Repo</a>
       </div>

       <div class="PortPiece1">
          <h2>Quiz App Project</h2>
          <img class="project-pic" src="https://repository-images.githubusercontent.com/193247239/5c9a6380-98e7-11e9-99c1-e985be06553d" alt="Quiz App Project Preview" />
          <p>This is a functional quiz app built with HTML5, CSS, Javascript, & Jquery.</p>
          <a href="https://tsimpkins73.github.io/Quiz-App/" class="portfolioLinks"
             target="_blank">View Live Project</a>
          <a href="https://github.com/tsimpkins73/Quiz-App" class="portfolioLinks"
             target="_blank">View Project Repo</a>
       </div>
    </div>
 </section>
   );
  }
}

export default Projects;
