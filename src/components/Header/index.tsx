import { useState } from "react";

import { ButtonHeader } from "../Button";
import logo from "./../../assets/images/logo.png";

import { HeaderContainer } from "./styled";

import { LinkedinLogo, GithubLogo } from "phosphor-react";

const Header = () => {
  const [header, newHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      newHeader(true);
    } else {
      newHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <HeaderContainer headerActive={header}>
        <nav>
          <img src={logo}></img>
          <div className="buttons">
            <ButtonHeader>Sobre</ButtonHeader>
            <ButtonHeader>Tecnologias</ButtonHeader>
            <ButtonHeader>Portfólio</ButtonHeader>
            <ButtonHeader>Contato</ButtonHeader>
            <LinkedinLogo size={32} />
            <GithubLogo size={32} />
          </div>
        </nav>
      </HeaderContainer>
    </>
  );
};

export default Header;
