import styled from "styled-components";
import cn from "classnames";

function Component({ children, primary, type, onClick }) {
  return (
    <Button className={cn({ primary })} type={type} onClick={onClick}>
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
  outline: none;

  &:before,
  &:after {
    content: "";
    position: absolute;
    border: 1px solid ${(props) => props.theme.colors.contrast};
    height: 30px;
    box-sizing: border-box;
    left: 0;
    right: 0;
    transition: all 0.2s linear;
  }

  &:before {
    top: 0;
    border-bottom: none;
  }

  &:after {
    bottom: 0;
    border-top: none;
  }

  &:hover {
    & > div {
      color: ${(props) => props.theme.colors.contrast};

      &:before {
        left: -10%;
      }

      &:after {
        background-color: ${(props) => props.theme.colors.contrast};
      }
    }
  }

  &:focus {
    &:before,
    &:after {
      padding: 3px;
      margin: -3px;
    }
  }
`;

const OutterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.contrast};
  color: ${(props) => props.theme.colors.primary};
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

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100px;
    background-color: red;
    transform: skew(-10deg);
    background-color: ${(props) => props.theme.colors.primary};
    width: 120%;
    left: -130%;
    transition: left 0.3s ease;
  }

  &:after {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    bottom: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.primary};
    transition: background-color 0.3s ease;
  }

  button.primary & {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.contrast};

    &:before {
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const InnerContainer = styled.div`
  z-index: 1;
  user-select: none;
`;

export default Component;
