import React from "react";
import Typical from "react-typical";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import emailjs from "emailjs-com";
import ImageBack from "../../assets/ContactMe/mailz.webp";
import {
  MainContainer,
  CentralForm,
  Title,
  ColzIcon,
  BackForm,
  ImgBack,
  Form,
  SendButton,
} from "./style";

export default function ContactMe(props) {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmailMessage",
        "template_84n2bks",
        e.target,
        "_QaJQdetXcBG1z9hc"
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso! 😜");
        },
        (error) => {
          alert("Ops... Deu ruim! 💩");
        }
      );
    e.target.reset();
  };

  return (
    <MainContainer id={props.id || ""}>
      <ScreenHeading title={"Contato"} subHeading={"Vamos manter contato"} />
      <CentralForm>
        <Title>
          <Typical
            loop={Infinity}
            steps={[
              "Mande um e-mail 💌",
              1500,
              "Contrate-me 🤝",
              1500,
              "Entre em contato 👽",
              1500,
            ]}
          />
        </Title>
        <ColzIcon>
          <a
            href="https://github.com/brunobernardo11"
            target="_blank"
            rel="noreferrer"
            aria-label="Ícone do GitHub que acessa a página do perfil do GitHub de Bruno Bernardo."
          >
            <i className="fa fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/brunombernardo/"
            target="_blank"
            rel="noreferrer"
            aria-label="Ícone do LinkedIn que acessa a página do perfil do LinkedIn de Bruno Bernardo."
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </ColzIcon>
        <BackForm>
          <ImgBack>
            <h4>Envie Seu E-mail Aqui!</h4>
            <img
              src={ImageBack}
              alt="Vários ícones sobre comunicação, mensagens, formas de estabelecer contato."
            />
          </ImgBack>
          <Form onSubmit={sendEmail}>
            <label for="name">Nome:</label>
            <input type="text" name="name" id="name" />

            <label for="email">E-mail:</label>
            <input type="email" name="email" id="email" />

            <label for="message">Mensagem:</label>
            <textarea type="text" name="message" id="message" />

            <SendButton>
              <button type="submit">
                Enviar <i className="fa fa-paper-plane" />
              </button>
            </SendButton>
          </Form>
        </BackForm>
      </CentralForm>
    </MainContainer>
  );
}
