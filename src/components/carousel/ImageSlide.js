'use strict';
import React from 'react';
import '../../css/index.css'

export default class ImageSlide extends React.Component {
  

   
  render(){
      const styles = {
          backgroundSize: 'cover',
          backgroundPosition: 'center'
      };
      let project = this.props.project;
      return (
          <div className="image-slide" style={styles}>
              <h2>{project.title}</h2>
        <img class="project-pic" src={project.img} alt="Web Dev Toolkit App Project" />
       {project.description}
        <a href={project.liveLink} class="portfolioLinks"
           target="_blank">View Live Project</a>
        <a href={project.repoLink} class="portfolioLinks"
            target="_blank">View Project Repo</a>
          </div>
      );
  
  }
}


