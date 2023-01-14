import styled from "styled-components";
import ImgFooter from "../../assets/Footer/bg-3.webp";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${ImgFooter});
  background-position: center;
  background-attachment: fixed;
  position: relative;
  z-index: -1;

  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.85;
    background-color: var(--escuro);
  }
`;

export const FooterText = styled.div`
  color: var(--white);
  padding: 40px 0;
  font-family: "Poppins Light";
  font-size: 19px;
  font-weight: 600;

  p {
    margin: 0;
  }

  @media screen and (max-width: 425px) {
    font-size: 15px;
  }
`;
