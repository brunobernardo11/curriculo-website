import styled from "styled-components";

export const ResumeHeading = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainHeading = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  span {
    color: var(--claro);
    font-size: 16px;
    font-family: "Poppins SemiBold";

    a {
      color: var(--claro);
    }
  }
`;

export const HeadingBullet = styled.div`
  position: absolute;
  left: -30px;
  height: 15px;
  width: 15px;
  top: 5px;
  background-color: var(--claro);
  border-radius: 50%;
`;

export const HeadingDate = styled.div`
  background-color: var(--claro);
  padding: 4px 12px;
  font-size: 14px;
  border-radius: 14px;
  color: var(--white);
`;

export const ResumeSubHeading = styled.div`
  font-size: 14px;
  font-family: "Poppins SemiBold";
  color: var(--escuro);
  margin: 5px 0 0;
`;

export const ResumeHeadingDescription = styled.div`
  font-size: 12px;
  text-align: justify;
`;

export const ResumeScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 360px;
  width: 100%;
`;

export const ExperienceDescription = styled.div`
  text-align: justify;
  max-width: 100%;
`;

export const ResumeDescriptionText = styled.span`
  font-size: 12px;
`;

export const SkillParent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;

  span {
    font-family: "Poppins SemiBold";
    font-size: 16px;
    color: var(--claro);
  }

  @media only screen and (max-width: 912px) {
    left: 30px;
  }

  @media only screen and (max-width: 414px) {
    left: 30px;
  }
`;

export const SkillPercentage = styled.div`
  position: relative;
  height: 15px;
  width: 70%;
  background-color: var(--claro);
`;

export const ActivePercentage = styled.div`
  height: 15px;
  transition: 0.8s ease;
  position: absolute;
  background-color: var(--escuro);
`;

export const BulletLogo = styled.img`
  height: 16px;
  margin: 0 30px 0 0;
`;

export const BulletLabel = styled.span`
  font-size: 14px;
  white-space: nowrap;
  font-family: "Poppins SemiBold";
`;

export const ResumeDetailsCarousel = styled.div`
  transition: transform 1s ease-out;

  .programming-skills-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const ResumeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: fit-content;
  margin: 120px 0;
`;

export const ResumeContent = styled.div`
  @media only screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ResumeCard = styled.div`
  display: flex;
  height: 360px;
  width: 1000px;

  @media only screen and (max-width: 1023px) {
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
`;

export const ResumeBullets = styled.div`
  height: 100%;
  box-shadow: 15px 0 9px -15px var(--escuro);
  width: 320px;

  @media only screen and (max-width: 1023px) {
    width: 100%;
    margin: 30px 0;
  }
`;

export const BulletContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const BulletIcons = styled.div`
  width: 34px;
  height: 100%;
  z-index: 1;
  background-color: var(--escuro);
  position: absolute;
`;

export const Bullets = styled.div`
  width: 80%;
  position: relative;
  z-index: 2;

  .bullet {
    display: flex;
    align-items: center;
    background-color: var(--escuro);
    height: 40px;
    margin: 15px 0;
    padding: 0 8px;
    border-radius: 20px;
    width: 30px;
    transition: width 0.6s ease;
    cursor: pointer;
  }

  .selected-bullet {
    color: var(--white);
    width: 100%;
  }

  @media only screen and (max-width: 1023px) {
    width: 90%;

    .selected-bullet {
      width: 100%;
    }
  }
`;

export const ResumeBulletDetails = styled.div`
  flex-grow: 1;
  width: 600px;
  overflow: hidden;
  padding: 0 0 0 70px;

  @media only screen and (max-width: 1023px) {
    height: 360px;
    width: fit-content;
    padding: 0;
  }
`;
