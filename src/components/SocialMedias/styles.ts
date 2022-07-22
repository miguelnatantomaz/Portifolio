import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.header};
  box-shadow: ${({ theme }) => theme.colors.primary} 0px 0px 10px 0px;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px 5px;

  svg {
    cursor: pointer;
    color: white;
    :hover {
      transition: 0.1s;
      transform: scale(1.1);
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 450px) {
    padding: 0px 0px;
    top: 20%;
  }
`;
