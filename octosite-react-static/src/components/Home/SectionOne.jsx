import React, { Component } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import AnimatedText from '../AnimatedText';
import { bounceAnimation, Section, MainText } from '../../styles/AppStyles';

import mainBgImg from '../../assets/home_main_bg.jpg';


const CreandoArteWeb = observer(MainText(styled.div.attrs({
  style: ({ratio}) => {
    
    return {
      left: `calc(26.5vw - ${(ratio.x + 2) / 5}em)`,
      bottom: `calc(26vh + ${(ratio.y + 1) / 5}em)`,
    };
  }
})`
  font-size: 3.5em;
  font-weight: 700;
  max-width: 500px;
  overflow-wrap: break-word;
  overflow: hidden;
  position: absolute;
  left: 26.5vw;
  bottom: 26vh;
  line-height: 0.75em;
  letter-spacing: 0.55em;
`));

const TextEnter = MainText(styled.div`
  position: absolute;
  left: 38vw;
  bottom: 16vh;
  font-size: 0.8em;
  letter-spacing: 0.55em;
  margin-right: -0.55em;
  text-align: center;
  display: flex;
  justify-content: center;

  & > span {
    animation: ${bounceAnimation} 3s infinite;

    &::after {
      content: "";
      height: 2px;
      width: 60%;
      left: 18%;
      background: ${props => props.theme.mainHighlight};
      bottom: -0.7em;
      position: absolute;
    }
  }
`);

const BannerSection = Section.extend`
  background: url(${mainBgImg}) no-repeat right bottom;
  background-size: cover;
  background-color: black;
`;

const HighlightedText = styled.span`
  color: ${props => props.theme.mainHighlight};
`;

const SectionOne = observer(({mouseCoordsStore}) => ( 
  <BannerSection> 
    <CreandoArteWeb ratio={mouseCoordsStore.ratio}>
      CREANDO<HighlightedText><AnimatedText text="ARTE"/></HighlightedText>WEB
    </CreandoArteWeb>
    <TextEnter><span>ENTRAR</span></TextEnter>
  </BannerSection>
));


export default SectionOne;