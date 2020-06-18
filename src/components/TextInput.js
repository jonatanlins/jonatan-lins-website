import styled from "styled-components";

function Component({ type, value, onChange }) {
  return (
    <Container>
      <Input type={type} value={value} onChange={onChange} />
    </Container>
  );
}

const Container = styled.label`
  display: block;
  height: 68px;
  position: relative;
  box-sizing: border-box;
  padding: 7px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border: 1px solid white;
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
`;

const Input = styled.input`
  font-size: 1em;
  border: none;
  line-height: 54px;
  position: absolute;
  z-index: 1;
  width: calc(100% - 14px);
  outline: none;
  padding: 0 1em;
  box-sizing: border-box;
`;

export default Component;
