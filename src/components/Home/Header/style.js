import styled from "styled-components";

export const HeaderOption = styled.span`
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;

  @media only screen and (max-width: 970px) {
    color: var(--white);
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 149px;
  color: var(--white);
`;

export const HeaderParent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 70%;
  color: var(--white);

  .header-options {
    display: flex;
    align-items: center;
  }

  .header-option-seperator {
    margin: 0 50px 0 0;
    color: var(--white);

    :hover {
      color: var(--claro);
      transition: 0.5s;
    }
  }

  @media only screen and (max-width: 1110px) {
    width: 80%;
  }

  @media only screen and (max-width: 970px) {
    width: 100%;
    position: relative;

    .header-options {
      display: flex;
      flex-direction: column;
      position: absolute;
      left: -100%;
      top: 0px;
      height: 100vh;
      width: 100%;
      justify-content: space-around;
      background-color: var(--escuro);
      z-index: 1000;
      opacity: 0.8;
      transition: all 0.8s ease-out;
    }

    .header-option-seperator {
      margin: 0;
    }

    .selected-header-option {
      color: var(--white);
    }

    .show-hambuguer-options {
      left: 0;
      opacity: 1;
    }
  }

  @media only screen and (max-width: 414px) {
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
  }
`;

export const HeaderHamburguer = styled.div`
  display: none;
  color: var(--white);
  margin-right: 10px;
  margin-left: 10px;

  @media only screen and (max-width: 970px) {
    display: block;
  }

  @media only screen and (max-width: 970px) {
    .header-hambuguer-bars {
      font-size: 30px;
      cursor: pointer;
      margin: 0px 10px;
      color: var(--white);
    }
  }
`;

export const HeaderLogo = styled.div`
  font-size: 50px;
  font-family: "Poppins ExtraBold";
  color: var(--white);
  margin-right: 20px;
`;
