import styled from "styled-components";

function Component({ buttons = [], target, className }) {
  return (
    <Container className={className}>
      {buttons.map(({ icon: Icon, label, url }) => (
        <Button href={url} title={label} target={target}>
          <Icon />
        </Button>
      ))}
    </Container>
  );
}

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
