import styled from "styled-components";

export const H1 = styled.h1`
  color: inherit;
  font-weight: 400;
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
  color: inherit;
  font-weight: 400;
  font-family: Valorant, arial, georgia, sans-serif;
  font-size: 1.125em;
  line-height: 1.5;
  margin: 0.2em 0;

  @media (min-width: 1024px) {
    font-size: 1.25em;
  }
`;

export const H3 = styled.h3`
  color: inherit;
  font-weight: 400;
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
  color: inherit;
  font-weight: 400;
  font-family: DINNextW05-Bold, arial, georgia, sans-serif;
  font-size: 2.5em;
  line-height: 1.5;
  margin: 0.5em 0;
`;

export const H5 = styled.h5`
  color: inherit;
`;

export const H6 = styled.h6`
  color: inherit;
`;

export const P = styled.p`
  color: inherit;
  font-weight: 400;
  font-family: DINNextW1G, arial, georgia, sans-serif;
  font-size: 1.25em;
  margin: 1em 0;
  opacity: 0.9;
  line-height: 1.618;

  a {
    font-family: DINNextW05-Medium, arial, georgia, sans-serif;
    color: inherit;
    text-decoration: none;
    transition: all 0.2s ease;
    line-height: inherit;

    :hover {
      opacity: 0.6;
    }
  }

  svg {
    margin-bottom: -3px;
  }
`;
