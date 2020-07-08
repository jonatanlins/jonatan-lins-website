import styled, { withTheme } from "styled-components";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { useFormState } from "react-use-form-state";

import Button from "../components/Button";
import Card from "../components/Card";
import TextInput from "../components/TextInput";
import PhoneFrame from "../components/PhoneFrame";
import Section from "../components/Section";
import ImageFrame from "../components/ImageFrame";
import ButtonGroup from "../components/ButtonGroup";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import { P, H1, H2, H3, H4 } from "../components/Typography";

const headerLinks = [
  { label: "Início", url: "/#", sectionId: "section-header" },
  { label: "Sobre", url: "/#about", sectionId: "section-about" },
  { label: "Projetos", url: "/#projects", sectionId: "section-projects" },
  { label: "Contato", url: "/#contact", sectionId: "section-contact" },
];

const socialMediaButtons = [
  {
    icon: FaInstagram,
    label: "Instagram",
    url: "https://www.instagram.com/jonatan.lins",
  },
  { icon: FaTelegramPlane, label: "Telegram", url: "https://t.me/jonatanlins" },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    url:
      "https://api.whatsapp.com/send?phone=5581982224966&text=Ol%C3%A1,%20Jonatan,%20tudo%20bem?",
  },
  { icon: FaPhone, label: "Telefone", url: "tel:+5581982224966" },
  {
    icon: FaEnvelope,
    label: "Email",
    url: "mailto:jonatanpinheiro99@gmail.com",
  },
];

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
      <PageHeader links={headerLinks} />

      <FirstSection id="section-header" background="accent">
        <H2 light>Desenvolvedor de sites e Aplicativos</H2>
        <H1 light>Jonatan Lins</H1>

        <Button primary onClick={goToContactSection}>
          Entre em contato
        </Button>
      </FirstSection>

      <a name="about" />
      <Section id="section-about" background="contrast">
        <H3>Sobre mim</H3>
        <P>
          Desenvolvedor de sites e aplicativos, metido a designer de interfaces,
          amante de tecnologia, estudante de Sistemas de Informação na{" "}
          <a href="http://caruaru.upe.br">UPE</a>, jogador amador de GTA V e
          somelier de biscoitos.
        </P>
        <P>
          Atualmente ocupo o cargo de Engenheiro de Software no{" "}
          <a href="https://www.instagram.com/smart_research_labs">SmartLabs</a>,
          sou responsável pelos front-ends de diversos projetos desenvolvidos
          para o{" "}
          <a href="https://www.shoppingdifusora.com.br">Shopping Difusora</a> e
          para a <a href="https://caruaru.pe.gov.br">Prefeitura de Caruaru</a>.
        </P>
      </Section>

      <a name="projects" />
      <Section id="section-projects" background="secondary">
        <H3>Meus projetos</H3>

        <Row>
          <div>
            <PhoneFrame screen="/images/projects/destak-screenshot-01.jpg" />
          </div>

          <div>
            <H4>DestakCaruaru</H4>
            <P>
              Um guia turístico para Caruaru e região, encontre os melhores
              locais e estabelecimentos para tornar sua visita a Caruaru
              inesquecível.
            </P>

            <a href="http://onelink.to/b3ktsx" target="_blank">
              <Button>Veja mais</Button>
            </a>
          </div>

          <div>
            <ImageFrame src="https://via.placeholder.com/400x400/ff4655/ece8e1" />
          </div>

          <div>
            <H4>Compre Nosso</H4>
            <P>
              Uma loja moderna onde empresas de todo o Brasil podem comprar
              diversas peças de vestuário em atacado.
            </P>

            <a href="https://comprenosso.com" target="_blank">
              <Button>Veja mais</Button>
            </a>
          </div>
        </Row>
      </Section>

      <a name="contact" />
      <Section id="section-contact" background="contrast">
        <H3>Entre em contato</H3>

        <ContactGrid>
          <ButtonGroup
            buttons={socialMediaButtons}
            className="buttonGroup"
            target="_blank"
          />

          <Card>
            <Form onSubmit={handleContactSubmit}>
              <H4 light>Escreva uma mensagem</H4>

              <TextInput label="Seu nome" {...text("name")} />
              <TextInput label="Seu email" {...email("email")} />
              <TextInput label="Assunto da conversa" {...text("subject")} />
              <TextInput label="Sua mensagem" {...text("content")} multiline />

              <Button className="center">Entre em contato</Button>
            </Form>
          </Card>
        </ContactGrid>
      </Section>

      <PageFooter>
        <P light>Feito com ❤️</P>

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
    </Container>
  );
}

const Form = styled.form`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(12, 1fr);

  > * {
    grid-column: auto / span 12;
  }

  .center {
    margin: 0 auto;
  }
`;

const Container = styled.div`
  margin-top: 5em;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 1em;

  @media (min-width: 480px) {
    .buttonGroup {
      justify-content: flex-start;
      font-size: 20px;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 160px auto;

    .buttonGroup {
      flex-direction: column;
      justify-content: flex-end;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: 200px auto;

    .buttonGroup {
      font-size: 22px;
    }
  }
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

export default withTheme(Home);
