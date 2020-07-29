'use strict';
import React from 'react';
import './css/index.css'
import './css/StartPage.css'

export default class Carousel extends React.Component {

    constructor (props) {
            super(props);
            
            this.state = {
                currentImageIndex: 0
            };
            
            this.nextSlide = this.nextSlide.bind(this);
            this.previousSlide = this.previousSlide.bind(this);
        }
        
        previousSlide () {
            const lastIndex = imgUrls.length - 1;
            const { currentImageIndex } = this.state;
            const shouldResetIndex = currentImageIndex === 0;
            const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
            
            this.setState({
                currentImageIndex: index
            });
        }
        
        nextSlide () {
            const lastIndex = imgUrls.length - 1;
            const { currentImageIndex } = this.state;
            const shouldResetIndex = currentImageIndex === lastIndex;
            const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    
            this.setState({
                currentImageIndex: index
            });
        }
        
        render () {
            return (
                <div className="carousel">
                    <Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
                    <ImageSlide project={ this.props.projects[this.state.currentImageIndex] } />
                    <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
                </div>
            );
        }
    }
    
    const Arrow = ({ direction, clickFunction, glyph }) => (
        <div 
            className={ `slide-arrow ${direction}` } 
            onClick={ clickFunction }>
            { glyph } 
        </div>
    );
    
    const ImageSlide = ({ project }) => {
        const styles = {
            backgroundImage: `url(${project.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        };
        
        return (
            <div className="image-slide" style={styles}>
                <h2>{project.title}</h2>
          <img class="project-pic" src=""{project.img}"" alt="Web Dev Toolkit App Project" />
         {project.description}
          <a href=""{project.liveLink}"" class="portfolioLinks"
             target="_blank">View Live Project</a>
          <a href=""{project.repoLink}"" class="portfolioLinks"
              target="_blank">View Project Repo</a>
            </div>
        );
    }
    
  }

