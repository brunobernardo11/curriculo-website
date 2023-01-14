import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  margin: 120px 0;
`;

export const CentralForm = styled.div`
  max-width: 1110px;
  padding: 50px;
  display: flex;
  border-radius: 12px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  background-color: var(--escuro);
  width: 90%;

  @media screen and (max-width: 420px) {
    padding: 25px;
  }

  @media screen and (max-width: 375px) {
    padding: 20px;
  }
`;

export const Title = styled.h2`
  color: var(--white);
  letter-spacing: 0.2rem;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
`;

export const ColzIcon = styled.div`
  i {
    color: var(--white);
    margin: 8px;
    text-align: left;

    :hover {
      transform: scale(1.5);
    }
  }

  @media screen and (max-width: 940px) {
    text-align: center;
  }
`;

export const BackForm = styled.div`
  max-width: 380px;
  margin: 0 auto;

  @media screen and (min-width: 941px) {
    max-width: 1100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
`;

export const ImgBack = styled.div`
  width: 100%;
  margin-bottom: 20px;

  h4 {
    color: var(--white);
    letter-spacing: 0.3rem;
    font-weight: 400;
    font-size: 18px;
    opacity: 0.5;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    opacity: 0.5;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 940px) {
    flex: 1;
    align-self: center;
    margin-right: 20px;
  }

  @media screen and (max-width: 768px) {
    h4 {
      display: flex;
      justify-content: center;
      text-align: center;
    }
  }

  @media screen and (max-width: 425px) {
    h4 {
      display: flex;
      justify-content: center;
    }
  }
`;

export const Form = styled.form`
  width: auto;
  display: flex;
  color: var(--escuro);
  padding: 15px;
  justify-content: center;
  flex-direction: column;
  margin-top: -52px;
  background-color: var(--white);
  border-radius: 12px;

  p {
    text-align: center;
    margin-bottom: 10px;
    color: var(--claro);
    letter-spacing: 0.3rem;
    font-family: "Poppins Bold";
  }

  label {
    margin-bottom: 5px;
    color: var(--escuro);
    letter-spacing: 0.2rem;
  }

  input,
  textarea {
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0);
    outline: none;
    background-color: rgba(230, 230, 230, 0.6);
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    margin-bottom: 22px;
    border-radius: 10px;
    transition: 0.3s;
  }

  textarea:focus {
    border: 2px solid var(--claro);
    background-color: var(--white);
  }

  input:focus {
    border: 2px solid var(--claro);
    background-color: var(--white);
  }

  @media screen and (min-width: 940px) {
    flex: 0.9;
  }
`;

export const SendButton = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin-top: 15px;
    padding: 5px;
    outline: none;
    width: 100%;
    border: 2px solid var(--escuro);
    font-size: 18px;
    border-radius: 19px;
    background-color: var(--escuro);
    color: var(--white);
    align-items: center;
    justify-content: center;

    :hover {
      background-color: var(--claro);
      transition: 1s;
      border: 2px solid var(--escuro);
      color: var(--escuro);
    }
  }
`;
