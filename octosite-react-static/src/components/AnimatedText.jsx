import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const AnimatedLetter = styled.span`
  transition: 700ms linear all;
  opacity: ${props => props.step < props.index ? 0 : 1};
`;

class AnimatedText extends Component {
  state = {
    step: 0
  }

  timer = () => {
    const step = this.state.step + 1;
    this.setState({step});

    if(this.state.step > this.props.text.length) {
      clearInterval(this.interval);
    }
  }

  componentDidMount() {
    const self = this;
    setTimeout(() => {
      self.interval = setInterval(self.timer, 400)
    }, 600);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render = () => (this.props.text).split("").map((letter, index) => (
    <AnimatedLetter key={index} index={index + 1} step={this.state.step}>{letter}</AnimatedLetter>
  ))

}

export default AnimatedText;