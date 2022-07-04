import { Container, ContainerHistory, ContainerTechnologies } from "./styles";
import { useAboutMe } from "../../Providers/AboutMe";
import { useTechnologies } from "../../Providers/Technologies";
import { Itechnologies } from "../../Providers/Technologies/interface";

const AboutMe = () => {
  const { aboutMe }: any = useAboutMe();
  const { technologies }: any = useTechnologies();

  return (
    <>
      <Container>
        <span id="aboutMe" />
        <h2>Sobre</h2>
        <div>
          <ContainerHistory>
            <h3>Minha motivação</h3>
            <p>{aboutMe.message}</p>
          </ContainerHistory>
          <span id="technology"></span>
          <ContainerTechnologies>
            <h3>Tecnologias</h3>
            <section>
              <ul>
                {technologies.map((tech: Itechnologies) => (
                  <li key={tech.name}>{tech.name}</li>
                ))}
              </ul>
            </section>
          </ContainerTechnologies>
        </div>
      </Container>
    </>
  );
};

export default AboutMe;
