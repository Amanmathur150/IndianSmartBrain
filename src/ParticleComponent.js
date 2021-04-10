import React from "react";
import Particles from "react-particles-js";

const ParticleComponent = () => {


  return (
    <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "auto",
      zIndex:"-2"
    }}
  >
    <Particles
      params={{
        particles: {
          number: {
            value: 400,
            density: {
              enable: true,
              value_area: 9003.4120608655228
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 10,
              color: "white"
            },
            polygon: {
              nb_sides: 4
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.6008530152163807,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              opacity_min: 0.1,
              sync: true
            }
          },
          size: {
            value: 5.5,
            random: true,
            anim: {
              enable: true,
              speed: 40,
              size_min: 0.8,
              sync: true
            }
          },
          line_linked: {
            enable: true,
            distance: 0,
            color: "#ffffff",
            opacity: 0.6687847739990702,
            width: 0.6413648243462091
          },
          move: {
            enable: true,
            speed: 10,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: false,
              mode: "bubble"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  </div>
);
}

export default ParticleComponent;