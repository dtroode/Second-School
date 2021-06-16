const header = document.querySelector('header');
const image = document.querySelector('#pouchkine');

header.addEventListener("mouseover", () => { image.src = "/src/images/pouchkine.gif" });
header.addEventListener("mouseout", () => { image.src = "/src/images/pouchkine.jpg" });