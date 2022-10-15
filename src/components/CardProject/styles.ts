import styled, { css } from "styled-components";
import { IprojectImg } from "./interface";

export const Card = styled.div`
  position: relative;
  width: 340px;
  height: 340px;
  color: #a18a96;
  ${(props: IprojectImg) => {
    if (props.projectImg) {
      return css`
        background-image: url(${props.projectImg});
        background-size: cover;
      `;
    }
  }};
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 470px) {
    padding: 0rem 0 0;
  }

  .card_content {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.header};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    transform: translateY(130px);
    transition: transform 0.25s;
  }

  .card_title {
    color: black;
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.text};
    line-height: 15px;
  }

  .card_subtitle {
    display: block;
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 12px;
    margin-bottom: 10px;
  }

  .card_description {
    width: 100%;
    height: 100px;
    max-width: 300px;
    overflow-y: auto;
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.text};
    opacity: 0;
    transition: opacity 0.5s;

    ::-webkit-scrollbar {
      width: 7px;
    }
    ::-webkit-scrollbar-track-piece {
      background-color: black;
      border-radius: 50px;
    }
    /* Cor do indicador de rolagem */
    ::-webkit-scrollbar-thumb:vertical,
    ::-webkit-scrollbar-thumb:horizontal {
      background-color: ${({ theme }) => theme.colors.shape};
      border-radius: 50px;
    }
  }

  &:hover .card_content {
    transform: translateY(0);
  }

  &:hover .card_description {
    opacity: 1;
    transition-delay: 0.25s;
  }

  .container_button {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    a {
      margin-left: 10px;
    }
  }
`;
