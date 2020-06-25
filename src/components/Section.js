import styled from "styled-components";

const Section = styled.section`
  padding: 6em 2em;
  box-sizing: border-box;
  position: relative;
  background-color: ${(props) => props.theme.colors[props.background]};
  color: ${(props) => props.theme.contrastColors[props.background]};

  @media (min-width: 768px) {
    padding: 7em 4em;
  }

  @media (min-width: 1024px) {
    padding: 8em 10em;
  }
`;

export default Section;
