import styled from "styled-components";

const Container = styled.div`
  margin-top: 5em;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.contrast};
`;

export default Container;
