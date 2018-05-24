import styled, { keyframes } from 'styled-components';

export const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(0.5em);
  }
`;

export const Section = styled.section`
  min-height: 600px;
  height: 100vh;
  max-height: 800px;
`;

export const MainText = Component => styled(Component)`
  color: ${props => props.theme.mainLightText};
  font-family: ${props => props.theme.mainTextFontFamily};
`;