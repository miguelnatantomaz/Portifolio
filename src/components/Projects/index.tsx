import { Container, CardProjects } from "./styles";

import { Button } from "../Button";
import { useProjects } from "../../Providers/Projects";
import { IProjects } from "../../Providers/Projects/interface";

const Projects = () => {
  const { projects }: any = useProjects();
  

  

  return (
    <>
      <Container>
        <span id="projects"></span>
        <h2>Projetos</h2>
        <section>
          <ul>
            {projects.map((project: IProjects) => (
              <CardProjects key={project.name}>
                <h3>{project.name}</h3>
                <img src={project.img} alt="" />
                <p>{project.description}</p>
                <a href={project.aplication} target="_blank" rel="noreferrer">
                  <Button>Aplicação</Button>
                </a>
                <a href={project.repository} target="_blank" rel="noreferrer">
                  <Button>Repositório</Button>
                </a>
              </CardProjects>
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
};

export default Projects;
