import { IProjects } from "../../Providers/Projects/interface";
import { Container } from "../AboutMe/styles";
import { Button } from "../Button";
import { Card } from "./styles";
const CardProject = ({ project }: any) => {
  return (
    <>
      <Card key={project.name} projectImg={project.img}>
        <div className="card_content">
          <h3 className="card_title">{project.name}</h3>
          <span className="card_subtitle">JavaScript</span>
          <p className="card_description">{project.description}</p>
          <div className="container_button">
            <a href={project.aplication} target="_blank" rel="noreferrer">
              <Button>Aplicação</Button>
            </a>
            <a href={project.repository} target="_blank" rel="noreferrer">
              <Button>Repositório</Button>
            </a>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CardProject;
