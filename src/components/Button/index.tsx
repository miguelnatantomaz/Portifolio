import { ThemeButton } from "./styles";

type Props = {
  children: string;
};

export const ButtonHeader = ({ children }: Props) => {
  return <ThemeButton typeButton="outline">{children}</ThemeButton>;
};

export const Button = ({ children }: Props) => {
  return <ThemeButton>{children}</ThemeButton>;
};
