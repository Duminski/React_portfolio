import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  >
  <Particles
      params={{
        particles: {
          number: {
            value: 336,
            density: {
              enable: true,
              value_area: 789.1476416322727
            }
          },
          color: {
            value: '#ffffff'
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: '#000000'
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
            value: 0.7181243538853681,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 1.5,
            random: false,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "right",
            random: true,
            straight: true,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 121.81158184520176,
              size: 1,
              duration: 1.542946703372556,
              opacity: 0.05,
              speed: 3
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true
      }}
    />
  </div>
);
