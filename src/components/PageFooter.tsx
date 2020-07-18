import Color from "color";
import styled from "styled-components";

const StyledPageFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.accent};
  text-align: center;
  padding: 4em 1em;
  font-size: 0.8em;
  color: ${(props) => Color(props.theme.colors.contrast).alpha(0.75)};
`;

export default StyledPageFooter;
