import React from "react";
import styled, { css } from "styled-components";
import cn from "classnames";

export type Props = {
  label?: string;
  multiline?: boolean;
} & React.PropsWithoutRef<JSX.IntrinsicElements["input"]>;

function Component(props: Props): JSX.Element {
  const { label, multiline, className, ...otherProps } = props;
  const InputComponent: React.ElementType = multiline ? MultilineInput : Input;

  return (
    <Container className={cn(className, { active: otherProps.value })}>
      <InputComponent {...otherProps} />
      <Label>{label}</Label>
    </Container>
  );
}

const Container = styled.label`
  display: block;
  min-height: 68px;
  position: relative;
  box-sizing: border-box;
  padding: 7px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    border: 1px solid ${(props) => props.theme.colors.contrast};
    height: 30px;
    box-sizing: border-box;
    left: 0;
    right: 0;
  }

  &:before {
    top: 0;
    border-bottom: none;
  }

  &:after {
    bottom: 0;
    border-top: none;
  }
`;

const Label = styled.span`
  position: absolute;
  z-index: 2;
  user-select: none;
  left: 23px;
  font-size: 1em;
  top: 23px;
  color: ${(props) => props.theme.colors.primary};
  transition: all 0.2s ease;

  label.active & {
    top: 12px;
    font-size: 0.75em;
    opacity: 0.9;
  }
`;

const inputMixin = css`
  font-family: DINNextW05-Medium, sans-serif;
  font-size: 1em;
  border: none;
  position: relative;
  z-index: 1;
  width: 100%;
  outline: none;
  padding: 16px 1em 19px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.contrast};
  color: ${(props) => props.theme.colors.primary};
  transition: all 0.2s ease;
  display: block;

  label.active & {
    padding: 23px 1em 12px;
  }
`;

const Input = styled.input`
  ${inputMixin}
`;

const MultilineInput = styled.textarea`
  ${inputMixin}
  resize: none;
  min-height: 112px;
`;

export default Component;
