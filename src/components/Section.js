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

  &:before {
    content: "";
    position: absolute;
    width: 1px;
    background-color: ${(props) =>
      props.theme.contrastColors[props.background]};
    left: 1em;
    top: 0;
    bottom: 0;
    opacity: 0.5;
    z-index: 10;

    @media (min-width: 768px) {
      left: 2em;
    }

    @media (min-width: 1024px) {
      left: 5em;
    }
  }
`;

export default Section;
