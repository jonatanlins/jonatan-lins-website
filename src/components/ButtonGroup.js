import styled from "styled-components";

function Component({ buttons = [] }) {
  return (
    <Container>
      {buttons.map(({ icon: Icon, label, url }) => (
        <Button href={url} title={label}>
          <Icon />
        </Button>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em 0;
`;

const Button = styled.a`
  font-size: 1em;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2em;
  height: 2em;

  svg {
    font-size: 1.5em;
  }
`;

export default Component;
