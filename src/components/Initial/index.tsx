import { Container } from "./styles";
import logo from "./../../assets/images/logo.png";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import { POSITION } from "react-toastify/dist/utils";


const Initial = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any | undefined) => {
    await console.log(container);
  }, []);


  return (
    <>
      <Container>
      <div>    
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{particles: {
        number: {
         value: 100,
         density: {
          enable: true,
          value_area: 800
         }
        },
        color: {
         value: "#fff"
        },
        shape: {
         type: "circle",
         stroke: {
          width: 0,
          color: "#000000"
         },
         polygon: {
          nb_sides: 5
         },
         image: {
          src: "img/github.svg",
          width: 100,
          height: 100
         }
        },
        opacity: {
         value: 1,
         random: true,
         anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
         }
        },
        size: {
         value: 2,
         random: true,
         anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
         }
        },
        line_linked: {
         enable: false,
         distance: 500,
         color: "#ffffff",
         opacity: 0.4,
         width: 2
        },
        move: {
         enable: true,
         speed: 0.2,
         direction: "bottom",
         random: false,
         straight: false,
         out_mode: "out",
         bounce: false,
         attract: {
          enable: false,
          rotateX: 1815.039575754227,
          rotateY: 868.0624057955
         }
        }
       }}}
        />
          <img src={logo} alt="" />
          <section>
            <h1>Olá, meu nome é Miguel Natan Tomaz 👋</h1>
            <h2>Desenvolvedor</h2>
            <span>FullStack</span>
          </section>
        </div>
        
      </Container>
    </>
  );
};

export default Initial;
