'use strict';
import React from 'react';
import AboutMe from './components/AboutMe'
import Projects from './components/FinishPage'
import WorkHistory from './components/WorkHistory'
import Contact from './components/Contact'
import './css/index.css'
import './css/StartPage.css'

export default class App extends React.Component {
  
  render(){
  return (
    <div class="container">
                <AboutMe isActive={this.state.isAboutMeActive}/>
                <Projects isActive={this.state.isProjectsActive}/>
                <WorkHistory isActive={this.state.isWorkHistoryActive}/>
                <Contact isActive={this.state.isContactActive}/>            
    </div>
  );
  }
}

export default App;
