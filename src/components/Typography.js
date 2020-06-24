import styled, { css } from "styled-components";

const textMixin = css`
  color: ${(props) =>
    props.light ? "#ece8e1" : props.dark ? "#0f1923" : "inherit"};
  line-height: 1.618;
  font-weight: 400;
`;

export const H1 = styled.h1`
  ${textMixin}
  font-family: Valorant, sans-serif;
  font-size: 8em;
  margin: 0;
`;

export const H2 = styled.h2`
  ${textMixin}
  font-family: Valorant, sans-serif;
  font-size: 1.25em;
  margin: 0.8em 0 0;
`;

export const H3 = styled.h3`
  ${textMixin}
  font-family: Tungsten-Bold, sans-serif;
  font-size: 8.75em;
  margin: 0.25em 0;
  text-transform: uppercase;
`;

export const H4 = styled.h4`
  ${textMixin}
  font-family: DINNextW05-Medium, sans-serif;
  font-size: 1.25em;
  margin: 1.2em 0;
`;

export const H5 = styled.h5`
  ${textMixin}
`;

export const H6 = styled.h6`
  ${textMixin}
`;

export const P = styled.p`
  ${textMixin}
  font-family: DINNextW1G, sans-serif;
  font-size: 1em;

  a {
    font-family: DINNextW05-Medium, sans-serif;
    color: inherit;
    text-decoration: none;
    transition: all 0.2s ease;

    :hover {
      opacity: 0.6;
    }
  }
`;
