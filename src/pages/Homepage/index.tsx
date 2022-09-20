import AboutMe from "../../components/AboutMe";
import Header from "../../components/Header";
import Initial from "../../components/Initial";
import SocialMedias from "../../components/SocialMedias";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import { Container } from "./styles";
import CardProject from "../../components/CardProject";

const Homepage = () => {
  return (
    <Container>
      <Header /> 
      <Initial />
      <div className="components"> 
        <AboutMe />
        <SocialMedias />
        <Projects />
      </div>
      <Footer />
    </Container>
  );
};

export default Homepage;
