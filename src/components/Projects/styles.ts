import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  #projects {
    margin-bottom: 65px;
  }

  h2 {
    font-size: 42px;
    color: ${({ theme }) => theme.colors.primary};
    padding: 5px 20px;
    border-bottom: solid 4px ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.title};
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }
`;

export const CardProjects = styled.li`
  width: 350px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;
  margin: 20px 0px;

  :hover {
    transition: 0.5s;
    transform: scale(1.01);
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 26px;
  }

  img {
    width: 100%;
    height: 250px;
  }
  p {
    width: 100%;
    font-family: ${({ theme }) => theme.fonts.text};
  }
  button {
    margin: 0px 10px;
  }

  @media (max-width: 420px) {
    width: 80%;
    button {
      margin: 0px 2px;
    }
  }
`;
