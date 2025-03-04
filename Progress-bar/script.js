// Grab references
const row = document.getElementById("progress-row");
const bar = document.getElementById("red-progress");
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", () => {
  // 1) Remove any existing transition so we can jump to 0% immediately
  bar.style.transition = "none";
  // 2) Set width to 0% => this instantly wipes any previous progress
  bar.style.width = "0%";

  // 3) Force a reflow so the browser applies "0%" with no transition
  void bar.offsetWidth;

  // 4) Re-enable a 10s transition
  bar.style.transition = "width 10s linear";

  // 5) Finally, set to 100% after a short delay or immediately
  setTimeout(() => {
    bar.style.width = "100%";
  }, 20);
});
