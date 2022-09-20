import styled, { css } from "styled-components";
import logo from "./../../assets/images/logo.png";

export const Container = styled.div`
  width: 100%;
  height: 270px;
  background-color: ${({ theme }) => theme.colors.header};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  span {
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.shape};
  }

  div {
    display: flex;
    width: 100%;
    max-width: 1200px;
    justify-content: space-between;
    align-items: center;
    img {
      width: 140px;
      height: 120px;
      cursor: pointer;
    }

    svg {
      margin: 0px 5px;
      cursor: pointer;
      color: white;
      :hover {
        transition: 0.1s;
        transform: scale(1.1);
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
