import styled, { css } from "styled-components";
import { headerActiveProp } from "./interface";

export const HeaderContainer = styled.header`
  ${(props: headerActiveProp) => {
    if (props.headerActive) {
      return css`
        background-color: ${({ theme }) => theme.colors.header};
        box-shadow: 3px -5px 40px 4px rgba(255, 255, 255, 0.58);
        -webkit-box-shadow: 3px -5px 40px 4px ${({ theme }) => theme.colors.primary};
        -moz-box-shadow: 3px -5px 40px 4px ${({ theme }) => theme.colors.primary};
        transform: translateY(0);
        transition: 1s;
      `;
    } else {
      return css`
        background-color: ${({ theme }) => theme.colors.header};
        transition: 1s;
        transform: translateY(-100%);
      `;
    }
  }};
  //transition: 2s;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 10;

  nav {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 120px;
      height: 100px;
      cursor: pointer;
    }

    div {
      display: flex;
      align-items: center;
    }

    button {
      margin: 0px 20px;
    }

    @media (max-width: 1024px) {
      justify-content: center;
      padding: 32px 0px;
      transition: 2s;

      img {
        display: none;
      }
    }
    @media (max-width: 478px) {
      div {
        button {
          margin: 0 5px;
        }
      }
    }
  }
`;
