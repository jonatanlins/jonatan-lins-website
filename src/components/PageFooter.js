import React from "react";
import styled from "styled-components";
import Color from "color";

const PageFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.accent};
  text-align: center;
  padding: 4em 0;
  font-size: 0.8em;
  color: ${(props) => Color(props.theme.colors.contrast).alpha(0.75)};
`;

export default PageFooter;
