import styled, { css } from "styled-components";
import { IprojectImg } from "./interface";

export const Card = styled.div`
  ${(props: IprojectImg) => {
    if(props.projectImg){
        return css`
        background-image: url(${props.projectImg});
        background-size: cover;
        
    `;
    }
  }};
  padding: 10rem 0 0;
  max-width: 45ch;
  border-radius: 1rem;
  overflow: hidden;

  &:hover{
    transition: 0.4s;
    transform: scale(1.05);
  }

  &:hover, &:focus-within{
    transform: scale(1.05);
  }

  &:hover .card-content{
      transform: translateY(0);
      transition-delay: 300ms;
  }    

  .card-content > *:not(.card-title) {
    opacity: 0;
    transition: opacity 500ms linear
  }

  &:hover .card-content > *:not(.card-title){
    opacity: 1;
    transition-delay: 600ms;
  }

  .card-content:hover, &:hover, .card-title:hover{
    backdrop-filter: brightness(30%);
    transition: 1300ms;
  }

  .card-content{
    --padding: 0.5em;
    padding: var(--padding);
    background: linear-gradient(
        hsl(0 0% 0% / 0), 
        hsl(20 0% 0% / 0.3) 20%,
        hsl(0 0% 0% / 1),
    );
    transform: translateY(70%);
    transition: transform 500ms ease;
    backdrop-filter: brightness(30%);

    h3 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 26px;
    margin: 0 0 10px 0;
    color:${({ theme }) => theme.colors.shape};
    }
    .card-description {
        width: 100%;
        height: 100px;
        overflow-y: auto;
        color: ${({ theme }) => theme.colors.shape};
        font-family: ${({ theme }) => theme.fonts.text};

    }
    button {
        margin: 0px 10px;
    }
    
    .card-title{
        position: relative;
        width: max-content;
    }
    &:hover .card-title::after{
        transform: scaleX(1);
    }
    
    .card-title::after{
       content: "";
       position: absolute;
       height: 3px;
       width: calc(100% + var(--padding));
       left: calc(var(--padding) * -1);
       top: 5;
       bottom: 0;
       background-color: ${({ theme }) => theme.colors.primary};
       transform: scaleX(0);
       transform-origin: left;
       transition: transform 500ms ease;
    }
  }

`;