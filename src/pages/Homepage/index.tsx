import AboutMe from "../../components/AboutMe";
import Header from "../../components/Header";
import Initial from "../../components/Initial";
import SocialMedias from "../../components/SocialMedias";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import { Container } from "./styles";

const Homepage = () => {
  return (
    <Container>
      <Header />
      <Initial />
      <AboutMe />
      <SocialMedias />
      <Projects />
      <Footer />
    </Container>
  );
};

export default Homepage;
