'use strict';
import React from 'react';
import '../css/index.css'

export default class Contact extends React.Component {
  
  render(){
  return (
   <section  className={(this.props.isActive) ? 'Contact' : 'hidden'}>
      <h2 class="contactLinks"><a href="mailto:t73designs@yahoo.com" target="_blank">Email: t73designs@yahoo.com</a>
         | <a href="https://github.com/tsimpkins73" target="_blank">Github</a> | <a
            href="https://www.linkedin.com/in/travis-simpkins/" target="_blank">LinkedIn</a></h2>
       </section>
  );
  }
}


