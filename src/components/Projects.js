'use strict';
import React from 'react';
import './css/index.css'
import './css/StartPage.css'

export default class Projects extends React.Component {
  
  render(){
  return (
    <section id="Projects">
    <Carousel projects={this.props.projects} />
 </section>
   );
  }
}

export default Projects;
