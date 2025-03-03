const draggableBox = document.getElementById("draggable-box");
const corner = document.getElementById("resizer-handle");

let offsetX = 0;
let isDragging = false;

corner.addEventListener("mousedown", (event) => {
  event.preventDefault();
  event.stopPropagation();
});

draggableBox.addEventListener("mousedown", (event) => {
  //prevent text from being highlighted
  event.preventDefault();
  isDragging = true;

  const boxRect = draggableBox.getBoundingClientRect();

  offsetX = event.clientX - boxRect.left;
  console.log(
    `MOUSEDOWN:
    event: ${event.clientX} ,boxRect.left: ${boxRect.left}, offSetX: ${offsetX}`
  );
});

document.addEventListener("mousemove", (event) => {
  if (!isDragging) return; //ensure we only move if isDragging is true

  let newLeft = event.clientX - offsetX;

  //prevent the box from going offscreen
  const minLeft = 0;
  const maxLeft = window.innerWidth - draggableBox.offsetWidth;
  console.log(
    `MOVING MOUSE:
        event: ${event.clientX} , offSetX: ${offsetX}, newLeft: ${newLeft}, maxLeft: ${maxLeft}`
  );

  newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));
  console.log(`newLeft after Math.max: ${newLeft}`);

  draggableBox.style.left = `${newLeft}px`;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
