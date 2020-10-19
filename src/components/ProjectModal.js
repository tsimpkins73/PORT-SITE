'use strict';
import React from 'react';
import Carousel from './Carousel'
import '../css/index.css'

export default class ProjectModal extends React.Component {
  
    constructor(props) {
        super(props);

        this.state = {
                projectToView: {},
           };;

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            item: nextProps.projectToView,
                    });
         }

    openProjectModal = (project) => {
       
         this.props. openProjectModal = (project);
       };

  render(){

    
    let projectToView = this.state.projectToView;
    console.log(projectToView);
  return (
    <section className={(this.props.isActive) ? 'itemInfo' : 'hidden'}> 
             <div class="PortPiece1">
            <h2>{projectToView.title}</h2>
            <img class="project-pic" src={projectToView.img} alt={projectToView.title} ></img>
            <p>{projectToView.description}
            </p>
            <a href={projectToView.liveLink} class="portfolioLinks"
               target="_blank">View Live Project</a>
            <a href={projectToView.repoLink} class="portfolioLinks"
                target="_blank">View Project Repo</a> */}
         </div>
 </section>
   );
  }
}


