function createGrid(numberOfBoxes) {
  const container = document.querySelector("#container");
  container.innerHTML = ""; // Clear any existing grid

  for (let i = 0; i < numberOfBoxes ** 2; i++) {
    let div = document.createElement("div");
    div.id = `box${i}`;
    div.style.backgroundColor = "black";
    div.style.opacity = "0.1";
    div.style.width = `calc(960px / ${numberOfBoxes})`;
    div.style.aspectRatio ="1/1";
    div.style.boxSizing = "border-box";
    div.style.border = "solid white 1px";
    container.appendChild(div);
  }

  const squares = document.querySelectorAll("#container *");
  squares.forEach(square => {
    square.addEventListener("mouseenter", () => {
      let currentOpacity = parseFloat(square.style.opacity);
      if (currentOpacity < 1) {
        square.style.opacity = (currentOpacity + 0.1).toString();
      }
    });
  });
}

// Add event listener to the button
const createGridBtn = document.querySelector("#createGridBtn");
createGridBtn.addEventListener("click", () => {
  const numberOfBoxes = parseInt(document.querySelector("#gridInput").value);
  if (numberOfBoxes > 0 && numberOfBoxes <= 100) {
    createGrid(numberOfBoxes); // Create grid with the entered number of boxes
  } else {
    alert("Please enter a number from 1 to 100.");
  }
});