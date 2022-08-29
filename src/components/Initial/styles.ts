import styled, { css } from "styled-components";
import backgroundInitial from "./../../assets/images/backgroundInitial.jpg";

export const Container = styled.div`
  display: flex;
  background-image: url(${backgroundInitial});
  justify-content: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  align-items: center;
  div {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 450px;
    }
    section {
      display: flex;
      flex-direction: column;
      span {
        font-family: ${({ theme }) => theme.fonts.title};
        color: ${({ theme }) => theme.colors.primary};
        font-size: 64px;
      }
      h2 {
        font-size: 82px;
        margin: 0px;
        color: ${({ theme }) => theme.colors.shape};
        font-family: ${({ theme }) => theme.fonts.title};
      }
      h1 {
        font-family: ${({ theme }) => theme.fonts.title};
        color: ${({ theme }) => theme.colors.secondary};
        font-size: 26px;
      }
      @media (max-width: 644px) {
        span {
          font-size: 48px;
        }
        h2 {
          font-size: 60px;
        }
      }
      @media (max-width: 478px) {
        span {
          font-size: 32px;
        }
        h2 {
          font-size: 42px;
        }
      }
    }
    @media (max-width: 1024px) {
      flex-direction: column;
    }
    @media (max-width: 478px) {
      img {
        width: 278px;
      }
    }
  }
`;
