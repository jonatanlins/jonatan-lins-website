export default function Home() {
  return (
    <div className="container">
      <header className="page-header"></header>

      <section className="first-section">
        <img src="/images/avatar.jpg" alt="" className="avatar" />

        <h1>Olá! Meu nome é Jonatan</h1>
        <h2>Sou desenvolvedor de sites e aplicativos</h2>

        <button className="call-to-action">
          <div>
            <div>Entre em contato</div>
          </div>
        </button>
      </section>

      <section className="contact">
        <h3>Entre em contato</h3>

        <div className="card">
          <div className="top-border"></div>

          <form>
            <a href="tel:+5581982224966">(81) 982224966</a>
            <a href="mailto:jonatanpinheiro99@gmail.com">
              jonatanpinheiro99@gmail.com
            </a>

            <div className="text-input">
              <input type="text" />
            </div>

            <button className="call-to-action">
              <div>
                <div>Entre em contato</div>
              </div>
            </button>
          </form>

          <div className="bottom-border"></div>
        </div>
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

        h1 {
          color: white;
        }

        h2 {
          color: white;
        }

        h3 {
          color: #0f1923;
          font-size: 7.5em;
          margin: 0.5em 0;
          text-transform: uppercase;
          font-family: "Tungsten Bold", arial, georgia, sans-serif;
        }

        h4 {
          color: #0f1923;
        }

        h5 {
          color: #0f1923;
        }

        h6 {
          color: #0f1923;
        }

        a {
          color: inherit;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        /* #8b978f */

        a:hover {
          opacity: 0.7;
        }

        .card {
          background-color: #0f1923;
          position: relative;
          padding: 2.5em;
          box-sizing: border-box;
        }

        .card .top-border {
          background-color: #0f1923;
          width: calc(100% - 10px);
          height: 10px;
          position: absolute;
          top: -10px;
          left: 10px;
        }

        .card .top-border::before {
          content: "";
          border-bottom: 10px solid #0f1923;
          border-left: 10px solid transparent;
          position: absolute;
          left: -10px;
        }

        .card .top-border::after {
          content: "";
          position: absolute;
          background-color: white;
          width: 60px;
          height: 1px;
          left: calc(50% - 35px);
          top: 0;
        }

        .card .bottom-border {
          background-color: #0f1923;
          width: calc(100% - 10px);
          height: 10px;
          position: absolute;
          bottom: -10px;
          right: 10px;
        }

        .card .bottom-border::before {
          content: "";
          border-top: 10px solid #0f1923;
          border-right: 10px solid transparent;
          position: absolute;
          right: -10px;
        }

        .card .bottom-border::after {
          content: "";
          position: absolute;
          background-color: white;
          width: 60px;
          height: 1px;
          right: calc(50% - 35px);
          bottom: 0;
        }

        .text-input {
          height: 68px;
          position: relative;
          box-sizing: border-box;
          padding: 7px;
        }

        .text-input::before,
        .text-input::after {
          content: "";
          position: absolute;
          border: 1px solid white;
          height: 30px;
          box-sizing: border-box;
          left: 0;
          right: 0;
        }

        .text-input::before {
          top: 0;
          border-bottom: none;
        }

        .text-input::after {
          bottom: 0;
          border-top: none;
        }

        .text-input input {
          font-size: 1em;
          border: none;
          line-height: 54px;
          position: absolute;
          z-index: 1;
          width: calc(100% - 14px);
          outline: none;
          padding: 0 1em;
          box-sizing: border-box;
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

        .call-to-action {
          height: 68px;
          background-color: transparent;
          border: none;
          position: relative;
          box-sizing: border-box;
          padding: 7px;
          cursor: pointer;
          font-size: 1em;
        }

        .call-to-action::before,
        .call-to-action::after {
          content: "";
          position: absolute;
          border: 1px solid white;
          height: 30px;
          box-sizing: border-box;
          left: 0;
          right: 0;
        }

        .call-to-action::before {
          top: 0;
          border-bottom: none;
        }

        .call-to-action::after {
          bottom: 0;
          border-top: none;
        }

        .call-to-action > div {
          background-color: white;
          color: #0f1923;
          height: 100%;
          text-transform: uppercase;
          vertical-align: center;
          padding: 0 3em;
          font-weight: bold;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          transition: color 0.3s ease;
        }

        .call-to-action > div > div {
          z-index: 1;
        }

        .call-to-action > div::before {
          content: "";
          position: absolute;
          height: 100%;
          width: 100px;
          background-color: red;
          transform: skew(-10deg);
          background-color: #ff4655;
          width: 120%;
          left: -130%;
          transition: left 0.3s ease;
        }

        .call-to-action > div::after {
          content: "";
          position: absolute;
          width: 4px;
          height: 4px;
          bottom: 0;
          right: 0;
          background-color: #0f1923;
          transition: background-color 0.3s ease;
        }

        .call-to-action:hover > div {
          color: white;
        }

        .call-to-action:hover > div::before {
          left: -10%;
        }

        .call-to-action:hover > div::after {
          background-color: white;
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
