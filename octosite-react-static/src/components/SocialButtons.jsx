import React from 'react';
import styled from 'styled-components';

import { MainText } from '../styles/AppStyles';

const ButtonsLayout = styled.div`
  display: flex;
  position: absolute;
  bottom: 3.5em;
  right: 3.5em;
  width: 6.5em;
  justify-content: space-between;
`;

const SocialButton = MainText(styled.a`
  color: ${props => props.theme.mainLightText};
  text-decoration: none;
  font-size: 1.5em;
  transition: 0.3s ease-in-out all;

  &:hover {
    transform: scale(1.2) translateY(-0.2em);
    color: ${props => props.highlightColor};
  }

`);

const SocialButtons = () => (
  <ButtonsLayout> 
    <SocialButton highlightColor="#003ECB" target="_blank" href="https://behance.net/octatum" className="fab fa-behance"/>
    <SocialButton highlightColor="#3B5999" target="_blank" href="https://facebook.com/octatum" className="fab fa-facebook-square"/>
    <SocialButton highlightColor="#0077B5" target="_blank" href="https://linkedin.com/company/octatum/" className="fab fa-linkedin-in"/>
  </ButtonsLayout>
);

export default SocialButtons;