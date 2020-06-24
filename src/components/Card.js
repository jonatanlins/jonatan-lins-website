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
  background-color: #0f1923;
  position: relative;
  padding: 0.5em 2.5em 1.5em;
  box-sizing: border-box;
`;

const TopBorder = styled.div`
  background-color: #0f1923;
  width: calc(100% - 10px);
  height: 10px;
  position: absolute;
  top: -10px;
  left: 10px;

  &:before {
    content: "";
    border-bottom: 10px solid #0f1923;
    border-left: 10px solid transparent;
    position: absolute;
    left: -10px;
  }

  &:after {
    content: "";
    position: absolute;
    background-color: #ece8e1;
    width: 60px;
    height: 1px;
    left: calc(50% - 35px);
    top: 0;
  }
`;

const BottomBorder = styled.div`
  background-color: #0f1923;
  width: calc(100% - 10px);
  height: 10px;
  position: absolute;
  bottom: -10px;
  right: 10px;

  &:before {
    content: "";
    border-top: 10px solid #0f1923;
    border-right: 10px solid transparent;
    position: absolute;
    right: -10px;
  }

  &:after {
    content: "";
    position: absolute;
    background-color: #ece8e1;
    width: 60px;
    height: 1px;
    right: calc(50% - 35px);
    bottom: 0;
  }
`;

export default Component;
