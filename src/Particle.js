// import React from 'react';
// import Particles from "react-tsparticles";

// const Particle = () => {
//     return (
//         <Particles
//             params={{
//                 particles: {
//                     number: {
//                         value: 160,
//                         density: {
//                             enable: true,
//                             value_area: 1500,
//                         },
//                     },
//                     line_linked: {
//                         enable: false,
//                         opacity: 0.03,
//                     },
//                     move: {
//                         direction: "right",
//                         speed: 0.05,
//                     },
//                     size: {
//                         value: 1,
//                     },
//                     opacity: {
//                         anim: {
//                             enable: true,
//                             speed: 1,
//                             opacity_min: 0.05,
//                         },
//                     },
//                 },
//                 interactivity: {
//                     events: {
//                         onclick: {
//                             enable: true,
//                             mode: "push",
//                         },
//                     },
//                     modes: {
//                         push: {
//                             particles_nb: 1,
//                         },
//                     },
//                 },
//                 retina_detect: true,
//             }}
//         />
//     );
// }

// export default Particle;


// import React from 'react';
// import Particles from "react-tsparticles";

// const Particle = () => {
//     return (
//         <Particles
//             params={{
//                 particles: {
//                     number: {
//                         value: 100, // Adjust the number of particles for a balanced look
//                         density: {
//                             enable: true,
//                             value_area: 1000,
//                         },
//                     },
//                     shape: {
//                         type: "circle", // Set the particle shape to circle
//                     },
//                     color: {
//                         value: ["#ff0b8f", "#ff4f01", "#1e3c72", "#20e3b2"], // A range of bright colors
//                     },
//                     opacity: {
//                         value: 0.5, // Set a slightly translucent opacity
//                         random: true, // Enable random opacity for variation
//                         anim: {
//                             enable: true,
//                             speed: 1,
//                             opacity_min: 0.1,
//                         },
//                     },
//                     size: {
//                         value: 3, // Adjust particle size
//                         random: true, // Randomize particle size for diversity
//                         anim: {
//                             enable: true,
//                             speed: 4,
//                             size_min: 0.5,
//                         },
//                     },
//                     move: {
//                         enable: true,
//                         speed: 2, // Increased speed for more dynamic motion
//                         direction: "random", // Particles move in random directions
//                         random: true,
//                         straight: false,
//                         out_mode: "out", // Particles move out of view when they reach the edges
//                     },
//                     links: {
//                         enable: true,
//                         distance: 150, // Increase the linking distance for a connected effect
//                         color: "#ffffff", // White links for contrast
//                         opacity: 0.4,
//                         width: 1,
//                     },
//                 },
//                 interactivity: {
//                     events: {
//                         onhover: {
//                             enable: true,
//                             mode: "repulse", // Repulsion effect on hover
//                         },
//                         onclick: {
//                             enable: true,
//                             mode: "push", // Push new particles on click
//                         },
//                     },
//                     modes: {
//                         repulse: {
//                             distance: 100, // Repulsion strength
//                             duration: 0.4,
//                         },
//                         push: {
//                             particles_nb: 4, // Push 4 particles on click
//                         },
//                     },
//                 },
//                 retina_detect: true, // Ensures particles are detected on retina screens
//             }}
//         />
//     );
// };

// export default Particle;
import React from 'react';
import Particles from "react-tsparticles";

const Particle = () => {
    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: 100, // Number of particles (adjust as needed)
                        density: {
                            enable: true,
                            value_area: 1000,
                        },
                    },
                    shape: {
                        type: "star", // Change particle shape to star for a sparkling effect
                    },
                    color: {
                        value: ["#ff0b8f", "#ff61a6", "#00c6ff", "#ff6347", "#1e90ff","#6EC207","#FFEB00","#4CC9FE","#FF0000" ], // Range of colorful particles
                    },
                    opacity: {
                        value: 0.7, // Slightly higher opacity for more visible stars
                        random: true, // Random opacity for depth effect
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                        },
                    },
                    size: {
                        value: 4, // Larger particles for a more impactful starry look
                        random: true, // Randomize the size of particles
                        anim: {
                            enable: true,
                            speed: 3,
                            size_min: 1,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 6, // Speed of particle movement
                        direction: "random", // Random direction for a starry effect
                        random: true,
                        straight: false,
                        out_mode: "out", // Particles will disappear when moving out of the viewport
                    },
                    links: {
                        enable: true,
                        distance: 150, // Distance for particle links (to create a connected effect)
                        color: "#ffffff", // White links for contrast
                        opacity: 0.3,
                        width: 1,
                    },
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: "repulse", // Repel particles on hover
                        },
                        onclick: {
                            enable: true,
                            mode: "push", // Push new particles on click
                        },
                    },
                    modes: {
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                        push: {
                            particles_nb: 4, // Add 4 particles when clicked
                        },
                    },
                },
                retina_detect: true, // Responsive particles for retina displays
            }}
        />
    );
};

export default Particle;
