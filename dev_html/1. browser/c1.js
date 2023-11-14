const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const label = document.querySelector(".label");

// addEventListener("load", () => {
//   console.log("test");
//   const domRect = target.getBoundingClientRect();
//   const twidth = domRect.width;
//   const theight = domRect.height;
//   console.log(`${twidth}, ${theight}`);
// }

//   document.addEventListener("mousemove", (event) => {
//     const x = event.clientX;
//     const y = event.clientY;
//     console.log(`${x}, ${y}`);
//     vertical.style.left = `${x}px`;
//     horizontal.style.top = `${y}px`;
//     target.style.left = `${x}px`;
//     target.style.top = `${y}px`;
//     label.style.left = `${x}px`;
//     label.style.top = `${y}px`;

//     label.innerHTML = `(${x}, ${y})`;
//   });
// });

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  console.log(`${x}, ${y}`);
  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  label.style.left = `${x}px`;
  label.style.top = `${y}px`;

  label.innerHTML = `(${x}, ${y})`;
});
