import React from "react";
import styled from "styled-components";

export type LinkType = {
  url: string;
  label?: string;
  image?: any;
};

export type Props = {
  links: LinkType[];
};

function Component({ links }: Props): JSX.Element {
  return (
    <Container>
      <NavBar>
        {links?.map((link) => (
          <Button key={link.url} href={link.url}>
            {link.image ? (
              <img src={link.image} alt={link.label} />
            ) : (
              link.label
            )}
          </Button>
        ))}
      </NavBar>
    </Container>
  );
}

const Container = styled.header`
  position: fixed;
  z-index: 100;
  box-sizing: border-box;
  left: 0;
  top: 0;
  right: 0;
  height: 5em;
  background-color: ${(props) => props.theme.colors.accent};
  border-bottom: 2px solid #33333340;
`;

const NavBar = styled.nav`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.a`
  padding: 2px 12px 0;
  border-bottom: 2px solid transparent;
  margin: 0 7px -2px;
  display: flex;
  align-items: center;
  font-family: DINNextW05-Medium, arial, georgia, sans-serif;
  color: ${(props) => props.theme.colors.contrast};
  text-transform: uppercase;
  text-decoration: none;
  font-size: 13px;
  user-select: none;
  transition: all 0.1s ease;

  &:hover,
  &.active {
    border-bottom-color: ${(props) => props.theme.colors.secondary};
  }

  img {
    width: 3.5em;
  }
`;

export default Component;
