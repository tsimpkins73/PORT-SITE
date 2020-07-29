import React, { Component } from 'react';
class RightArrow extends Component {
  render() {
    return(
      <div className='nextArrow' onClick={this.props.goToNextSlide}>
        <i className='fa fa-angle-right fa-3x' aria-hidden='true'></i>
      </div>
    )
  }
}
export default RightArrow;