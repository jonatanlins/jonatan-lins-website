import styled from "styled-components";

function Component({ src, width, height }) {
  return <Container width={width} height={height} image={src} />;
}

const Container = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.contrast};
  width: ${(props) => `${props.width}px` || "auto"};
  height: ${(props) => `${props.height}px` || "auto"};
  box-sizing: border-box;
  background: url(${(props) => props.image}) center no-repeat;
  background-size: cover;

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

export default Component;
