import styled from "styled-components";
import { FiHeart, FiPhone, FiInstagram, FiMail } from "react-icons/fi";
import { useFormState } from "react-use-form-state";

import Button from "../components/Button";
import Card from "../components/Card";
import TextInput from "../components/TextInput";
import Section from "../components/Section";
import PictureFrame from "../components/PictureFrame";
import { P, H1, H2, H3, H4 } from "../components/Typography";

function Home() {
  const [formState, { text, email }] = useFormState();

  function handleContactSubmit(event) {
    event.preventDefault();

    console.log(formState.values);
  }

  return (
    <div className="container">
      <PageHeader />

      <FirstSection>
        {/* <img src="/images/misc/avatar-wo-bg.png" alt="" className="avatar" /> */}

        <H2 light>Desenvolvedor de sites e Aplicativos</H2>
        <H1 light>Jonatan Lins</H1>

        <Button primary>Entre em contato</Button>
      </FirstSection>

      <Section>
        <H3>Sobre mim</H3>
      </Section>

      <Section background="secondary">
        <H3>Meus projetos</H3>

        <PictureFrame
          src="https://via.placeholder.com/400x400/ff4655/ece8e1"
          width={300}
          height={300}
        />
      </Section>

      <Section>
        <H3>Entre em contato</H3>

        <Card>
          <form onSubmit={handleContactSubmit}>
            <H4 light>Escreva uma mensagem</H4>

            <TextInput label="Seu nome" {...text("name")} />
            <TextInput label="Seu email" {...email("email")} />
            <TextInput label="Assunto da conversa" {...text("subject")} />
            <TextInput label="Sua mensagem" {...text("content")} multiline />

            <Button>Entre em contato</Button>

            {/* <a href="tel:+5581982224966">(81) 982224966</a>
      <a href="mailto:jonatanpinheiro99@gmail.com">
        jonatanpinheiro99@gmail.com
      </a> */}
          </form>
        </Card>
      </Section>

      <PageFooter>
        <P light>
          Feito com <FiHeart style={{ marginBottom: -3 }} /> por{" "}
          <a href="https://www.instagram.com/jonatan.lins">Jonatan Lins</a>
        </P>

        <P light>
          Inspirado no site do{" "}
          <a href="https://playvalorant.com/pt-br">Valorant</a>
        </P>
      </PageFooter>
    </div>
  );
}

const PageHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 5em;
  background-color: ${(props) => props.theme.colors.accent};
  z-index: 100;
`;

const FirstSection = styled(Section)`
  background-color: ${(props) => props.theme.colors.accent};
  margin: 5em auto 0;
  display: flex;
  padding: 8em 0 !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .avatar {
    position: absolute;
    bottom: 0;
    right: 0;
    max-height: 100%;
  }
`;

const PageFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.accent};
  text-align: center;
  padding: 4em 0;
`;

export default Home;
