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
}), define("text!app/templates/main.html", [], function() {
    return '\r\n<script type="text/x-template" id="template">\r\n		<div id="main">\r\n			<div style="width:100%; border-bottom:1px solid white">\r\n				<img src="http://arsfullsama.chatango.com/images/html5/homepage/logo_profiles.png" />\r\n			</div>\r\n<br/>\r\n			<img src="http://fp.chatango.com/profileimg/a/r/arsfullsama/full.jpg" style="float:left;"/>\r\n			<table class="profile_text" style="padding:15px 0 0 10%;">\r\n				<tr>\r\n					<td><strong>Age</strong></td>\r\n					<td>18</td>\r\n				</tr>\r\n				<tr>\r\n					<td><strong>Gender</strong></td>\r\n					<td>Male</td>\r\n				</tr>\r\n			</table>	\r\n<span style="clear:both;display:block"></span>\r\n\r\n<p class="profile_text"><strong>About Arsfullsama</strong>: <%= data.about_me %></p>\r\n\r\n<img src="http://mlm-s2-p.mlstatic.com/death-note-libreta-de-la-muerte-notebook-light-l-cosplay-ani-3689-MLM4568031782_062013-O.jpg"/> \r\n\r\n<img src="   http://bakarenders.com/renders/albums/userpics/13553/normal_by_alic3_miraini_yuno_1.png"/>\r\n\r\n<img src = "  https://45.media.tumblr.com/c484a2b29202d4654500fc6bc1fd3592/tumblr_mr24qeUOCz1sc95cpo1_500.gif" style = "max-width: 100%" alt =/> \r\n\r\n<img src =" http://49.media.tumblr.com/9461b83048f7b88538b401429d80a1d1/tumblr_nskbklQvLN1tdnwpwo1_500.gif"style="max-width:100%"alt=/> \r\n\r\n<img src =" http://45.media.tumblr.com/b4b4d84d7c261a80e2f39636d4371f29/tumblr_n1xllfsvLQ1rydwbvo1_r1_500.gif"style="max-width:100%"alt=/> \r\n\r\n<img src ="  http://49.media.tumblr.com/6dd832f94f11fbeeaf3c2c66296725fc/tumblr_nqxsyxCzMM1rydwbvo1_500.gif"style="max-width:100%"alt=/> \r\n\r\n<img src ="  http://49.media.tumblr.com/e8f4a28c4837191de219a030afb7ff23/tumblr_n6fki32NOZ1svfte7o1_500.gif"style="max-width:100%"alt=/> \r\n\r\n<img src="http://st-listas.20minutos.es/images/2013-05/360537/list_640px.jpg?1367847176"/> \r\n\r\n<img src="http://1.bp.blogspot.com/-NokFLlAiqkY/UlDOHge-6LI/AAAAAAAACKs/cAVHkgozoOk/s1600/6.png"/> \r\n\r\n<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS-5lwV0OyACUMbHr0VtpKGW0Bgyt4t9Ija6E4dBf8LzqeFcwIUiQ"/> \r\n\r\n<img src="http://www.fotosoimagenes.com/wp-content/uploads/2013/08/gato.jpg"/> \r\n\r\n<img src="  http://2.bp.blogspot.com/-dhXYNWORH5s/ViowXidTmCI/AAAAAAAAgr0/5iVGtcfEWaE/s320/frases-chidas-para-face.jpg"/> \r\n\r\n<img src="http://imagenesdeartistascristianos.com/wp-content/uploads/2015/08/Imagenes-Con-Frases-De-Graciosas-1.jpg"/> \r\n\r\n<img src="http://www.deimageneslindasconfrases.com/imagenes05/imagenes-chistosas-con-frases-de-amistad.jpg"/> \r\n\r\n<img src="https://eumakseiji.files.wordpress.com/2010/09/comenta.jpg"/> \r\n\r\n<img src="http://i.imgur.com/5ew35.jpg"/> \r\n			\r\n		</div>\r\n</script>';
}), define("app/views/main", [ "jquery", "underscore", "backbone", "app/particulas-config", "text!app/templates/main.html" ], function(e, t, n, r, i) {
	document.body.innerHTML="";
	var newEl = document.createElement("div");
	newEl.id = "container";
	document.body.appendChild(newEl);
    var s = "En un mundo extremadamente loco, existían y pasaban cosas que no te imaginarías; hay delfines y focas que pueden caminar, moscas mitad oso y también una familia de un venado y una hormiga que tienen innumerables hijos elefantes y gorilas que en un futuro serán vacas por el bien de los ovnis. En pocas palabras se podría decir, que puede pasar cualquier cosa. Un día, en el que una guanábana cuadrada pudo hablar por primera vez, una linda niña nació", o = n.View.extend({
        el: e("#container"),
        _compiledTemplate: t.template(e(i).filter("#template").text()),
        render: function() {
            return this.$el.html(this._compiledTemplate({
                data: {
                    about_me: s
                }
            })), this.$el;
        }
    }), u = document.createElement("link");
    return u.rel = "stylesheet", u.setAttribute("href", "https://cdn.rawgit.com/danisilver/ars-chatango/v1/style.css"), document.head.appendChild(u), r.initParticles(), o;
}), define("app/router", [ "jquery", "underscore", "backbone", "app/views/main" ], function(e, t, n, r) {
    var i = n.Router.extend({
        routes: {
            "": "indexStage",
            help: "help"
        }
    }), s = function() {
        var e = new i;
        e.route("", function(e) {
            var t = new r;
            t.render();
        }), e.route("help", function() {
            console.log("help");
        }), n.history.start();
    };
    return {
        initialize: s
    };
}), define("app/main", [ "jquery", "underscore", "backbone", "app/router" ], function(e, t, n, r) {
    var i = function() {
        r.initialize();
    };
    return {
        initialize: i
    };
}), require.config({
    baseUrl: "js/lib",
    paths: {
        app: "../app",
        jquery: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min",
        underscore: "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min",
        backbone: "https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min",
        text: "https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min",
        particlesjs: "http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min"
    }
}), require([ "app/main" ], function(e) {
    window.onload = function(){
    	e.initialize();
    };
}), define("app", function() {});;