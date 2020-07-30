'use strict';
import React from 'react';
import Carousel from './Carousel'
import '../css/index.css'

export default class Projects extends React.Component {
  
  render(){
  return (
    <section className={(this.props.isActive) ? 'Projects' : 'hidden'}>
    <Carousel projects={this.props.projects} />
 </section>
   );
  }
}


