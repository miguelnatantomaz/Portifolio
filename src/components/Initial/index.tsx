import { Container, ContainerImage } from "./styles";
import logo from "./../../assets/images/logo.png";
import ParticlesJs from "../Particles";

const Initial = () => {
  return (
    <>
      <ParticlesJs />
      <ContainerImage />
      <Container>
        <div>
          <img src={logo} alt="" />
          <section>
            <h1>Olá, meu nome é Miguel Natan Tomaz 👋</h1>
            <h2>Desenvolvedor</h2>
            <span>FullStack</span>
          </section>
        </div>
      </Container>
    </>
  );
};

export default Initial;
