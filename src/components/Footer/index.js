import React from "react";

import { FooterContainer, FooterText } from "./style";

export default function Footer() {
  function ano() {
    return new Date().getFullYear();
  }

  return (
    <FooterContainer>
      <FooterText>
        <p>Copyright ©️ {ano()} - Bruno Moraes Bernardo</p>
      </FooterText>
    </FooterContainer>
  );
}
