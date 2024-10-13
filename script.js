const container = document.querySelector("#container");
for (let i=0; i<16; i++) {
  let div = document.createElement("div");
  div.id = `box${i}`;
  container.appendChild(div);
}