import React from "react";
import styled from "styled-components";

export type Button = {
  icon: React.ComponentType;
  label?: string;
  url: string;
  target?: string;
};

export type Props = {
  buttons: Button[];
  className?: string;
};

function Component({ buttons, className }: Props): JSX.Element {
  return (
    <Container className={className}>
      {buttons.map(({ icon: Icon, label, url, target }) => {
        return (
          <Button
            key={url}
            href={url}
            title={label}
            target={target}
            rel={target === "_blank" ? "noopener" : undefined}
          >
            <Icon />
          </Button>
        );
      })}
    </Container>
  );
}

Component.defaultProps = {
  buttons: [],
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.a`
  font-size: 1em;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 3em;
  margin: 0.5em;

  svg {
    font-size: 1.5em;
  }
`;

export default Component;
