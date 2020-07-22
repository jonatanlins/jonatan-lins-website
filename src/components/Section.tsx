import Color from "color";
import React from "react";
import styled from "styled-components";

export type Color = "primary" | "secondary" | "accent" | "contrast";
export type SectionProps = { color: string };
export type Props = {
  color: Color;
  title?: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
};

function Section({ children, title, ...otherProps }: Props): JSX.Element {
  return (
    <StyledSection {...otherProps}>
      <div className="background-text">{title}</div>

      {children}
    </StyledSection>
  );
}

Section.defaultProps = {
  color: "contrast",
};

const StyledSection = styled.section<SectionProps>`
  padding: 6em 1em;
  box-sizing: border-box;
  position: relative;
  background-color: ${(props) => props.theme.colors[props.color]};
  color: ${(props) => props.theme.contrastColors[props.color]};
  overflow-x: hidden;

  > * {
    position: relative;
  }

  @media (min-width: 480px) {
    padding: 6em 2em;
  }

  @media (min-width: 768px) {
    padding: 7em 4em;
  }

  @media (min-width: 1024px) {
    padding: 8em 10em;
  }

  &:before {
    content: "";
    position: absolute;
    width: 1px;
    background-color: ${(props) => props.theme.contrastColors[props.color]};
    left: 0.5em;
    top: 0;
    bottom: 0;
    opacity: 0.5;

    @media (min-width: 480px) {
      left: 1em;
    }

    @media (min-width: 768px) {
      left: 2em;
    }

    @media (min-width: 1024px) {
      left: 5em;
    }
  }

  .background-text {
    position: absolute;
    top: 0;
    left: -5vw;
    font-family: DINNextW05-Bold, arial, georgia, sans-serif;
    text-transform: uppercase;
    font-size: 26vw;
    line-height: 0.82;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-color: ${(props) =>
      Color(props.theme.contrastColors[props.color]).alpha(0.1).toString()};
    -webkit-text-stroke-width: 1px;
    z-index: 0;
    user-select: none;
    pointer-events: none;
  }
`;

export default Section;
