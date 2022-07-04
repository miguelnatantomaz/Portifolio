import { createContext, useContext, useState } from "react";
import { Itechnologies, ItechnologiesContextType } from "./interface";
import * as React from "react";
import { technologiesDB } from "./../../database";

type Props = {
  children: JSX.Element;
};

export const technologiesContext =
  React.createContext<ItechnologiesContextType | null>(null);

export const TechnologiesProvider = ({ children }: Props) => {
  const [technologies, newTechnologies] =
    React.useState<Itechnologies[]>(technologiesDB);

  return (
    <technologiesContext.Provider value={{ technologies }}>
      {children}
    </technologiesContext.Provider>
  );
};

export const useTechnologies = () =>
  React.useContext(technologiesContext) as ItechnologiesContextType;
