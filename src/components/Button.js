import styled from "styled-components";
import cn from "classnames";

function Component({ children, primary }) {
  return (
    <Button className={cn({ primary })}>
      <OutterContainer>
        <InnerContainer>{children}</InnerContainer>
      </OutterContainer>
    </Button>
  );
}

const Button = styled.button`
  height: 68px;
  background-color: transparent;
  border: none;
  position: relative;
  box-sizing: border-box;
  padding: 7px;
  cursor: pointer;
  font-size: 1em;
  margin: 8px 0;
  font-family: inherit;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border: 1px solid #ece8e1;
    height: 30px;
    box-sizing: border-box;
    left: 0;
    right: 0;
  }

  &::before {
    top: 0;
    border-bottom: none;
  }

  &::after {
    bottom: 0;
    border-top: none;
  }

  &:hover {
    & > div {
      color: #ece8e1;

      &::before {
        left: -10%;
      }

      &::after {
        background-color: #ece8e1;
      }
    }
  }

  &.primary {
    & > div {
      background-color: #ff4655;
      color: #ece8e1;

      &::before {
        background-color: #0f1923;
      }
    }
  }
`;

const OutterContainer = styled.div`
  background-color: #ece8e1;
  color: #0f1923;
  height: 100%;
  text-transform: uppercase;
  vertical-align: center;
  padding: 0 3em;
  font-weight: bold;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: color 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100px;
    background-color: red;
    transform: skew(-10deg);
    background-color: #0f1923;
    width: 120%;
    left: -130%;
    transition: left 0.3s ease;
  }

  &::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    bottom: 0;
    right: 0;
    background-color: #0f1923;
    transition: background-color 0.3s ease;
  }
`;

const InnerContainer = styled.div`
  z-index: 1;
`;

export default Component;
