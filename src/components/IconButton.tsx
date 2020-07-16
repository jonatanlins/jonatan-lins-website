import React from "react";
import styled from "styled-components";

export type Props = {
  icon: React.ComponentType;
} & React.PropsWithoutRef<JSX.IntrinsicElements["button"]>;

function Component({ icon: Icon, ...otherProps }: Props): JSX.Element {
  return (
    <Button {...otherProps}>
      <Details>
        <Icon />
      </Details>
    </Button>
  );
}

const Button = styled.button`
  position: relative;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
  width: 3em;
  height: 3em;
  border: 1px solid ${(props) => props.theme.colors.contrast};
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 1.5em;
  color: ${(props) => props.theme.colors.secondary};

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.colors.contrast};
    width: 4px;
    height: 4px;
  }

  &:before {
    top: 0;
    right: 0;
  }

  &:after {
    bottom: 0;
    left: 0;
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.colors.contrast};
    width: 0.6em;
    height: 1px;
  }

  &:before {
    top: 0.6em;
    left: 0.6em;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:after {
    bottom: 0.6em;
    right: 0.6em;
    transform: translate(50%, 50%) rotate(45deg);
  }
`;

export default Component;
