// const nextButton = document.querySelector(".next");
// const previousButton = document.querySelector(".previous");

// const buttons = () => {
//   nextButton.addEventListener("click", function () {
//     slideOneNext();
//   });

//   previousButton.addEventListener("click", function () {
//     slideOnePrev();
//   });

//   console.log(nextButton, previousButton);

//   // Slidable objects
//   let count = 0;
//   const targets = document.querySelectorAll(".box");

//   console.log(targets);

//   gsap.set(targets, { xPercent: 100 });
//   gsap.set(targets[0], { xPercent: 0 });

//   // Next button
//   function slideOneNext() {
//     gsap.fromTo(
//       targets[count],
//       { xPercent: 0, zIndex: 0 },
//       { delay: 0.2, duration: 1.2, xPercent: 0, zIndex: -10 }
//     );
//     count = count < targets.length - 1 ? ++count : 0;
//     gsap.fromTo(
//       targets[count],
//       { xPercent: 100, zIndex: 10 },
//       { duration: 1.2, xPercent: 0, zIndex: 0 }
//     );
//   }

//   // Previous button
//   function slideOnePrev() {
//     gsap.fromTo(
//       targets[count],
//       { xPercent: 0, zIndex: 10 },
//       { xPercent: 0, zIndex: 0 }
//     );
//     gsap.fromTo(
//       targets[count],
//       { xPercent: 0, zIndex: 0 },
//       { delay: 0, duration: 1.2, xPercent: 100, zIndex: -10 }
//     );
//     count = count < targets.length ? --count : 0;
//   }
// };

// export { buttons };
