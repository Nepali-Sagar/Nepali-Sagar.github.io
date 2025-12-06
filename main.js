const cursor = document.getElementById("cursor");
let mouseX = 0,
  mouseY = 0;
let currX = 0,
  currY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  const speed = 0.5;
  currX += (mouseX - currX) * speed;
  currY += (mouseY - currY) * speed;

  cursor.style.transform = `translate(${currX}px, ${currY}px)`;
  requestAnimationFrame(animateCursor);
}

animateCursor();

const contact = document.getElementById("contact");
const contactBox = document.getElementById("contactBox");
const contactBtn = document.getElementById("contactBtn");

contact.addEventListener("mouseover", () => {
  contact.style.fontWeight = "bold";
  contact.style.fontSize = "1.3em";
});

contact.addEventListener("click", () => {
  contactBox.style.display = "flex";
  contactBox.style.visibility = "visible"
  contactBox.style.transition = "0.5s ease-in";
  contact.style.fontWeight = "bold";
  contact.style.fontSize = "1.2em";
});

contactBtn.addEventListener("click", () => {
  contact.style.fontWeight = "normal";
  contact.style.fontSize = "1em";
  contactBox.style.display = "none";
  contactBox.style.transition = "0.5s ease-out";
});
