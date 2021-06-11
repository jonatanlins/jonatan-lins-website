import React from "react";
import { useForm } from "react-hook-form";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import styled, { withTheme } from "styled-components";

import LandingPageLayout from "~/layouts/LandingPage";
import api from "~/services/api";

import Button from "~/components/Button";
import ButtonGroup, {
  Props as ButtonGroupProps,
} from "~/components/ButtonGroup";
import Card from "~/components/Card";
import DeviceFrame from "~/components/DeviceFrame";
import PageFooter from "~/components/PageFooter";
import PageHeader, { Props as PageHeaderProps } from "~/components/PageHeader";
import Section from "~/components/Section";
import TextInput from "~/components/TextInput";
import { P, H1, H2, H3, H4 } from "~/components/Typography";

import logo from "~/assets/images/brand/contrast.svg";
import compreNossoImage01 from "~/assets/images/projects/compre-nosso-01.jpg?webp";
import compreNossoImage02 from "~/assets/images/projects/compre-nosso-02.png?webp";
import destakImage01 from "~/assets/images/projects/destak-01.jpg?webp";
import destakImage02 from "~/assets/images/projects/destak-02.jpg?webp";

type ContactFormData = {
  name: string;
  contact: string;
  message: string;
};

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
  const { register, handleSubmit, errors } = useForm<ContactFormData>();

  function handleContactSubmit(data: ContactFormData) {
    api.post(`contacts`, data).then(() => {
      // eslint-disable-next-line no-alert
      alert("Mensagem enviada com sucesso! Farei contato em breve.");
    });
  }

  function goToContactSection() {
    const input: HTMLInputElement = document.querySelector(
      ".contact-form input"
    );
    // eslint-disable-next-line no-unused-expressions
    input?.focus();
  }

  return (
    <LandingPageLayout>
      <PageHeader links={headerLinks} />

      <FirstSection color="accent">
        <H2>Desenvolvedor de sites e Aplicativos</H2>
        <H1>Jonatan Lins</H1>

        <Button primary type="button" onClick={goToContactSection}>
          Entre em contato
        </Button>
      </FirstSection>

      <Section id="about" color="contrast" title="About me">
        <H3>Sobre mim</H3>

        <P>
          Desenvolvedor de sites e aplicativos, metido a designer de interfaces,
          amante de tecnologia e estudante de Sistemas de Informação na{" "}
          <a href="http://caruaru.upe.br">UPE</a>.
        </P>
        <P>
          Atualmente ocupo o cargo de Desenvolvedor de Software na{" "}
          <a href="https://compassouol.com">Compasso UOL</a>,
          sou responsável pelo front-end de projetos desenvolvidos
          para as{" "}
          <a href="https://www.camicado.com.br">Lojas Camicado</a>.
        </P>
      </Section>

      <Section id="projects" color="primary" title="My projects">
        <H3>Meus projetos</H3>

        <ProjectsGrid>
          <PositionFrame>
            <div style={{ marginRight: "30%" }}>
              <DeviceFrame device="galaxyA30" image={destakImage02} />
            </div>
            <div style={{ marginLeft: "30%", marginTop: 40 }}>
              <DeviceFrame device="galaxyA30" image={destakImage01} />
            </div>
          </PositionFrame>

          <div>
            <H4>Destak Caruaru</H4>
            <P>
              Um guia turístico para Caruaru e região, encontre os melhores
              locais e estabelecimentos para tornar sua visita a Caruaru
              inesquecível.
            </P>
            <Button
              href="http://onelink.to/b3ktsx"
              externalLink
              target="_blank"
            >
              Veja o app
            </Button>
          </div>

          <div>
            <H4>Compre Nosso</H4>
            <P>
              Uma loja moderna onde empresas de todo o Brasil podem comprar
              diversas peças de vestuário em atacado.
            </P>
            <Button href="https://comprenosso.com" externalLink target="_blank">
              Acesse o site
            </Button>
          </div>

          <PositionFrame>
            <div style={{ margin: "0 -6%" }}>
              <DeviceFrame
                device="macbookAir"
                image={compreNossoImage02}
                stroke={3}
              />
            </div>
            <div style={{ margin: "60px 10% 0 55%" }}>
              <DeviceFrame
                device="iphoneX"
                image={compreNossoImage01}
                stroke={2}
              />
            </div>
          </PositionFrame>
        </ProjectsGrid>
      </Section>

      <Section id="contact" color="contrast" title="Contact">
        <H3>Entre em contato</H3>

        <ContactGrid>
          <ButtonGroup buttons={socialMediaButtons} className="buttonGroup" />

          <Card>
            <Form
              className="contact-form"
              onSubmit={handleSubmit(handleContactSubmit)}
            >
              <H4>Escreva uma mensagem</H4>

              <TextInput
                name="name"
                label="Seu nome"
                ref={register({ required: true })}
                error={errors.name && "Preencha este campo"}
              />
              <TextInput
                name="contact"
                label="Seu telefone ou email"
                ref={register({ required: true })}
                error={errors.contact && "Preencha este campo"}
              />
              <TextInput
                name="message"
                label="Sua mensagem"
                multiline
                ref={register({ required: true })}
                error={errors.message && "Preencha este campo"}
              />

              <Button className="center">Entre em contato</Button>
            </Form>
          </Card>
        </ContactGrid>
      </Section>

      <PageFooter>
        <P>
          Feito com ❤️ por Jonatan, e inspirado no estilo visual do&nbsp;
          <a href="https://playvalorant.com/pt-br">Valorant</a>
        </P>
        <P>
          Este site é open source, acesse o código&nbsp;
          <a href="https://github.com/jonatanlins/jonatan-lins-website">
            clicando aqui
          </a>
        </P>
      </PageFooter>
    </LandingPageLayout>
  );
}

const PositionFrame = styled.div`
  display: grid;

  & > * {
    grid-area: 1/1;
  }
`;

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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 4em 1em;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 6em 1.5em;
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
