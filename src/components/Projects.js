'use strict';
import React from 'react';
import Carousel from './Carousel'
import '../css/index.css'
import '../css/projects.css'
import ProjectPreview from './ProjectPreview';
import ProjectModal from './ProjectModal';

export default class Projects extends React.Component {
  
  render(){

    let openProjectModal = this.props.openProjectModal;
      return (
    <section className={'Projects'}>
      {this.props.projects.map(function (project) {
                return <div className="projectPreviewContainer">
                    <ProjectPreview project={project} openProjectModal={openProjectModal} />
                                    </div>
            })}
               <ProjectModal isActive={this.props.isProjectModalActive}
            projects={this.props.projects}
            projectToView ={this.props.projectToView} />
         {/* <Carousel projects={this.props.projects} /> */}
 </section>
   );
  }
}


