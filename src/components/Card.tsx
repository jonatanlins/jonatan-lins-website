import React from "react";
import styled from "styled-components";

export type Props = {
  children: React.ReactNode;
};

function Component(props: Props): JSX.Element {
  return (
    <OuterContainer>
      <InnerContainer>{props.children}</InnerContainer>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  padding: 1em 0;
  position: relative;
  color: ${(props) => props.theme.colors.contrast};

  &:before {
    content: "";
    border: solid ${(props) => props.theme.colors.contrast};
    border-width: 1px 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc((100% - 60px) / 2);
    width: 60px;
    z-index: 1;
  }
`;

const InnerContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1em 1.5em;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
  }

  &:before {
    top: 0;
    border-bottom: 1em solid ${(props) => props.theme.colors.primary};
    border-left: 1em solid transparent;
  }

  &:after {
    bottom: 0;
    border-top: 1em solid ${(props) => props.theme.colors.primary};
    border-right: 1em solid transparent;
  }

  @media (min-width: 480px) {
    padding: 1.5em 2.5em;
  }
`;

export default Component;
