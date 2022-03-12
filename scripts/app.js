import { cursorMovement } from "./partials/cursor.js";

// locomotive scroll settings
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  direction: "horizontal", // if target is met change the direction to vertical
  lerp: 0.03,
});

const navigationTrigger = document.getElementsByClassName("menuButton");
console.log(navigationTrigger);

navigationTrigger[0].addEventListener("click", openNavigation);

const overlays = document.querySelectorAll("#overlay-container div");
let delay = 0;

function openNavigation() {
  overlays.forEach((overlay) => {
    delay++;

    gsap.fromTo(
      overlay,
      { height: 0 },
      {
        duration: 1,
        delay: delay / 3,
        height: "100vh",
        zIndex: 99,
        y: "0",
      }
    );
  });
}

// function closeNavigation() {

// }

//tweens from width 0 to 100 and height 0 to 200

// 1. 3 rows of divs
// 2. animation - delay on each div
// 3. links in each div: about cases contact
// 4. go to page in background and remove the divs when page is loaded
// 5.
