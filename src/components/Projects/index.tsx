import { Container, CardProjects } from "./styles";

import { Button } from "../Button";
import { useProjects } from "../../Providers/Projects";
import { IProjects } from "../../Providers/Projects/interface";
import Slider from "../Slider";
import { SwiperSlide } from "swiper/react";
import CardProject from "../CardProject";

const Projects = () => {
  const { projects }: any = useProjects();

  const settings = {
    spaceBetween: 50,
    slidesPerView: projects.length <= 3 ? projects.length : 3,
    navigation: projects.length >= 3,
    pagination: projects.length >= 3 && {
      clickable: true,
    },
    draggable: projects.length >= 3,
    loop: projects.length >= 3,
  }

  
  return (
    <>
      <Container>
        <span id="projects"></span>
        <h2>Projetos</h2>
        <section>
          <ul>
          <Slider settings={settings}>
            {projects.map((project: IProjects) => (
              <SwiperSlide>
                <CardProject project={project}/>
              </SwiperSlide>
            ))}
            </Slider>
          </ul>
        </section>
      </Container>
    </>
  );
};

export default Projects;
