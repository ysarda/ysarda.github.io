/* sweetScroll load */
document.addEventListener("DOMContentLoaded", function () {
  new SweetScroll({/* some options */});

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  var particleConfig = {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 19.18081918081918,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      },
      nb: 80
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 300,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };

  /* The layer is as tall as the page and sits behind the content, so the
     particles scroll with it. It never receives pointer events itself, so the
     mouse position is fed in from the window (in page coordinates). */
  particleConfig.interactivity.events.onclick.enable = false; /* handled below */
  /* the layer is the whole page tall, so scale the count down to keep it light */
  particleConfig.particles.number.value = 20;
  particlesJS('page-particles', particleConfig);

  var layer = window.pJSDom[window.pJSDom.length - 1].pJS;
  window.addEventListener('mousemove', function (e) {
    var m = layer.interactivity.mouse;
    var ratio = layer.canvas.pxratio || 1;
    m.pos_x = e.clientX * ratio;
    m.pos_y = (e.clientY + window.scrollY) * ratio;
    layer.interactivity.status = 'mousemove';
  }, { passive: true });
  /* Click anywhere to add a few particles at the cursor (the layer itself
     can't be clicked, so this is done from the window). The total is capped so
     repeated clicks can't slow the page down. */
  var MAX_PARTICLES = 320;
  window.addEventListener('click', function (e) {
    var ratio = layer.canvas.pxratio || 1;
    var pos = { pos_x: e.pageX * ratio, pos_y: e.pageY * ratio };
    var count = layer.interactivity.modes.push.particles_nb;
    layer.fn.modes.pushParticles(count, pos);
    var extra = layer.particles.array.length - MAX_PARTICLES;
    if (extra > 0) { layer.particles.array.splice(0, extra); }
  });

  document.documentElement.addEventListener('mouseleave', function () {
    var m = layer.interactivity.mouse;
    m.pos_x = null;
    m.pos_y = null;
    layer.interactivity.status = 'mouseleave';
  });

  /* Keep the canvas the height of the page as content changes (project tabs,
     fonts, images) by nudging particles.js to re-measure it. */
  var resizeTimer;
  if (window.ResizeObserver) {
    new ResizeObserver(function () {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
      }, 150);
    }).observe(document.body);
  }

}, false);
