import styled from "styled-components";

import Button from "../components/Button";
import Card from "../components/Card";
import TextInput from "../components/TextInput";
import { H1, H2, H3, P } from "../components/Typography";

function Home() {
  return (
    <div className="container">
      <PageHeader />

      <FirstSection>
        <img src="/images/avatar.jpg" alt="" className="avatar" />

        <H2 light>Desenvolvedor de sites e Aplicativos</H2>
        <H1 light>Jonatan Lins</H1>

        <Button primary>Entre em contato</Button>
      </FirstSection>

      <ContactSection>
        <H3>Entre em contato</H3>

        <Card>
          <form>
            <a href="tel:+5581982224966">(81) 982224966</a>
            <a href="mailto:jonatanpinheiro99@gmail.com">
              jonatanpinheiro99@gmail.com
            </a>

            <TextInput />

            <Button>Entre em contato</Button>
          </form>
        </Card>
      </ContactSection>

      <PageFooter>
        <P light>
          Feito com amor por{" "}
          <a href="https://jonatanlins.github.io/">Jonatan Lins</a>
        </P>
      </PageFooter>

      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        a:hover {
          opacity: 0.7;
        }
      `}</style>
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
  min-height: calc(100vh - 80px);
  padding: 11em;
  box-sizing: border-box;
`;

const FirstSection = styled(Section)`
  color: #ece8e1;
  background-color: #111;
  margin: 5em auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .avatar {
    width: 256px;
    height: 256px;
    border-radius: 999px;
  }
`;

const ContactSection = styled(Section)`
  background-color: #ece8e1;
`;

const PageFooter = styled.footer`
  background-color: #111;
  text-align: center;
  color: #ece8e1;
  padding: 4em 0;
`;

export default Home;
