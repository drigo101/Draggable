// get element references
const draggableBox = document.getElementById("draggable-box");
const corner = document.getElementById("resizer-handle");

// track horizontal offset and drag state
let offsetX = 0;
let isDragging = false;

// prevent the corner from triggering the box's drag logic
corner.addEventListener("mousedown", (event) => {
  event.preventDefault();
  event.stopPropagation();
});

// prepare for draggin when user clicks (mousedown)
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

// computing the new left position when we drag the box
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

// on mouseup, the drag action ends
document.addEventListener("mouseup", () => {
  isDragging = false;
});
