import React, { Component } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import AnimatedText from '../AnimatedText';
import { bounceAnimation, Section, MainText } from '../../styles/AppStyles';

import mainBgImg from '../../assets/home_main_bg.jpg';
import Fish from './S1_Fish.png';
import OctatumLogo from './S1_Logo.png';

const CreandoArteWeb = observer(MainText(styled.div.attrs({
  style: ({ratio}) => ({
    left: `calc(26.5vw - ${(ratio.x + 2) / 5}em)`,
    bottom: `calc(26vh + ${(ratio.y + 1) / 5}em)`,
  })
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

const SectionOne = observer(({mouseCoordsStore}) => ( 
  <BannerSection> 
    <LogoCircle borderWidth='5vw'/>
    <TopRightCircle borderWidth='0.1em' borderColor='white'/>
    <BackgroundFish />
    <OverFishCircle  borderWidth='0.1em' borderColor='white'/>
    <BottomLeftCircle borderWidth='0.1em' borderColor='white' />
    <CreandoArteWeb ratio={mouseCoordsStore.ratio}>
      CREANDO<HighlightedText><AnimatedText text="ARTE"/></HighlightedText>WEB
    </CreandoArteWeb>
    <TextEnter><span>ENTRAR</span></TextEnter>
  </BannerSection>
));


export default SectionOne;