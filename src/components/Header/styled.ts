import styled, { css } from "styled-components";
import { headerActiveProp } from "./interface";

export const HeaderContainer = styled.header`
  ${(props: headerActiveProp) => {
    if (props.headerActive) {
      return css`
        background-color: ${({ theme }) => theme.colors.header};
        box-shadow: 3px -5px 40px 4px rgba(255, 255, 255, 0.58);
        -webkit-box-shadow: 3px -5px 40px 4px rgba(255, 255, 255, 0.3);
        -moz-box-shadow: 3px -5px 40px 4px rgba(255, 255, 255, 0.25);
      `;
    } else {
      return css`
        background-color: transparent;
      `;
    }
  }};
  transition: 2s;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;

  nav {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 150px;
      height: 120px;
      cursor: pointer;
    }

    div {
      display: flex;
      align-items: center;

      svg {
        cursor: pointer;
        color: white;
        :hover {
          transition: 0.1s;
          transform: scale(1.1);
        }
      }
    }

    button {
      margin: 0px 20px;
    }
  }
`;
