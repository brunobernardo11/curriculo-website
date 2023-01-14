import styled from "styled-components";
import Me from "../../assets/Home/me.webp";

export const Highlight = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  font-size: 12px;
`;

export const HighlightBlobs = styled.div`
  height: 12px;
  width: 12px;
  margin: 0 10px 0 0;
  background-color: var(--claro);
  border-radius: 50%;
`;

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0 0 0;
`;

export const AboutMeParent = styled.div`
  max--width: 1000px;
  width: 70%;

  @media only screen and (max-width: 1110px) {
    width: 88%;
  }
`;

export const AboutMeCard = styled.div`
  display: flex;
  width: 100%;
  box-shadow: 0 0px 20px -2px var(--escuro);
`;

export const AboutMeProfile = styled.div`
  width: 50%;
  background-image: url(${Me});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media only screen and (max-width: 912px) {
    background-position-x: center;
  }

  @media only screen and (max-width: 898px) {
    display: none;
  }
`;

export const AboutMeDetails = styled.div`
  width: 48%;
  text-align: justify;
  padding: 30px;

  @media only screen and (max-width: 898px) {
    width: 100%;
  }
`;

export const AboutMeDescription = styled.span`
  font-size: 12px;
`;

export const AboutMeHighlights = styled.div`
  margin: 80px 0;
`;

export const HighlightHeading = styled.div`
  font-family: "Poppins Bold";
  font-size: 14px;
  margin: 0 0 25px 0;

  @media only screen and (max-width: 393px) {
    text-align: center;
  }
`;

export const AboutMeOptions = styled.div`
  margin: 0 0 0 30px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 898px) {
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 466px) {
    display: flex;
    flex-direction: column;
    margin: 24px 0 0 0 !important;
    width: 100%;
    margin-top: 20px;
  }
`;

export const PrimaryButton = styled.button`
  border-radius: 50px;
  padding: 14px 0;
  width: 160px;
  cursor: pointer;
  transition: 0.2s;
  font-family: "Poppins SemiBold";
  color: var(--white);
  border: 2px solid linen;
  font-size: 12px;
  background-color: var(--escuro);

  :active {
    transform: translateY(2px);
  }

  :hover {
    color: var(--claro);
    border: 2px solid var(--claro);
    background-color: var(--escuro);
  }

  :focus {
    outline: none;
  }

  @media only screen and (max-width: 912px) {
    width: 120px;
  }

  @media only screen and (max-width: 466px) {
    margin: 24px 0 0 0 !important;
    width: 100%;
    margin-top: 20px;
  }
`;

export const SecundaryButton = styled.button`
  border-radius: 50px;
  padding: 14px 0;
  width: 160px;
  cursor: pointer;
  transition: 0.2s;
  font-family: "Poppins SemiBold";
  color: var(--white);
  font-size: 12px;
  background-color: var(--claro);
  margin: 0 0 0 28px;
  border-color: var(--escuro);

  :active {
    transform: translateY(2px);
  }

  :hover {
    background-color: var(--white);
    color: var(--escuro);
  }

  :focus {
    outline: none;
  }

  @media only screen and (max-width: 912px) {
    width: 120px;
  }

  @media only screen and (max-width: 466px) {
    margin: 24px 0 0 0 !important;
    width: 100%;
    margin-top: 20px;
  }
`;

export const TopButton = styled.button`
  position: fixed;
  color: var(--white);
  background-color: var(--escuro);
  padding: 0 11px;
  right: 15px;
  bottom: 15px;
  box-shadow: 2px 2px 15px black;
  z-index: 1;
  font-size: 26px;
  border-radius: 50%;
  border-color: var(--escuro);

  :hover {
    border-color: var(--claro);
    transform: scale(1.2);
    transition: all 1s;
  }

  :focus {
    outline: none;
  }

  @media only screen and (max-width: 466px) {
    display: none;
  }
`;
