const customCursor = () => {
  let newCursor = document.getElementById("cursor");
  document.addEventListener("mousemove", cursorMovement);

  function cursorMovement(event) {
    newCursor.style.top = event.clientY + "px";
    newCursor.style.left = event.clientX + "px";
  }
};

export { customCursor };
