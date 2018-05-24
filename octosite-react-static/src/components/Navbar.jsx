import React from 'react';
import styled from 'styled-components';
import { Link as _Link } from 'react-static';

import { MainText } from '../styles/AppStyles';

import LogoSrc from '../assets/logo-octatum.svg';

const Navsection = styled.nav`
  position: fixed;
  z-index: 1;
  display: flex;
  width: 100vw;
  max-height: 10vh;
  min-height: 75px;
  padding: calc(10vh / 2) 0;
`;

const Link = styled(_Link)`
  text-decoration: none;
  color: ${props => props.theme.mainLightText};
  transition: 0.3s ease-in-out all;
  position: relative;

  &:visited {
    text-decoration: none;
  }

  &:not(.no-after) {
    &::after {
      content: "";
      position: absolute;
      bottom: -0.5em;
      left: 10%;
      width: 75%;
      height: 2px;
      background: ${props => props.activeColor};
      transform: scaleX(0);
      transition: 0.3s ease-in-out color, 
                  0.3s ease-in-out transform;
    }

    &:not(.active):hover::after {
      transform: scaleX(1);
    }
  }

  &.active { 
    color: ${props => props.activeColor};
  }
`;

const Logo = styled.img`
  margin-left: 20px;
  width: 160px;
  height: 100%;
`;

const Links = MainText(styled.ul`
  display: flex;
  flex: 1;
  max-width: calc(50% - 4em);
  text-align: center;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;

`);

const ListElement = styled.li`
  font-size: 1em;
  letter-spacing: 0.3em;
`;

const Navbar = () => (
  <Navsection>
    <Link exact to="/" className="no-after"><Logo src={LogoSrc} alt="octatum logo"/></Link>
    <Links>
      <ListElement><Link to="/Nosotros" activeColor="red" activeClassName="active">nosotros</Link></ListElement>
      <ListElement><Link to="/Servicios" activeColor="cyan" activeClassName="active">servicios</Link></ListElement>
      <ListElement>portafolio</ListElement>
      <ListElement>contacto</ListElement>
    </Links>
  </Navsection>
);

export default Navbar;