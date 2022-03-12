import { cursorMovement } from "./partials/cursor.js";

// locomotive scroll settings
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  direction: "horizontal", // if target is met change the direction to vertical
  lerp: 0.03,
});

const navigationTrigger = document.getElementsByClassName("menuButton");

// open the menu
navigationTrigger[0].addEventListener("click", function () {
  gsap.fromTo(
    "#overlay-container div",
    { height: 0 },
    {
      duration: 1,
      stagger: 0.4,
      height: "100vh",
      zIndex: 99,
      y: "0",
    }
  );
});

// close the menu

// document.querySelectorAll(".box").forEach(function(box) {
//   box.addEventListener("click", function() {
//     gsap.to(".box", {
//       duration: 0.5,
//       opacity: 0,
//       y: -100,
//       stagger: 0.1,
//       ease: "back.in"
//     });
//   });
// });

// 1. 3 rows of divs
// 2. animation - delay on each div
// 3. links in each div: about cases contact
// 4. go to page in background and remove the divs when page is loaded
// 5.
