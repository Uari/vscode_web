addEventListener("load", () => {
  console.log("test");
  const domRect = target.getBoundingClientRect();
  const twidth = domRect.width;
  const theight = domRect.height;
  console.log(`${twidth}, ${theight}`);
  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`${x}, ${y}`);
    label.ATTRIBUTE_NODE.valueOf(x);
  });
});
