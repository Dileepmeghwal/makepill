function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

// function textAnim() {
let tl = gsap.timeline();

gsap.to("#loader", {
  duration: 5,
  display: "none",
});
tl.from("#loader .loader-intro h3 span", {
  x: -40,
  y: -50,
  opacity: 0,
  ease: "power4.out",

  stagger: 0.2,
  pause: true,
});

tl.from("nav> div", {
  y: 50,
  opacity: 0,
  stagger: 0.16,
});

tl.from(".page1_text .title__wrapper span", 1.3, {
  y: 100,
  opacity: 0,
  ease: "power4.out",
  // delay: 1,
  stagger: {
    amount: 0.3,
  },
});
tl.from(".page1_text .min-text span", 1.2, {
  y: 100,
  opacity: 0,
  ease: "power4.out",
  // delay: 1,
  // skewY: 7,
  stagger: {
    amount: 0.3,
  },
});

gsap.to("header nav div", {
  color: "#000",
  scrollTrigger: {
    trigger: ".page3 ",
    scroller: "#main",
    // markers: true,
    start: "top top", // Adjust the start position as needed
    end: "bottom top", // Adjust the end position as needed
    scrub: 0.1, // Smooth animation during scroll
  },
});
gsap.to(" header >nav button", {
  color: "#000",
  border: "1px solid #000",
  scrollTrigger: {
    trigger: ".page3 ",
    scroller: "#main",
    // markers: true,
    start: "top top", // Adjust the start position as needed
    end: "bottom top", // Adjust the end position as needed
    scrub: 0.1, // Smooth animation during scroll
  },
});

gsap.to(".page3, .page4", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".page5 ",
    // markers: true,
    scroller: "#main",
    start: "-50% 150px", // Adjust the start position as needed
    end: "-5% bottom", // Adjust the end position as needed
    scrub: 0.22, // Smooth animation during scroll
  },
});

const header = document.querySelector("header nav div");
const headerButton = document.querySelector("header > nav button");
const slider = document.getElementsByClassName(".slider");

gsap.to(".page4 > .slider h1", {
  backgroundColor: "#000",
  color: "#ffffff",
  scrollTrigger: {
    trigger: ".page5 ",
    // markers: true,
    scroller: "#main",
    start: "-50% 150px", // Adjust the start position as needed
    end: "-5% bottom", // Adjust the end position as needed
    scrub: 0.22, // Smooth animation during scroll
  },
});
gsap.to("header nav div", {
  color: "#ffffff",
  scrollTrigger: {
    trigger: ".page5 ",
    // markers: true,
    scroller: "#main",
    start: "-50% 150px", // Adjust the start position as needed
    end: "-5% bottom", // Adjust the end position as needed
    scrub: 0.22, // Smooth animation during scroll
  },
});
gsap.to("header > nav button", {
  color: "#ffffff",

  border: "1px solid #fff",
  scrollTrigger: {
    trigger: ".page5 ",
    scroller: "#main",
    // markers: true,
    start: "-50% 150px", // Adjust the start position as needed
    end: "-5% bottom", // Adjust the end position as needed
    scrub: 0.22, // Smooth animation during scroll
  },
});
gsap.from(".page3 .box-r h4", 1.2, {
  y: -100,

  opacity: 0,
  ease: "power4.out",
  // delay: 1,
  // skewY: 7,
  stagger: {
    amount: 0.3,
  },
  scrollTrigger: {
    trigger: ".page3 ",
    scroller: "#main",
    // markers: true,
    start: "top top", // Adjust the start position as needed
    end: "bottom bottom", // Adjust the end position as needed
    scrub: 0.22, // Smooth animation during scroll
  },
});

let battleVideo = document.querySelector("#battleHack");
let greenbetVideo = document.querySelector("#greenbet");
let airbusgamingVideo = document.querySelector("#airbusgaming");

// const cursor = new MouseFollower();
// const el = document.querySelector('.page3');

// el.addEventListener('mouseenter', () => {
//     cursor.hide();
// });

// el.addEventListener('mouseleave', () => {
//     cursor.show();
// });

const cursor = new MouseFollower({
  container: document.body,
  speed: 0.3,
});

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let button = document.querySelector(".btn-aling");
let div = document.querySelector("#fullscreenMenu");
var isToggle = false;
button.addEventListener("click", function () {
  // Create a GSAP timeline
  var tl = gsap.timeline();

  // Toggle the value of isToggle
  isToggle = !isToggle;

  // Add animations to the timeline based on the toggle state
  if (isToggle) {
    tl.to("#one", { x: -4, rotate: -12 });
    tl.to("#two", { x: 4, rotate: 12 }, 0);
    tl.to("#fullscreenMenu", { top: "0", opacity: 1 });
    tl.from(`#fullscreenMenu .right-side ul li`, {
      x: -50,
      opacity: 0,
      stagger: 0.3,
    });
  } else {
    // Reverse the animations
    tl.to("#fullscreenMenu .right-side ul li", {
      x: -50,
      opacity: 0,
      stagger: 0.3,
    });
    gsap.to("#fullscreenMenu", {
      top: "-100%",
      opacity: 1,
    });
    tl.to("#one", { x: 0, rotate: 0 }, "-=1"); // Reverse animation should start 1 second earlier
    tl.to("#two", { x: 0, rotate: 0 }, "-=1");
  }

  gsap.to(button, { rotation: isToggle ? 0 : 0 }); // Rotate the button based on the toggle state
});

const cursorr = new MouseFollower({
  visible: false,
});
const elr = document.querySelector("#fullscreenMenu ul");
const elr2 = document.querySelector("#fullscreenMenu .right-side ul");

elr.addEventListener("mouseenter", () => {
  cursorr.show();
  cursorr.setText("Open!");
});

elr.addEventListener("mouseleave", () => {
  cursorr.removeText();
  cursorr.hide();
});

elr2.addEventListener("mouseenter", () => {
  cursorr.show();
  cursorr.setText("Open!");
});

elr2.addEventListener("mouseleave", () => {
  cursorr.removeText();
  cursorr.hide();
});

const videoBox = document.getElementById("mainVideo");
const listItems = document.querySelectorAll(".cubreto");

const defaultVideoSrc = listItems[0].getAttribute("data-video-src");
videoBox.src = defaultVideoSrc;
videoBox.load();

listItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    const videoSrc = item.getAttribute("data-video-src");
    gsap.to(videoBox, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        videoBox.src = videoSrc;
        videoBox.load();
        gsap.to(videoBox, { opacity: 1, duration: 0.3 });
      },
    });
  });
});
