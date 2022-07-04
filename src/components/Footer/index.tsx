import { Container } from "./styles";
import { LinkedinLogo, GithubLogo } from "phosphor-react";
import logo from "./../../assets/images/logo.png";

const Footer = () => {
  return (
    <Container>
      <div>
        <img src={logo}></img>
        <section>
          <a
            href="https://www.linkedin.com/in/miguel-natan-tomaz/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedinLogo size={48} />
          </a>
          <a
            href="https://github.com/miguelnatantomaz"
            rel="noreferrer"
            target="_blank"
          >
            <GithubLogo size={48} />
          </a>
        </section>
      </div>
      <span>© All rights reserved</span>
    </Container>
  );
};

export default Footer;
