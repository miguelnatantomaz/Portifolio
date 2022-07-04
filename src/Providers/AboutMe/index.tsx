import { createContext, useContext, useState } from "react";
import { aboutMe, aboutMeContextType } from "./interface";
import * as React from "react";
import { messageAboutMe } from "./../../database";

type Props = {
  children: JSX.Element;
};

export const aboutMeContext = React.createContext<aboutMeContextType | null>(
  null
);

export const AboutMeProvider = ({ children }: Props) => {
  const [aboutMe, newAboutMe] = React.useState<aboutMe>(messageAboutMe);

  return (
    <aboutMeContext.Provider value={{ aboutMe }}>
      {children}
    </aboutMeContext.Provider>
  );
};

export const useAboutMe = () =>
  React.useContext(aboutMeContext) as aboutMeContextType;
