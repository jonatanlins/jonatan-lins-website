import styled, { withTheme } from "styled-components";
import { FiChevronsUp, FiPhone, FiInstagram, FiMail } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useFormState } from "react-use-form-state";
import Link from "next/link";

import Button from "../components/Button";
import IconButton from "../components/IconButton";
import Card from "../components/Card";
import TextInput from "../components/TextInput";
import Section from "../components/Section";
import ImageFrame from "../components/ImageFrame";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import { P, H1, H2, H3, H4 } from "../components/Typography";

function Home({ theme }) {
  const [formState, { text, email }] = useFormState();

  function handleContactSubmit(event) {
    event.preventDefault();

    alert("Esse formulário ainda não funciona :(");

    console.log(formState.values);
  }

  function goToContactSection() {
    window.open("#contact", "_self");
  }

  return (
    <Container>
      <PageHeader
        links={[
          { label: "Home", url: "" },
          { label: "Sobre", url: "#about" },
          { label: "Projetos", url: "#projects" },
          { label: "Contato", url: "#contact" },
        ]}
      />

      <FirstSection background="accent">
        <H2 light>Desenvolvedor de sites e Aplicativos</H2>
        <H1 light>Jonatan Lins</H1>

        <Button primary onClick={goToContactSection}>
          Entre em contato
        </Button>
      </FirstSection>

      <a name="about" />
      <Section background="contrast">
        <H3>Sobre mim</H3>
        <H4>Algum subtítulo qualquer</H4>
        <P>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum.
        </P>
        <P>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum.
        </P>
      </Section>

      <a name="projects" />
      <Section background="secondary">
        <H3>Meus projetos</H3>

        <Row>
          <div>
            <ImageFrame src="https://via.placeholder.com/400x400/ff4655/ece8e1" />
          </div>

          <div>
            <H4>Projeto 1</H4>
            <P>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal.
            </P>

            <Button>Veja mais</Button>
          </div>

          <div>
            <ImageFrame src="https://via.placeholder.com/400x400/ff4655/ece8e1" />
          </div>

          <div>
            <H4>Projeto 2</H4>
            <P>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal.
            </P>

            <Button>Veja mais</Button>
          </div>

          <div>
            <ImageFrame src="https://via.placeholder.com/400x400/ff4655/ece8e1" />
          </div>

          <div>
            <H4>Projeto 3</H4>
            <P>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal.
            </P>

            <Button>Veja mais</Button>
          </div>
        </Row>
      </Section>

      <a name="contact" />
      <Section background="contrast">
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
          Feito com <FaHeart title="amor" color={theme.colors.secondary} /> por{" "}
          <a href="https://www.instagram.com/jonatan.lins">Jonatan Lins</a>
        </P>

        <P light>
          Inspirado no site do&nbsp;
          <a href="https://playvalorant.com/pt-br">Valorant</a>
          <br />
          Este site é open source, acesse o código&nbsp;
          <a href="https://github.com/jonatanlins/jonatan-lins-website">
            clicando aqui
          </a>
        </P>
      </PageFooter>

      <ScrollToTopButton>
        <Link href="">
          <a>
            <IconButton icon={FiChevronsUp} />
          </a>
        </Link>
      </ScrollToTopButton>
    </Container>
  );
}

const ScrollToTopButton = styled.div`
  position: fixed;
  bottom: 1em;
  right: 1em;
`;

const Container = styled.div`
  margin-top: 5em;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 2em 1em;

  @media (min-width: 768px) {
    grid-template-columns: 300px auto;
    grid-gap: 3em 1.5em;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 370px auto;
  }
`;

const FirstSection = styled(Section)`
  padding: 8em 0 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
