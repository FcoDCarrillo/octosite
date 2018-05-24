import React, { Component } from 'react';
import styled from 'styled-components';
import { withSiteData } from 'react-static';

import SectionOne from '../components/AboutUs/SectionOne';

const Layout = styled.main`
  display: flex;
  flex-direction: column;
`;

const AboutUs = () => (
  <Layout>
    <SectionOne/>
  </Layout>
);

export default withSiteData(AboutUs);
