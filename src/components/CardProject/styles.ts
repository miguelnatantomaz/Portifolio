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
    transform: scale(1.05);
    overflow: visible;
    transition: 1700ms;
    
    .card-content{
      backdrop-filter: brightness(60%);
      transition: 500ms;
      transform: translateX(0);
    }
  }

  &:hover, &:focus-within{
    transform: scale(1.05);
  }

  &:hover .card-content > *:not(.card-title),
  &:focus-within .card-content > *:not(.card-title){
    opacity: 1;
    transition-delay: 1000ms; 
  }

  .card-content{
    --padding: 1em;
    padding: var(--padding);
    background: linear-gradient(
        hsl(0 0% 0% / 0), 
        hsl(20 0% 0% / 0.3) 50%,
        hsl(0 0% 0% / 1),
    );
    transform: translateY(75%);
    transition: transform 500ms ease;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;  

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


        .card-description::-webkit-scrollbar {
        width: 12px;               /* width of the entire scrollbar */
        }

        .card-description::-webkit-scrollbar-track {
          background: orange;        /* color of the tracking area */
        }

        .card-description::-webkit-scrollbar-thumb {
          background-color: blue;    /* color of the scroll thumb */
          border-radius: 20px;       /* roundness of the scroll thumb */
          border: 3px solid orange;  /* creates padding around scroll thumb */
        }

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

