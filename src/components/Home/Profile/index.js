import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utils/ScrollService";
import {
  ProfileContainer,
  ProfileParent,
  ProfileDetails,
  ColzIcon,
  ProfileDetailsName,
  PrimaryText,
  HighlightedText,
  ProfileDetailsRole,
  ProfileRoleTagline,
  ProfileOptions,
  PrimaryButton,
  SecundaryButton,
  ProfilePicture,
  ProfilePictureBackground,
} from "./style";

export default function Profile() {
  return (
    <ProfileContainer>
      <ProfileParent>
        <ProfileDetails>
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
            <button
              aria-label="Ícone de e-mail que leva a seção de contato para enviar uma mensagem."
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              <i className="fa fa-envelope"></i>
            </button>
          </ColzIcon>
          <ProfileDetailsName>
            <PrimaryText>
              Olá, eu sou <HighlightedText>Bruno</HighlightedText>
            </PrimaryText>
          </ProfileDetailsName>
          <ProfileDetailsRole>
            <PrimaryText>
              <h1>
                <Typical
                  steps={[
                    "Dev Front-End 🖥️",
                    2000,
                    "Criativo 🧠",
                    2000,
                    "Comunicativo 📢",
                    2000,
                    "Proativo 👊",
                    2000,
                    "Apaixonado 😍",
                    2000,
                    "Inovador 🤯",
                    2000,
                    "Autodidata 📚",
                    2000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </h1>
              <ProfileRoleTagline>
                “Se existe uma forma de fazer melhor, descubra-a.”
              </ProfileRoleTagline>
            </PrimaryText>
          </ProfileDetailsRole>
          <ProfileOptions>
            <PrimaryButton
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Contrate-me
            </PrimaryButton>
            <a
              href="curriculo.pdf"
              download="Currículo - Bruno Moraes Bernardo.pdf"
            >
              <SecundaryButton>Baixar Currículo</SecundaryButton>
            </a>
          </ProfileOptions>
        </ProfileDetails>
        <ProfilePicture>
          <ProfilePictureBackground></ProfilePictureBackground>
        </ProfilePicture>
      </ProfileParent>
    </ProfileContainer>
  );
}
