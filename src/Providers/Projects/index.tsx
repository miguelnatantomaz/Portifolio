import { createContext, useContext, useState } from "react";
import { IProjects, IProjectsContextType } from "./interface";
import * as React from "react";
import { projectsDB } from "./../../database";

type Props = {
  children: JSX.Element;
};

export const projectsContext = React.createContext<IProjectsContextType | null>(
  null
);

export const ProjectsProvider = ({ children }: Props) => {
  const [projects, newProjects] = React.useState<IProjects[]>(projectsDB);

  return (
    <projectsContext.Provider value={{ projects }}>
      {children}
    </projectsContext.Provider>
  );
};

export const useProjects = () =>
  React.useContext(projectsContext) as IProjectsContextType;
