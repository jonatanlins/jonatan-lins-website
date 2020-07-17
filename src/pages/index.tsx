import styled, { withTheme } from "styled-components";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { useFormState } from "react-use-form-state";
import api from "../services/api";

import LandingPageLayout from "../layouts/LandingPage";
import Button from "../components/Button";
import Card from "../components/Card";
import TextInput from "../components/TextInput";
import DeviceFrame from "../components/DeviceFrame";
import Section from "../components/Section";
import ButtonGroup, {
  Props as ButtonGroupProps,
} from "../components/ButtonGroup";
import PageHeader, { Props as PageHeaderProps } from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import { P, H1, H2, H3, H4 } from "../components/Typography";

import logo from "../assets/images/brand/contrast.svg";
import destakCaruaruImage01 from "../assets/images/projects/destak-screenshot-01.jpg";

const headerLinks: PageHeaderProps["links"] = [
  { label: "Início", url: "/#", image: logo },
  { label: "Sobre", url: "/#about" },
  { label: "Projetos", url: "/#projects" },
  { label: "Contato", url: "/#contact" },
];

const socialMediaButtons: ButtonGroupProps["buttons"] = [
  {
    icon: FaInstagram,
    label: "Instagram",
    url: "https://www.instagram.com/jonatan.lins",
    target: "_blank",
  },
  {
    icon: FaTelegramPlane,
    label: "Telegram",
    url: "https://t.me/jonatanlins",
    target: "_blank",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    url:
      "https://api.whatsapp.com/send?phone=5581982224966&text=Ol%C3%A1,%20Jonatan,%20tudo%20bem?",
    target: "_blank",
  },
  {
    icon: FaPhone,
    label: "Telefone",
    url: "tel:+5581982224966",
    target: "_blank",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    url: "mailto:contato@jonatanlins.com",
    target: "_blank",
  },
];

function Page(): JSX.Element {
  const [formState, { text }] = useFormState();

  function handleContactSubmit(event) {
    event.preventDefault();

    const data = {
      name: formState.values.name,
      contact: formState.values.contact,
      message: formState.values.message,
    };

    api.post(`contacts`, data).then((response) => {
      alert("Mensagem enviada com sucesso! Farei contato em breve.");
    });
  }

  function goToContactSection() {
    window.open("#contact", "_self");
  }

  return (
    <LandingPageLayout>
      <PageHeader links={headerLinks} />

      <FirstSection id="section-header" background="accent">
        <H2 light>Desenvolvedor de sites e Aplicativos</H2>
        <H1 light>Jonatan Lins</H1>

        <Button primary type="button" onClick={goToContactSection}>
          Entre em contato
        </Button>
      </FirstSection>

      <a id="about" />
      <Section id="section-about" background="contrast">
        <H3>Sobre mim</H3>
        <P>
          Desenvolvedor de sites e aplicativos, metido a designer de interfaces,
          amante de tecnologia, estudante de Sistemas de Informação na{" "}
          <a href="http://caruaru.upe.br">UPE</a>, jogador amador de GTA e
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

      <a id="projects" />
      <Section id="section-projects" background="secondary">
        <H3>Meus projetos</H3>

        <Row>
          <div>
            <DeviceFrame device="galaxyA30" image={destakCaruaruImage01} />
          </div>

          <div>
            <H4>Destak Caruaru</H4>
            <P>
              Um guia turístico para Caruaru e região, encontre os melhores
              locais e estabelecimentos para tornar sua visita a Caruaru
              inesquecível.
            </P>

            <a href="http://onelink.to/b3ktsx" target="_blank" rel="noopener">
              <Button>Veja o app</Button>
            </a>
          </div>

          {/* <div>
            <ImageFrame src="https://via.placeholder.com/400x400/ff4655/ece8e1" />
          </div>

          <div>
            <H4>Compre Nosso</H4>
            <P>
              Uma loja moderna onde empresas de todo o Brasil podem comprar
              diversas peças de vestuário em atacado.
            </P>

            <a href="https://comprenosso.com" target="_blank" rel="noopener">
              <Button>Acesse o site</Button>
            </a>
          </div> */}
        </Row>
      </Section>

      <a id="contact" />
      <Section id="section-contact" background="contrast">
        <H3>Entre em contato</H3>

        <ContactGrid>
          <ButtonGroup buttons={socialMediaButtons} className="buttonGroup" />

          <Card>
            <Form onSubmit={handleContactSubmit}>
              <H4>Escreva uma mensagem</H4>

              <TextInput label="Seu nome" {...text("name")} required />
              <TextInput
                label="Seu telefone ou email"
                {...text("contact")}
                required
              />
              <TextInput label="Sua mensagem" {...text("message")} multiline />

              <Button className="center">Entre em contato</Button>
            </Form>
          </Card>
        </ContactGrid>
      </Section>

      <PageFooter>
        <P>Feito com ❤️</P>

        <P>
          Inspirado no site do&nbsp;
          <a href="https://playvalorant.com/pt-br">Valorant</a>
          <br />
          Este site é open source, acesse o código&nbsp;
          <a href="https://github.com/jonatanlins/jonatan-lins-website">
            clicando aqui
          </a>
        </P>
      </PageFooter>
    </LandingPageLayout>
  );
}

const Form = styled.form`
  display: grid;
  grid-gap: 1em;

  > .center {
    margin: 0 auto;
  }
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
  padding: 8em 1em !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export default withTheme(Page);
