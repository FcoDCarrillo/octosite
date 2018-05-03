import React, { Component } from 'react';

import { throttle } from '../utils/functions';

class MouseCoordsWrapper extends Component {
  state = {
    mouseX: 0,
    mouseY: 0,
    ratio: {
      X: 0,
      Y: 0,
    }
  }

  handleMouseMove = (event) => {
    this.setState({
      mouseX: event.screenX,
      mouseY: event.screenY,
      ratio: {
        x: event.screenX / window.innerWidth,
        y: event.screenY / window.innerHeight,
      }
    });
  }
  
  componentDidMount() {
    window.addEventListener("mousemove", throttle(this.handleMouseMove, 1000 / 45));
  }

  render = () => this.props.render(this.state)
}

export default MouseCoordsWrapper;