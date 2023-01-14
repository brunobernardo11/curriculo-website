import React from "react";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import {
  Highlight,
  HighlightBlobs,
  AboutMeContainer,
  AboutMeParent,
  AboutMeCard,
  AboutMeProfile,
  AboutMeDetails,
  AboutMeDescription,
  AboutMeHighlights,
  HighlightHeading,
  AboutMeOptions,
  PrimaryButton,
  SecundaryButton,
  TopButton,
} from "./style";

export default function AboutMe(props) {
  const SCREEN_CONSTSANTS = {
    description:
      "Sou um profissional versátil, motivado por desafios, empolgado em aprender novas tecnologias e entusiasmado a ajudar a criar formas de melhorar a vida de outras pessoas. Sempre buscando projetos desafiadores para poder usar criatividade e a inovação para desenvolver grandes produtos.",
    highlights: {
      bullets: [
        "Boa comunicação;",
        "Trabalho muito bem em grupo;",
        "Organizado e comprometido;",
        "Perfil de liderança;",
        "Determinação e intensidade nos projetos;",
        "Sempre bem-humorado;",
        "Motivado por desafios;",
        "Interessado e participativo;",
        "Gosto de ajudar e ensinar;",
      ],
      heading: "Aqui estão algumas características:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <Highlight key={i}>
        <HighlightBlobs></HighlightBlobs>
        <span>{value}</span>
      </Highlight>
    ));
  };

  return (
    <AboutMeContainer id={props.id || ""}>
      <AboutMeParent>
        <ScreenHeading title={"Sobre"} subHeading={"Por que me escolher?"} />
        <AboutMeCard>
          <AboutMeProfile></AboutMeProfile>
          <AboutMeDetails>
            <AboutMeDescription>
              {SCREEN_CONSTSANTS.description}
            </AboutMeDescription>
            <AboutMeHighlights>
              <HighlightHeading>
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </HighlightHeading>
              {renderHighlight()}
            </AboutMeHighlights>
            <AboutMeOptions>
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
            </AboutMeOptions>
          </AboutMeDetails>
        </AboutMeCard>
      </AboutMeParent>
      <TopButton
        title="Voltar ao topo"
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      >
        ⇧
      </TopButton>
    </AboutMeContainer>
  );
}
