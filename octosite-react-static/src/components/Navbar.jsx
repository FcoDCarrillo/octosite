import React from 'react';
import styled from 'styled-components';

export default () => (
  <nav className="nav">
    <a href="https://www.facebook.com/octatum" target="_blank">
      <i className="fa fa-facebook-square" aria-hidden="true"></i>
    </a>
    <a href="https://www.linkedin.com/company/octatum/" target="_blank">
      <i className="fa fa-linkedin-square" aria-hidden="true"></i>
    </a>
    <a data-section="email-section">
      <i className="fa fa-envelope" aria-hidden="true"></i>
    </a>
  </nav>
);