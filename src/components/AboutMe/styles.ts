import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  #aboutMe {
    margin-bottom: 65px;
  }
  #technology {
    margin-bottom: 80px;
  }

  h2 {
    font-size: 42px;
    color: ${({ theme }) => theme.colors.primary};
    padding: 5px 20px;
    border-bottom: solid 4px ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.title};
  }

  div {
    width: 100%;
    max-width: 1200px;
    display: flex;

    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const ContainerHistory = styled.section`
  color: ${({ theme }) => theme.colors.secondary};
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%;
  }
  p {
    font-size: 18px;
    letter-spacing: 1px;
    word-spacing: 0.1cm;
    font-family: ${({ theme }) => theme.fonts.text};
  }
  h3 {
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 26px;
  }
`;

export const ContainerTechnologies = styled.section`
  width: 700px;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 768px) {
    width: 80%;
  }

  ul {
    display: flex;
    padding: 0px;
    flex-wrap: wrap;
    li {
      display: flex;
      justify-content: center;
      padding: 15px;
      font-family: ${({ theme }) => theme.fonts.text};
      color: ${({ theme }) => theme.colors.third};
      background-color: ${({ theme }) => theme.colors.secondary};
      border-radius: 10px;
      margin: 15px;
      :hover {
        transition: 0.5s;
        transform: scale(1.3);
      }
    }
  }

  h3 {
    font-size: 26px;
    font-family: ${({ theme }) => theme.fonts.title};
    text-align: center;
  }
`;
