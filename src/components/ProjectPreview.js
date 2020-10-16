'use strict';
import React from 'react';
import Carousel from './Carousel'
import '../css/index.css'

export default class ProjectPreview extends React.Component {
  
    openProjectModal = (project) => {
        
         this.props. openProjectModal = (project);
       };

  render(){

    
    let project =this.props.project;
  return (
    
    <section className="ProjectPreview">
             <div class="PortPiece1">
            <h2>project.name}</h2>
            <img class="project-pic" src={project.image} alt={project.name} ></img>
            <p>{project.summary}
            </p>
            <button className= 'openProject' onClick={() =>this.openProjectModal(this.project)} name="buy" value="Buy">Buy</button>

            <a href="https://web-dev-toolkit-client.now.sh/" class="portfolioLinks"
               target="_blank">View Live Project</a>
            <a href="https://github.com/tsimpkins73/Web-Dev-Toolkit-Client" class="portfolioLinks"
                target="_blank">View Project Repo</a>
         </div>
 </section>
   );
  }
}


