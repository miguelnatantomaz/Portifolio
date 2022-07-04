import { LinkedinLogo, GithubLogo } from "phosphor-react";
import { Container } from "./styles";

const SocialMedias = () => {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};

export default SocialMedias;
