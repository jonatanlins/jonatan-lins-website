import styled from "styled-components";

function Component({ children }) {
  return (
    <Container>
      <TopBorder />

      {children}

      <BottomBorder />
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  position: relative;
  padding: 1.5em 2.5em 1.5em;
  margin: 10px 0;
  box-sizing: border-box;
`;

const TopBorder = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: calc(100% - 10px);
  height: 10px;
  position: absolute;
  top: -10px;
  left: 10px;

  &:before {
    content: "";
    border-bottom: 10px solid ${(props) => props.theme.colors.primary};
    border-left: 10px solid transparent;
    position: absolute;
    left: -10px;
  }

  &:after {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.colors.contrast};
    width: 60px;
    height: 1px;
    left: calc(50% - 35px);
    top: 0;
  }
`;

const BottomBorder = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: calc(100% - 10px);
  height: 10px;
  position: absolute;
  bottom: -10px;
  right: 10px;

  &:before {
    content: "";
    border-top: 10px solid ${(props) => props.theme.colors.primary};
    border-right: 10px solid transparent;
    position: absolute;
    right: -10px;
  }

  &:after {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.colors.contrast};
    width: 60px;
    height: 1px;
    right: calc(50% - 35px);
    bottom: 0;
  }
`;

export default Component;
