import React from 'react'
import styled from 'styled-components';

import Octopus from './S1_Octopus.png';

import { bounceAnimation, Section, MainText } from '../../styles/AppStyles';

const Layout = Section.extend`
  background-color: ${props => props.theme.darkBackground};
  background-image: url(${Octopus});
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: auto 100%;
`;

const TextSection = styled.div`
  position: absolute;
  top: 25vh;
  right: 7vh;
  width: 57.5%;
  display: flex;
  flex-direction: column;
`;

const Nosotros = MainText(styled.h1`
  &::first-letter {
    color: ${props => props.theme.mainHighlight}
  }

  & > span {
    letter-spacing: 0em;      
  }

  text-transform: uppercase;
  font-weight: 700;
  font-size: 4.8em;
  letter-spacing: 0.13em;  
  text-align: right;
`);

const AboutUsText = MainText(styled.p`
  margin-top: 1.5em;
  letter-spacing: 0.25em;
  font-size: 1.1em;
  line-height: 2em;
  text-align: right;
`);

const OurTeam = AboutUsText.extend`
  align-self: flex-end;
  justify-self: flex-end;
  width: 90%;
`;

const HighlightText = styled.span`
  color: ${props => props.theme.mainHighlight};
`;

const ItalicText = styled.span`
  font-style: italic;
`;

export default () => (
  <Layout>
    <TextSection> 
      <Nosotros>nosotro<span>s</span></Nosotros>
      <AboutUsText>Sabemos que empezar un negocio requiere mucha responsabilidad y que el tiempo <ItalicText>nunca</ItalicText> es suficiente.</AboutUsText>
      <OurTeam>Por eso, en Octatum nos encargamos de tu sitio web y, junto con un equipo de artistas y programadores, ofrecemos una <HighlightText>grata experiencia</HighlightText> para ti y tus clientes.</OurTeam>
    </TextSection>
  </Layout> 
);