import React, { useState } from "react";
import { TOTAL_SCREENS } from "../../../utils/commonUtils";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  HeaderOption,
  HeaderContainer,
  HeaderParent,
  HeaderHamburguer,
  HeaderLogo,
} from "./style";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <HeaderOption className="header-option-seperator">
          {screen.screen_name}
        </HeaderOption>
      </div>
    ));
  };

  const getHeaderOptionsClass = (index) => {
    let classes = "header-option";
    if (index < TOTAL_SCREENS.length - 1) classes += "header-option-seperator";

    if (selectedScreen === index) classes += "selected-header-option";
    return;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  return (
    <HeaderContainer onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
      <HeaderParent>
        <HeaderHamburguer>
          <FontAwesomeIcon className="header-hambuguer-bars" icon={faBars} />
        </HeaderHamburguer>
        <HeaderLogo>
          <span>BMB</span>
        </HeaderLogo>
        <div
          className={
            showHeaderOptions
              ? "header-options show-hambuguer-options"
              : "header-options"
          }
        >
          {getHeaderOptions()}
        </div>
      </HeaderParent>
    </HeaderContainer>
  );
}
