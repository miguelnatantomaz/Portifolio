import { LinkedinLogo, GithubLogo, WhatsappLogo} from "phosphor-react";
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
          <LinkedinLogo size={38} />
        </a>
        <a
          href="https://github.com/miguelnatantomaz"
          rel="noreferrer"
          target="_blank"
        >
          <GithubLogo size={38} />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=5541996555095"
          rel="noreferrer"
          target="_blank">
          <WhatsappLogo size={38} />
        </a>
      </Container>
    </>
  );
};

export default SocialMedias;
