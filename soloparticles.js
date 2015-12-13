define("app/particulas-config", [ "particlesjs" ], function() {
    var e = {
        particles: {
            number: {
                value: 215,
                density: {
                    enable: !0,
                    value_area: 1166.8319678621144
                }
            },
            color: {
                value: "#0909fa"
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
                random: !1,
                anim: {
                    enable: !0,
                    speed: 1,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 2,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 25.337837837837817,
                    size_min: 7.6013513513513455,
                    sync: !1
                }
            },
            line_linked: {
                enable: !1,
                distance: 0,
                color: "#c01a1a",
                opacity: .4,
                width: 1
            },
            move: {
                enable: !0,
                speed: 3,
                direction: "top",
                random: !0,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 0,
                    rotateY: 0
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !1,
                    mode: "bubble"
                },
                onclick: {
                    enable: !1,
                    mode: "bubble"
                },
                resize: !1
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 0
                    }
                },
                bubble: {
                    distance: 250,
                    size: 0,
                    duration: 2,
                    opacity: 0,
                    speed: 3
                },
                repulse: {
                    distance: 400,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: !0
    };
    return {
        initParticles: function() {
            var t = document.createElement("div");
            t.id = "particles-js", document.body.appendChild(t), particlesJS("particles-js", e);
        }
    };
}),require.config({
    baseUrl: "js/lib",
    paths: {
        app: "../app",
        jquery: "jquery-1.11.3.min",
        underscore: "underscore-min",
        backbone: "backbone-min",
        text: "text",
        particlesjs: "http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min"
    }
}),
require(["app/particulas-config"],function(Particles){
	Particles.initParticles();
});