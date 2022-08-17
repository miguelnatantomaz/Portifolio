import { useState } from "react";

import { ButtonHeader } from "../Button";
import logo from "./../../assets/images/logo.png";

import { HeaderContainer } from "./styled";
import { animateScroll as scroll } from "react-scroll";

import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

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
          <img src={logo} onClick={() => scroll.scrollToTop()}></img>
          <div className="buttons">
            <Link to="aboutMe" smooth={true} duration={1000}>
              <ButtonHeader>Sobre</ButtonHeader>
            </Link>
            <Link to="technology" smooth={true} duration={1000}>
              <ButtonHeader>Tecnologias</ButtonHeader>
            </Link>
            <Link to="projects" smooth={true} duration={1000}>
              <ButtonHeader>Projetos</ButtonHeader>
            </Link>
          </div>
        </nav>
      </HeaderContainer>
    </>
  );
};

export default Header;
