import styled, { css } from "styled-components";

type Props = {
  typeButton?: string;
};

export const ThemeButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.title};

  font-size: 1.2rem;
  transition: 0.3s;

  ${(props: Props) => {
    switch (props.typeButton) {
      case "outline":
        return css`
          background: transparent;
          color: ${({ theme }) => theme.colors.secondary};
          padding: ${({ theme }) => theme.ButtonSize.small};

          display: inline-block;
          text-decoration: none;
          :after {
            content: "";
            display: block;
            width: 0;
            height: 4px;
            background: ${({ theme }) => theme.colors.shape};
            transition: width 0.3s;
          }

          :hover::after {
            width: 100%;
          }
        `;
      default:
        return css`
          color: ${({ theme }) => theme.colors.secondary};
          padding: ${({ theme }) => theme.ButtonSize.default};
          background-color: ${({ theme }) => theme.colors.primary};
          border-radius: 20px;

          :hover {
            background-color: ${({ theme }) => theme.colors.secondary};
            color: ${({ theme }) => theme.colors.primary};
          }
        `;
    }
  }}
`;
