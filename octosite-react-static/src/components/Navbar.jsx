import React from 'react'
import styled from 'styled-components'

export default () => (
  <nav class="nav">
    <a href="https://www.facebook.com/octatum" target="_blank">
      <i class="fa fa-facebook-square" aria-hidden="true"></i>
    </a>
    <a href="https://www.linkedin.com/company/octatum/" target="_blank">
      <i class="fa fa-linkedin-square" aria-hidden="true"></i>
    </a>
    <a data-section="email-section">
      <i class="fa fa-envelope" aria-hidden="true"></i>
    </a>
  </nav>
)