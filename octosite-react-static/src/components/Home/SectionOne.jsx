import React, { Component } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import AnimatedText from '../AnimatedText';
import { bounceAnimation, Section, MainText } from '../../styles/AppStyles';

import Fish from './S1_Fish.png';
import OctatumLogo from './S1_Logo.png';

const marginToRight = 26.5;

const CreandoArteWeb = observer(MainText(styled.div.attrs({
  style: ({ratio}) => ({
    right: `calc(${marginToRight}vw - ${(ratio.x + 2) / 5}em)`,
    bottom: `calc(15vh + ${(ratio.y - 0.5) * 2}vh)`,
  })
})`
  font-size: 3.5em;
  font-weight: 700;
  max-width: 500px;
  overflow-wrap: break-word;
  position: absolute;
  right: ${marginToRight}vw;
  bottom: 15vh;
  line-height: 0.75em;
  letter-spacing: 0.5em;
`));

const StandardCircle = styled.div`
  position: absolute;
  box-shadow: ${props => `inset 0 0 0 ${props.borderWidth} 
                                      ${props.borderColor ? props.borderColor : props.theme.mainHighlight}` };
  border-radius: 100%;
`;

const LogoCircle = StandardCircle.extend`
  left: -8%;
  top: -20%;
  width: 35vw;
  height: 35vw;
  min-height: 400px;
  min-width: 400px;
  background: url(${OctatumLogo}) no-repeat center center;
  background-size: 45%;
`;

const DottedCircle = StandardCircle.extend`
  &::after {
    content: "";
    position: absolute;
    width: 5%;
    height: 5%;
    background-color: ${props => props.theme.mainHighlight};
    border-radius: 100%;
    top: 47.5%;
    left: 47.5%;
  }
`;

const BottomLeftCircle = DottedCircle.extend`
  bottom: -18%; 
  left: -3%;
  width: 22.5vw;
  height: 22.5vw;
  min-height: 250px;
  min-width: 250px;
`;

const TopRightCircle = DottedCircle.extend`
  top: -18%; 
  right: -3%;
  width: 30vw;
  height: 30vw;
  min-height: 250px;
  min-width: 250px;
`;

const OverFishCircle = StandardCircle.extend`
  top: 15%;
  right: 15%;
  width: 22.5vw;
  height: 22.5vw;
  min-height: 200px;
  min-width: 200px;
`;

const TextEnter = MainText(styled.div`
  font-size: 0.8em;
  letter-spacing: 0.55em;
  font-size: 0.25em;
  margin-right: 3em;
  text-align: center;
  display: flex;
  justify-content: center;
  padding-top: 1em;

  & > span {
    animation: ${bounceAnimation} 3s infinite;

    &::after {
      content: "";
      height: 2px;
      width: 60%;
      left: 18%;
      background: ${props => props.theme.mainHighlight};
      bottom: -0.3em;
      position: absolute;
    }
  }
`);

const BannerSection = Section.extend`
  position: relative;
  background: black;
  overflow: hidden;
`;

const HighlightedText = styled.span`
  color: ${props => props.theme.mainHighlight};
`;

const BackgroundFish = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${Fish}) bottom right no-repeat;
  background-size: 35vw;
`;

const TextReposition = styled.span`
  position: relative;
  bottom: 0.1em;
`;

const circleBreadth = "0.05em"

const SectionOne = observer(({mouseCoordsStore}) => ( 
  <BannerSection> 
    <LogoCircle borderWidth='5vw'/>
    <TopRightCircle borderWidth={circleBreadth} borderColor='white'/>
    <BackgroundFish />
    <OverFishCircle  borderWidth={circleBreadth} borderColor='white'/>
    <BottomLeftCircle borderWidth={circleBreadth} borderColor='white' />
    <CreandoArteWeb ratio={mouseCoordsStore.ratio}>
      CREANDO
      <TextReposition><HighlightedText><AnimatedText text="ARTE"/></HighlightedText>WEB</TextReposition>
      <TextEnter><span>ENTRAR</span></TextEnter>
    </CreandoArteWeb>
  </BannerSection>
));


export default SectionOne;