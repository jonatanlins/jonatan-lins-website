import React from "react";
import styled from "styled-components";

function Component({ src }) {
  return (
    <Container>
      <Image src={src} />
    </Container>
  );
}

const Container = styled.div`
  display: inline-block;
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.contrast};
  box-sizing: border-box;
  background: url(${(props) => props.image}) center no-repeat;
  background-size: cover;
  max-width: 100%;
  user-select: none;

  &:before {
    content: "";
    position: absolute;
    width: calc(100% - 4px);
    height: 60px;
    border: solid ${(props) => props.theme.colors.contrast};
    border-width: 0 4px;
    left: -2px;
    top: calc(50% - 30px);
  }

  &:after {
    content: "";
    height: 8px;
    width: 37.5%;
    background-color: ${(props) => props.theme.colors.contrast};
    position: absolute;
    bottom: -8px;
    left: -1px;
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

export default Component;
