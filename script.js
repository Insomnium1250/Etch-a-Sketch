function createGrid(numberOfBoxes) {
  const container = document.querySelector("#container");
  container.innerHTML = ""; // Clear any existing grid

  for (let i = 0; i < numberOfBoxes ** 2; i++) {
    let div = document.createElement("div");
    div.id = `box${i}`;
    div.style.backgroundColor = "blue";
    div.style.width = `calc(90% / ${numberOfBoxes} - 2px)`; // Subtract 2px for the border
    div.style.height = `calc(90% / ${numberOfBoxes} - 2px)`; // Subtract 2px for the border
    div.style.boxSizing = "border-box";
    div.style.border = "1px solid white";
    container.appendChild(div);
  }
}

// Add event listener to the button
const createGridBtn = document.querySelector("#createGridBtn");
createGridBtn.addEventListener("click", () => {
  const numberOfBoxes = parseInt(document.querySelector("#gridInput").value);
  if (numberOfBoxes > 0) {
    createGrid(numberOfBoxes); // Create grid with the entered number of boxes
  } else {
    alert("Please enter a valid number.");
  }
});