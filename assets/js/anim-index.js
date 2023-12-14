gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();
tl.fromTo(".img-fluid-v2",
    {
        opacity: 0
    },
    {
        opacity: 1,
        duration: 1.2,
        ease: "expoScale(0.5,7,none)"
    }
  );
  tl.fromTo(".navbar",
    {
        y: -100
    },
    {
        y: 0,
        duration: .6,
        ease: "power4.out"
    }
  );
  tl.fromTo("#caption",
    {
        x: -800
    },
    {
        x: 0,
        duration: .6,
        ease: "power4.out"
    }
  );
  tl.fromTo(".vertical-span",
    {
        x: 100
    },
    {
        x: 0,
        duration: .6,
        ease: "power4.out"
    }
  );


  // Animacja odwracania kart 
  /*
  const animation = gsap.timeline({
    paused: true,
    onReverseComplete: () => {
      gsap.delayedCall(0, () => {
        backText.style.display = 'none';
        frontText.style.display = 'block';
      });
      isAnimating = false;
    },
  });

function card(x, y, z, v)
{
 let a = $(x);
 let b  = $(y);
 let c  = $(z);
 let d = $(v);
 $(b).css('display', 'none');

 
gsap.to(a, {
  duration: 0.3,
  rotateY: 180
})
$(c).css('display', 'block');
$(d).css('opacity', '0.3');
$(d).css('background', 'gray');
}

function cardReverse(x, y, z, v)
{
  let a = $(x);
  let b  = $(y);
  let c  = $(z);
  let d = $(v);
  $(c).css('display', 'none');

  gsap.to(a, {
    duration: 0.3,
    rotateY: 0
  })
  
  $(b).css('display', 'block');
  $(d).css('opacity', '1');
  $(d).css('background', "url('../../media/img/carousel-4.jpg')");
  $(d).css('background-size', 'cover');
}*/

// Animacje odwracania kart

gsap.utils.toArray(".cardCont").forEach(function(card) {
  gsap.set(card, {
    transformStyle: "preserve-3d",
    transformPerspective: 2000
  });
  const q = gsap.utils.selector(card);
  const front = q(".cardFront");
  const back = q(".cardBack");
  
  gsap.set(back, { rotationY:-180 });
  
  const tl = gsap.timeline({ paused: true })
    .to(front, { duration: 0.8, rotationY: 180 })
		.to(back, { duration: 0.8, rotationY: 0 }, 0)
		.to(card, { z: 50 }, 0)
		.to(card, { z: 0 }, 0.5);
  card.addEventListener("mouseenter", function() {
    tl.play();
  });
  card.addEventListener("mouseleave", function() {
    tl.reverse();
  });
});

// Animacja number counter



gsap.utils.toArray("section").forEach(section => {
  gsap.fromTo(section, {y: 100, opacity: 0}, {
    y: 0,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "100px bottom",
      end: "+=100",
      scrub: true
    }
  });
});

gsap.from(".animCounter", {
  textContent: "0",
  duration: 1,
  ease: "power1.inOut",
  modifiers: {
    textContent: value => formatNumber(value, 0) + "+"
  },
  scrollTrigger: {
    trigger: "#fast-facts",
    start: "100px 80%",
    end: "+=100",
    toggleActions: "play none none reverse",
  }
});

// Animacja sekcji z miłości do stali
gsap.set(".about-img", {x: "-150%"});
gsap.to(".about-img", {
  x: 0,
  duration: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".about-img",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none reverse"
  }
}
);
gsap.set("#years-anim", {x: "100%"});
gsap.to("#years-anim", {
  x: 0,
  duration: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".about-img",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none reverse"
  }
})

gsap.set(".index-about-us", {x: "150%"});
gsap.to(".index-about-us", {
  x: 0,
  duration: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".about-img",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none reverse"
  }
})




gsap.set("#index-row-2", { x: "-100%" });
gsap.to("#index-row-2", {
  x: 0, // Przesunięcie w osi x o 300 pikseli
  duration: 1, // Czas trwania animacji
  ease: "power2.inOut", // Easing funkcja
  scrollTrigger: {
    trigger: "#index-row-2", // Obiekt, który wywołuje ScrollTrigger
    start: "top center", // Początek animacji - gdy górna krawędź obiektu dojdzie do środka widoku
    end: "bottom center", // Koniec animacji - gdy dolna krawędź obiektu dojdzie do środka widoku
    markers: true,
    toggleActions: "play none none reverse" // Dodatkowe znaczniki wizualne dla debugowania
  }
});
gsap.set(".services-card-height", {rotationX: -180});
gsap.to(".services-card-height", {
  rotationX: 0, // Przesunięcie w osi x o 300 pikseli
  duration: 2, // Czas trwania animacji
  ease: "power2.inOut", // Easing funkcja
  scrollTrigger: {
    trigger: "#cardImg1", // Obiekt, który wywołuje ScrollTrigger
    start: "top center", // Początek animacji - gdy górna krawędź obiektu dojdzie do środka widoku
    end: "bottom center", // Koniec animacji - gdy dolna krawędź obiektu dojdzie do środka widoku
    markers: true,
    toggleActions: "play none none reverse" // Dodatkowe znaczniki wizualne dla debugowania
  }
});


function formatNumber(value, decimals) {
  let s = (+value).toLocaleString('en-US').split(".");
  return decimals ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals) : s[0];
}