import kenziehub from "../assets/images/kenziehub.png";
import fivebet from "../assets/images/five-bet.png";
import towerofhanoi from "../assets/images/tower-of-hanoi.png";

export const technologiesDB = [
  { name: "JavaScript", },
  { name: "ReactJS" },
  { name: "HTML5" },
  { name: "Redux" },
  { name: "GIT" },
  { name: "PostgreSQL" },
  { name: "NodeJS" },
  { name: "Express" },
  { name: "Typescript" },
];

export const messageAboutMe = {
  message:
    "Sempre fui um entusiasta de tecnologias, porém só descobri que eu queria realmente seguir na área de desenvolvimento passando por diversos desafios, e percebendo que minha vontade de aprender e de resolver problemas era cada vez maior. Prezando em iniciar minha carreira, ingressei no curso FullStack da Kenzie Academy.",
};

export const projectsDB = [
  {
    name: "Kenzie Hub",
    aplication: "http://mn-kenzie-hub.vercel.app/",
    repository: "https://github.com/miguelnatantomaz/kenzie-hub",
    img: kenziehub,
    description:
      "KenzieHub é um hub de gerenciador de habilidades, nele podemos adicionar, editar e exclui informações sobre tecnologias ou cursos aprendidos.",
  },
  {
    name: "Five-bet",
    aplication: "https://capstone-group2-alex-rho.vercel.app/",
    repository: "https://github.com/miguelnatantomaz/five-bet",
    img: fivebet,
    description:
      "Site de apostas onde é possível visualizar jogos acontecendo em tempo real, e após criar uma conta, ter acesso à dashboard onde é possível fazer apostas, alterar sua senha, consultar o histórico de transações, sistema de afiliados, e colocar uma foto no perfil.",
  },
  {
    name: "Torre de hanoi",
    aplication: "https://miguelnatantomaz.github.io/Tower-of-Hanoi/",
    repository: "https://github.com/miguelnatantomaz/Tower-of-Hanoi",
    img: towerofhanoi,
    description:
      "É um jogo onde o objetivo é passar todos os discos de um pino (A) para outro qualquer (B ou C), usando um dos pinos como auxiliar, de maneira que um disco maior nunca fique em cima de outro menor.",
  }
];
