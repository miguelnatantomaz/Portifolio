import { AboutMeProvider } from "./AboutMe";
import { TechnologiesProvider } from "./Technologies";
import { ProjectsProvider } from "./Projects";

type Props = {
  children: JSX.Element;
};

const Provider = ({ children }: Props) => {
  return (
    <ProjectsProvider>
      <TechnologiesProvider>
        <AboutMeProvider>{children}</AboutMeProvider>
      </TechnologiesProvider>
    </ProjectsProvider>
  );
};

export default Provider;
