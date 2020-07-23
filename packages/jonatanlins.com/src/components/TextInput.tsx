/* eslint-disable no-use-before-define */
import React from "react";
import styled, { css } from "styled-components";

export interface Props {
  label?: string;
  multiline?: boolean;
  className?: string;
  error?: string;
}

export type InputProps = JSX.IntrinsicElements["input"] & Props;
export type TextAreaProps = JSX.IntrinsicElements["textarea"] & Props;
export type Ref = HTMLInputElement | HTMLTextAreaElement;

const Component = React.forwardRef<Ref, InputProps | TextAreaProps>(
  function TextInput(props, ref) {
    const { label, multiline, className, error, ...inputProps } = props;
    const InputElement: React.ComponentType = multiline
      ? StyledTextArea
      : StyledInput;

    return (
      <Container className={className}>
        <InputElement ref={ref} {...inputProps} />
        <Label>{label}</Label>
        {error && <Error>{error}</Error>}
      </Container>
    );
  }
);

const inputMixin = css`
  font-family: DINNextW05-Medium, sans-serif;
  font-size: 1em;
  border: none;
  position: relative;
  z-index: 1;
  width: 100%;
  outline: none;
  padding: 21px 1em 8px;
  line-height: 1.618;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.contrast};
  color: ${(props) => props.theme.colors.primary};
  transition: all 0.2s ease;
  display: block;
`;

const StyledInput = styled.input`
  ${inputMixin}
`;

const StyledTextArea = styled.textarea`
  ${inputMixin}
  resize: none;
  min-height: 112px;
`;

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
  color: ${(props) => props.theme.colors.primary};
  transition: all 0.2s ease;
  top: 12px;
  font-size: 0.75em;
  opacity: 0.9;
`;

const Error = styled.p`
  margin: 6px 0 0;
`;

export default Component;
