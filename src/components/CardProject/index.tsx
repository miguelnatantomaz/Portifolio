import { IProjects } from "../../Providers/Projects/interface";
import { Container } from "../AboutMe/styles";
import { Button } from "../Button";
import { Card } from "./styles";
const CardProject = ({project}: any) => {
  return (
    <>
        <Card key={project.name} projectImg={project.img}>
          <div className="card-content">
              <h3 className="card-title">{project.name}</h3>
              <p className="card-description">{project.description}</p>
              <a href={project.aplication} target="_blank" rel="noreferrer">
                <Button>Aplicação</Button>
              </a>
              <a href={project.repository} target="_blank" rel="noreferrer">
                <Button>Repositório</Button>
              </a>
            </div> 
        </Card>
    </>
  );
};

export default CardProject;
