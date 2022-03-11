import { cursorMovement } from "./partials/cursor.js";

// locomotive scroll settings
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  direction: "horizontal", // if target is met change the direction to vertical
  lerp: 0.03,
});

// 1. target
// 2. horzintal
// 3. target
// 4. vertical
