import styled, { css } from "styled-components";
import cn from "classnames";

function Component({ type, ref, name, value, onChange, label, multiline }) {
  const InputComponent = multiline ? MultilineInput : Input;

  return (
    <Container className={cn({ active: value })}>
      <InputComponent
        type={type}
        ref={ref}
        name={name}
        value={value}
        onChange={onChange}
      />
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
  margin: 8px 0;

  &:before,
  &:after {
    content: "";
    position: absolute;
    border: 1px solid #ece8e1;
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
  color: #0f1923;
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
  background-color: #ece8e1;
  color: #0f1923;
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
