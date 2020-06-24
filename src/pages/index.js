import styled from "styled-components";
import { FiHeart, FiPhone, FiInstagram, FiMail } from "react-icons/fi";
import { useFormState } from "react-use-form-state";

import Button from "../components/Button";
import Card from "../components/Card";
import TextInput from "../components/TextInput";
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
        <img src="/images/avatar-wo-bg.png" alt="" className="avatar" />

        <H2 light>Desenvolvedor de sites e Aplicativos</H2>
        <H1 light>Jonatan Lins</H1>

        <Button primary>Entre em contato</Button>
      </FirstSection>

      <ContactSection>
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
      </ContactSection>

      <PageFooter>
        <P light>
          Feito com <FiHeart style={{ marginBottom: -3 }} /> por{" "}
          <a href="https://www.instagram.com/jonatan.lins">Jonatan Lins</a>
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
  background-color: #111;
`;

const Section = styled.section`
  padding: 11em;
  box-sizing: border-box;
  position: relative;
`;

const FirstSection = styled(Section)`
  background-color: #111;
  margin: 5em auto 0;
  display: flex;
  padding: 6em;
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

const ContactSection = styled(Section)`
  background-color: #ece8e1;
`;

const PageFooter = styled.footer`
  background-color: #111;
  text-align: center;
  padding: 4em 0;
`;

export default Home;
