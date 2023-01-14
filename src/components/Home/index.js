import React from "react";
import Header from "./Header/index";
import Profile from "./Profile/index";
import { HomeContainer } from "./style";

export default function Home() {
  return (
    <HomeContainer id="Home">
      <Header />
      <Profile />
    </HomeContainer>
  );
}
