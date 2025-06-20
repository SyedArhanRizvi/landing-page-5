// let lastScrollY = window.scrollY;
// const navbar = document.getElementById("navbar");
// const menuBtn = document.getElementById("menu-btn");
// const mobileMenu = document.getElementById("mobile-menu");

// // document.querySelector("main").addEventListener("scroll", () => {
// //   console.log("Scrolling");
// // });
// document.querySelector("main").addEventListener('scroll', (e)=>{

//   if (window.scrollY > lastScrollY) {
//     navbar.style.top = "-100%";
//     mobileMenu.classList.add("hidden");
//   } else {
//     navbar.style.top = "20px";
//   }

//   lastScrollY = window.scrollY;
// })

let tl = gsap.timeline();

function navbarAnimations() {
  tl.from(".logo-h1", {
    opacity: 0.1,
    scale: 0.1,
    duration: 0.5,
  });
  document.querySelectorAll(".logo-h-icons").forEach((ele) => {
    tl.from(ele, {
      opacity: 0.1,
      scale: 0.1,
      duration: 0.2,
    });
  });
  document.querySelectorAll(".hero-ttl").forEach((ele) => {
    tl.from(ele, {
      x: "-100%",
      scale: 0,
      duration: 0.5,
    });
  });
  let para_container = document.querySelector(".hero-para");
  let paraTxt = para_container.textContent;
  let splitPara = paraTxt.split("");
  para_container.textContent = " ";
  splitPara.forEach((txt) => {
    let span = document.createElement("span");
    span.textContent = txt;
    para_container.appendChild(span);
  });
  tl.from(".hero-para span", {
    y: 50,
    opacity: 0,
    scale: 0.1,
    duration: 0.5,
  });
}

function heroTextScalingAnim() {
  gsap.from(".hero-para-2", {
    y: "20%",
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero-para-2",
      scroller: "main",
      // markers: true,
      start: "top 80%",
      end: "top 30%",
      scrub: 3,
    },
  });
  gsap.from(".hero-para-2-ttl", {
    x: "-20%",
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero-para-2-ttl",
      scroller: "main",
      // markers: true,
      start: "top 80%",
      end: "top 30%",
      scrub: 3,
    },
  });
}

function section2ScrollingAnim() {
  gsap.from(".sr-tag ", {
    y: "-20%",
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".sr-tag ",
      scroller: "main",
      // markers: true,
      start: "top 80%",
      end: "top 30%",
      scrub: 3,
    },
  });

  document.querySelectorAll(".sr-container").forEach((div) => {
    gsap.from(div, {
      y: "20%",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: div,
        scroller: "main",
        // markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: 3,
      },
    });
  });
}

function section3ScrollingAnim() {
  document.querySelectorAll(".card1").forEach((card) => {
    gsap.to(card, {
      scale: 0.7,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        scroller: "main",
        // markers: true,
        start: "top 10%",
        end: "bottom 10%",
        scrub: 2,
      },
    });
  });
}

function section5Animations() {
  document.querySelectorAll(".s5-card").forEach((div) => {
    gsap.from(div, {
      y: "20%",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: div,
        scroller: "main",
        // markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: 3,
      },
    });
  });
}

function section6Animations() {
  gsap.to(".s6", {
    y: "100%",
    scale: 0.7,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".s6",
      scroller: "main",
      // markers: true,
      start: "top 0%",
      end: "bottom 0%",
      scrub: 1,
    },
  });
}

function section7Animations() {
  gsap.from(".s7-div", {
    x: "20%",
    opacity: 0,
    duration: 1,
    scale: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".s7-div",
      scroller: "main",
      // markers: true,
      start: "top 80%",
      end: "top 30%",
      scrub: 3,
    },
  });
}

function countableTxt() {
  document.querySelectorAll(".coutable-txt").forEach((txt) => {
    const finalText = txt.textContent.trim();
    const isPercent = finalText.includes("%");
    const isPlus = finalText.includes("+");

    const number = parseInt(finalText);

    let obj = { val: 0 };

    gsap.to(obj, {
      val: number,
      duration: 2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: txt,
        start: "top 50%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        txt.textContent =
          Math.floor(obj.val) + (isPercent ? "%" : isPlus ? "+" : "");
      },
    });
  });
}

countableTxt();

section7Animations();
section6Animations();
section5Animations();
section3ScrollingAnim();
section2ScrollingAnim();
heroTextScalingAnim();
navbarAnimations();
