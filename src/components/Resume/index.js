import React, { useState } from "react";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import {
  ResumeHeading,
  MainHeading,
  HeadingBullet,
  HeadingDate,
  ResumeSubHeading,
  ResumeHeadingDescription,
  ResumeScreenContainer,
  ExperienceDescription,
  ResumeDescriptionText,
  SkillParent,
  SkillPercentage,
  ActivePercentage,
  BulletLogo,
  BulletLabel,
  ResumeDetailsCarousel,
  ResumeContainer,
  ResumeContent,
  ResumeCard,
  ResumeBullets,
  BulletContainer,
  BulletIcons,
  Bullets,
  ResumeBulletDetails,
} from "./style";

export default function Resume(props) {
  const [selectedBulletIndex, setselectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setcarousalOffSetStyle] = useState({});

  const ResumoHeading = (props) => {
    return (
      <ResumeHeading>
        <MainHeading>
          <HeadingBullet />
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <HeadingDate>{props.fromDate + " - " + props.toDate}</HeadingDate>
          ) : (
            <div></div>
          )}
        </MainHeading>
        <ResumeSubHeading>
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </ResumeSubHeading>
        <ResumeHeadingDescription>
          <span>{props.description ? props.description : ""}</span>
        </ResumeHeadingDescription>
      </ResumeHeading>
    );
  };

  const resumeBullets = [
    { label: "Educação", logoScr: "education.svg" },
    { label: "Estágio", logoScr: "work-history.svg" },
    { label: "Histórico Profissional", logoScr: "work-history.svg" },
    { label: "Conhecimentos", logoScr: "programming-skills.svg" },
    { label: "Projetos", logoScr: "projects.svg" },
    { label: "Extras", logoScr: "interests.svg" },
  ];

  const programmingSkillDatails = [
    { skill: "React.js", ratingPercentage: 90 },
    { skill: "AWS", ratingPercentage: 80 },
    { skill: "Design System", ratingPercentage: 80 },
    { skill: "Hygraph | GraphQL", ratingPercentage: 85 },
    { skill: "Node.js", ratingPercentage: 80 },
    { skill: "Git", ratingPercentage: 95 },
    { skill: "HTML", ratingPercentage: 95 },
    { skill: "CSS", ratingPercentage: 95 },
    { skill: "JavaScript", ratingPercentage: 80 },
    { skill: "Scrum | Azure", ratingPercentage: 95 },
  ];

  const projectDetails = [
    {
      title: (
        <a href="https://alma.hsl.org.br/" target="_blank" rel="noreferrer">
          Alma Sírio-Libanês 👈
        </a>
      ),
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "Atuei no desenvolvimento da marca inovadora do Hospital Sírio-Libanês",
      subHeading: "Tecnologias Utilizadas: React.js",
    },
    {
      title: (
        <a
          href="https://brunobernardo11.github.io/curriculo-website/"
          target="_blank"
          rel="noreferrer"
        >
          Currículo/Portfólio WebSite 👈
        </a>
      ),
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Um currículo inovador para mostrar minhas informações e projetos",
      subHeading: "Tecnologias Utilizadas: React.js",
    },
    {
      title: (
        <a
          href="https://brunobernardo11.github.io/rocketseat-devfinances/"
          target="_blank"
          rel="noreferrer"
        >
          App Bancário 👈
        </a>
      ),
      duration: { fromDate: "2020", toDate: "2021" },
      description: "Simulador de conta bancária para controle de finanças",
      subHeading: "Tecnologias Utilizadas: HTML, CSS e JavaScript",
    },
  ];

  const resumeDetails = [
    <ResumeScreenContainer key="education">
      <ResumoHeading
        heading={"Universidade Anhembi Morumbi, São Paulo"}
        subHeading={"Bacharelado em Sistemas de Informação"}
        fromDate={"2022"}
        toDate={"2023"}
      />
      <ResumoHeading
        heading={"Centro Universitário FMU, São Paulo"}
        subHeading={"Bacharelado em Sistemas de Informação"}
        fromDate={"2020"}
        toDate={"2021"}
      />
    </ResumeScreenContainer>,

    <ResumeScreenContainer key="work-experience">
      <ResumoHeading
        heading={
          <a
            href="https://www.linkedin.com/company/hospitalsiriolibanes/"
            target="_blank"
            rel="noreferrer"
          >
            Hospital Sírio-Libanês
          </a>
        }
        subHeading={"Development Intern"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ExperienceDescription>
        <ResumeDescriptionText>
          Desenvolvimento de protótipos/telas HTML, CSS, JavaScript; Modelagem e
          Banco de Dados com MySQL, Aurora e Athena; Lambdas em Python;
          React.js; Data Science utilizando Pandas para gerar modelos
          preditivos; Firewall, WAF, LGPD, GDPR, EDR e desenvolvimento seguro;
          Contrução de API com Node.js, Docker e Java; Versionamento de código
          com Git; Fluxo de desenvolvimento de uma tarefa até o deploy;
          Metodologia ágil Scrum e utilizando Azure;
        </ResumeDescriptionText>
      </ExperienceDescription>
    </ResumeScreenContainer>,

    <ResumeScreenContainer key="work-experience">
      <ResumoHeading
        heading={
          <a
            href="https://www.linkedin.com/company/hospitalsiriolibanes/"
            target="_blank"
            rel="noreferrer"
          >
            Hospital Sírio-Libanês
          </a>
        }
        subHeading={"Front End Software Engineer"}
        fromDate={"2022"}
        toDate={"Hoje"}
      />
      <ExperienceDescription>
        <ResumeDescriptionText>
          Manutenção e desenvolvimento de páginas do site institucional do
          hospital; Desenvolvimento de landing pages como a marca Alma
          Sírio-Libanês e meses coloridos; React.js; Hygraph e GraphQL; Styled
          components; Design System; Responsividade das aplicações;
          Versionamento de código com Git; Fluxo de desenvolvimento das tarefas
          até o deploy; AWS (S3 e CloudFront); Metodologia ágil Scrum e
          utilizando o Azure; Função de buddy/tutor de novos colaboradores e
          estagiários que chegam, ensinando e explicando todo o fluxo do produto
          e da empresa, passando tarefas e auxiliando no desenvolvimento;
        </ResumeDescriptionText>
      </ExperienceDescription>
    </ResumeScreenContainer>,

    <ResumeScreenContainer
      className="programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDatails.map((skill, index) => (
        <SkillParent key={index}>
          <HeadingBullet />
          <span>{skill.skill}</span>
          <SkillPercentage>
            <ActivePercentage style={{ width: skill.ratingPercentage + "%" }} />
          </SkillPercentage>
        </SkillParent>
      ))}
    </ResumeScreenContainer>,

    <ResumeScreenContainer key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumoHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </ResumeScreenContainer>,

    <ResumeScreenContainer key="interests">
      <ResumoHeading
        heading={
          <a
            href="https://github.com/brunobernardo11/fluxo-deploy/blob/main/Fluxo%20de%20desenvolvimento%20at%C3%A9%20o%20deploy.png"
            target="_blank"
            rel="noreferrer"
          >
            Fluxo de Desenvolvimento até o Deploy 👈
          </a>
        }
        description="Desenhei o fluxo de desenvolvimento de uma tarefa até o deploy."
      />
      <ResumoHeading
        heading={
          <a
            href="https://github.com/brunobernardo11/cerimonias-scrum/blob/main/Cerim%C3%B4nias%20do%20Scrum.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Metodologia Ágil - Scrum 👈
          </a>
        }
        description="Escrevi um documento com informações sobre a metodologia Scrum e suas cerimônias."
      />
      <ResumoHeading
        heading={
          <a
            href="https://drive.google.com/file/d/1y3vq9TLwBA-6M3Hc0k0ggAPsBk8xEh6G/view"
            target="_blank"
            rel="noreferrer"
          >
            Hackathon 👈
          </a>
        }
        description="Participei de um Hackathon no processo seletivo do Hospital Sírio-Libanês com tema pandemia."
      />
      <ResumoHeading
        heading={
          <a
            href="https://brunobernardo11.github.io/calculadora/"
            target="_blank"
            rel="noreferrer"
          >
            Calculadora 👈
          </a>
        }
        description="Calculadora simples em HTML, CSS e JavaScript."
      />
      <ResumoHeading
        heading={
          <a
            href="https://github.com/brunobernardo11/snake-game/blob/main/jogoSnake.py"
            target="_blank"
            rel="noreferrer"
          >
            Snake Game 👈
          </a>
        }
        description="Recriei o famoso jogo da cobrinha do Nokia em Python."
      />
    </ResumeScreenContainer>,
  ];

  const handleCarousal = (index) => {
    let offSetHeight = 360;

    let newCarousalOffSet = {
      style: { transform: "translateY(" + index * offSetHeight * -1 + "px" },
    };

    setcarousalOffSetStyle(newCarousalOffSet);
    setselectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <BulletLogo
          src={require(`../../assets/Resume/${bullet.logoScr}`)}
          alt="Ícones para cada tópico de conteúdo."
        />
        <BulletLabel>{bullet.label}</BulletLabel>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <ResumeDetailsCarousel style={carousalOffSetStyle.style}>
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </ResumeDetailsCarousel>
    );
  };

  return (
    <ResumeContainer id={props.id || ""}>
      <ResumeContent>
        <ScreenHeading
          title={"Resumo"}
          subHeading={"Minhas Informações Detalhadas"}
        />
        <ResumeCard>
          <ResumeBullets>
            <BulletContainer>
              <BulletIcons />
              <Bullets>{getBullets()}</Bullets>
            </BulletContainer>
          </ResumeBullets>
          <ResumeBulletDetails>{getResumeScreen()}</ResumeBulletDetails>
        </ResumeCard>
      </ResumeContent>
    </ResumeContainer>
  );
}
