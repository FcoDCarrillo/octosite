import React, { Component } from 'react';
import styled from 'styled-components';
import { withSiteData } from 'react-static';
import { observer } from 'mobx-react';


import MouseCoordsStore from '../stores/MouseCoordsStore';
import SectionOne from '../components/Home/SectionOne';
import { throttle } from '../utils/functions';


const Layout = styled.main`
  display: flex;
  flex-direction: column;
`;

@observer
class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.mouseCoordsStore = new MouseCoordsStore();
  }

  componentDidMount() {
    this.handleMouseMovement = throttle((event) => this.mouseCoordsStore.setMouseCoords(event), 1000 / 45);
    window.addEventListener("mousemove", this.handleMouseMovement);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMovement);
  }

  render() {
    return (
      <Layout>
        <SectionOne mouseCoordsStore={this.mouseCoordsStore}/>
      </Layout>
    );
  }
}

export default withSiteData(HomeScreen);
