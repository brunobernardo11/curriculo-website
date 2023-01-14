import styled from "styled-components";
import ProfilePhoto from "../../../assets/Home/me.webp";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 10%;
  min-height: fit-content;
  background-color: var(--escuro);
`;

export const ProfileParent = styled.div`
  display: flex;
  align-items: center;
  color: var(--white);

  @media (max-width: 648px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

export const ProfileDetails = styled.div``;

export const ColzIcon = styled.div`
  i {
    color: var(--white);
    margin: 8px;

    :hover {
      transform: scale(1.5);
    }
  }

  button {
    background-color: transparent;
    border: none;

    :hover {
      border: none;
      border-color: red;
    }

    :focus {
      outline: none;
    }
  }
`;

export const ProfileDetailsName = styled.div`
  font-size: 24px;
  font-family: "Poppins SemiBold";
`;

export const PrimaryText = styled.span`
  color: var(--white);
`;

export const HighlightedText = styled.span`
  color: var(--claro);
`;

export const ProfileDetailsRole = styled.div`
  display: flex;
  flex-direction: column;
  margin: 14px 0 24px 0;

  h1 {
    font-size: 40px;
    font-family: cursive;
  }

  @media (max-width: 648px) {
    h1 {
      margin: 1.5rem 0 2rem;
    }
  }
`;

export const ProfileRoleTagline = styled.span`
  font-size: 19px;
  margin: 5px 0 0 0;
  font-family: "Poppins Light";
  font-style: italic;
`;

export const ProfileOptions = styled.div`
  @media (max-width: 648px) {
    margin-bottom: 5rem;
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
  border-color: black;

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
`;

export const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px var(--white);
  border-radius: 50%;
  height: 380px;
  width: 380px;
  margin: 0 0 3rem 100px;

  @media (max-width: 648px) {
    margin: 30px 0 20px;
    width: 320px;
    height: 320px;
  }
`;

export const ProfilePictureBackground = styled.div`
  width: 92%;
  height: 92%;
  background-image: url(${ProfilePhoto});
  background-size: cover;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;

  :hover {
    transform: scale(1.07);
    transition: 1s ease-out;
  }
`;
