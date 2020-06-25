import styled from "styled-components";

const PageHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 5em;
  background-color: ${(props) => props.theme.colors.accent};
  z-index: 100;
`;

export default PageHeader;
