let tl = gsap.timeline();

function navbarStyling() {
  const navbar = document.getElementById("navbar");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");

  const mainContainer = document.querySelector(".mainContainer");
  let lastScrollY = mainContainer.scrollTop;

  mainContainer.addEventListener("scroll", () => {
    const currentScrollY = mainContainer.scrollTop;

    if (currentScrollY > lastScrollY) {
      navbar.style.top = "-100px"; // Hide
    } else {
      navbar.style.top = "16px"; // Show
    }

    lastScrollY = currentScrollY;
  });

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
}

navbarStyling();
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
    x: "-150%",
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

function globalMagnifier() {
  const absoluteDiv = document.querySelector(".absoluteDiv");
  const zoomedText = absoluteDiv.querySelector(".zoomedText");

  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Move magnifier to cursor
    gsap.to(absoluteDiv, {
      x: x,
      y: y,
      duration: 0.2,
      ease: "power2.out",
    });

    // Get element under cursor
    const hoveredElement = document.elementFromPoint(x, y);

    if (
      hoveredElement &&
      hoveredElement !== absoluteDiv &&
      hoveredElement !== zoomedText
    ) {
      const styles = getComputedStyle(hoveredElement);

      // Clone text content
      const content = hoveredElement.innerText || hoveredElement.alt || "";
      zoomedText.innerText = content;
      zoomedText.style.fontSize = styles.fontSize;
      zoomedText.style.fontWeight = styles.fontWeight;
      zoomedText.style.fontFamily = styles.fontFamily;
      zoomedText.style.color = styles.color;

      // Position zoomed text with scale
      const bounds = hoveredElement.getBoundingClientRect();
      const offsetX = x - bounds.left;
      const offsetY = y - bounds.top;
      zoomedText.style.transform = `translate(${
        -offsetX + 80
      }px, ${-offsetY}px) scale(3.5)`;
    } else {
      zoomedText.innerText = "";
    }
  });

  document.addEventListener("mouseenter", () => {
    gsap.to(absoluteDiv, {
      height: "80px",
      width: "80px",
      opacity: 1,
      scale: 1,
      duration: 0.3,
    });
  });

  document.addEventListener("mouseleave", () => {
    gsap.to(absoluteDiv, {
      height: "40px",
      width: "40px",
      opacity: 0,
      scale: 0,
      duration: 0.3,
    });
    zoomedText.innerText = "";
  });
}

function contactUsModal() {
  const modal = document.getElementById("contactModal");
  const closeModal = document.getElementById("closeModal");
  const contactBtns = document.querySelectorAll(".contact-now");

  setTimeout(() => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }, 8000);

  contactBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  });
}
contactUsModal();

globalMagnifier();

countableTxt();
section7Animations();
section6Animations();
section5Animations();
section3ScrollingAnim();
section2ScrollingAnim();
heroTextScalingAnim();
navbarAnimations();
