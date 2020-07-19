import styled, { css } from "styled-components";

const textMixin = css`
  color: inherit;
  font-weight: 400;
  line-height: 1.618;
  margin: 0;
`;

export const H1 = styled.h1`
  ${textMixin}
  font-family: Valorant, arial, georgia, sans-serif;
  font-size: 4em;
  line-height: 1.3;
  margin: 0.3em 0;

  @media (min-width: 768px) {
    font-size: 5em;
  }

  @media (min-width: 1024px) {
    font-size: 7em;
  }
`;

export const H2 = styled.h2`
  ${textMixin}
  font-family: Valorant, arial, georgia, sans-serif;
  font-size: 1.125em;
  line-height: 1.5;
  margin: 0.2em 0;

  @media (min-width: 1024px) {
    font-size: 1.25em;
  }
`;

export const H3 = styled.h3`
  ${textMixin}
  font-family: Tungsten-Bold, arial, georgia, sans-serif;
  font-size: 3.5em;
  line-height: 1.5em;
  margin: 0.2em 0;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 6.25em;
  }

  @media (min-width: 1024px) {
    font-size: 7.5em;
  }
`;

export const H4 = styled.h4`
  ${textMixin}
  font-family: DINNextW05-Bold, arial, georgia, sans-serif;
  font-size: 2.5em;
  line-height: 1.5;
  margin: 0.5em 0;
`;

export const H5 = styled.h5`
  ${textMixin}
`;

export const H6 = styled.h6`
  ${textMixin}
`;

export const P = styled.p`
  ${textMixin}
  font-family: DINNextW1G, arial, georgia, sans-serif;
  font-size: 1.25em;
  margin: 1em 0;
  opacity: 0.9;

  a {
    font-family: DINNextW05-Medium, arial, georgia, sans-serif;
    color: inherit;
    text-decoration: none;
    transition: all 0.2s ease;

    :hover {
      opacity: 0.6;
    }
  }

  svg {
    margin-bottom: -3px;
  }
`;
