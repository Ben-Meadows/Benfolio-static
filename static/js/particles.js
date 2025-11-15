document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-js", {
        particles: {
            number: { 
                value: 100, // Increase or decrease particle count
                density: {
                    enable: true,
                    value_area: 800 // Adjust area density
                }
            },
            color: { value: "#ffffff" }, // Particle color (white)
            shape: {
                type: "circle", // Can be "circle", "edge", "triangle", "polygon", "star"
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 }
            },
            opacity: {
                value: 0.5, // Transparency
                random: true,
                anim: { enable: false }
            },
            size: {
                value: 3, // Particle size
                random: true,
                anim: { enable: false }
            },
            line_linked: {
                enable: true, // Show connecting lines
                distance: 120, // Distance between linked particles
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2, // Speed of floating effect
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out" // Particles disappear at edges
            }
        },
        retina_detect: true
    });
});
