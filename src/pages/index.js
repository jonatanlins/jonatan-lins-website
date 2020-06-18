import Button from "../components/Button";
import Card from "../components/Card";
import TextInput from "../components/TextInput";
import { H1, H2, H3, H4, H5, H6 } from "../components/Typography";

export default function Home() {
  return (
    <div className="container">
      <header className="page-header"></header>

      <section className="first-section">
        <img src="/images/avatar.jpg" alt="" className="avatar" />

        <H1>Jonatan Lins</H1>
        <H2>Sou desenvolvedor de sites e aplicativos</H2>

        <Button primary>Entre em contato</Button>
      </section>

      <section className="contact">
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
      </section>

      <footer className="page-footer">
        <p>
          &copy; 2020 by{" "}
          <a href="https://jonatanlins.github.io/">Jonatan Lins</a>
        </p>
      </footer>

      <style jsx>{`
        section {
          min-height: calc(100vh - 80px);
          padding: 11em;
          box-sizing: border-box;
        }

        .first-section {
          background-color: #111;
          margin: 5em auto 0;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .first-section .avatar {
          width: 256px;
          height: 256px;
          border-radius: 999px;
        }

        a {
          color: inherit;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        a:hover {
          opacity: 0.7;
        }

        .contact {
          background-color: #ece8e1;
          color: white;
        }

        .page-header {
          position: fixed;
          left: 0;
          top: 0;
          right: 0;
          height: 5em;
          background-color: #111;
        }

        .page-footer {
          background-color: #111;
          text-align: center;
          color: white;
          padding: 4em 0;
        }
      `}</style>
    </div>
  );
}
