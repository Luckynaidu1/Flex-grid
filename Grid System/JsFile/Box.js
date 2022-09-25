function viewRandomColor() {
  const r = Math.floor(Math.random() * 225);
  const g = Math.floor(Math.random() * 225);
  const b = Math.floor(Math.random() * 225);

  return `rgb(${r}, ${g} , ${b})`;
}

function viewRandomSize() {
  return Math.floor(Math.random() * (120 - 60 + 1)) + 60;
}

const boxes = document.querySelectorAll("#random-boxes");

for (let i = 0; i < boxes.length; i++) {
  let item = boxes[i];
  item.style.backgroundColor = viewRandomColor();
  item.style.width = `${viewRandomSize()}px`;
  item.style.height = `${viewRandomSize()}px`;
}
