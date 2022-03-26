const navigation = function () {
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
};

export { navigation };
