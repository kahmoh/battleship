import '../styles/game.style.css';

const element = document.createElement('div');
element.classList.add('five');
element.style.position = 'fixed';

function moveElement(x, y) {
  for (let i = 0; i < 100; i += 1) {
    document.getElementById(i).style.backgroundColor = 'white';
  }
  const topCoordinate = (event.clientY - y);
  const leftCoordinate = (event.clientX - x);
  element.style.top = `${topCoordinate}px`;
  element.style.left = `${leftCoordinate}px`;
  const targetTile = document.elementsFromPoint(leftCoordinate, topCoordinate)[0];
  if (document.getElementById(targetTile.id + targetTile.id / 50)) {
    for (let i = 0; i < targetTile.id / 50; i += 1) {
      document.getElementById(targetTile.id + i).style.backgroundColor = 'red';
    }
  }
  if (document.elementsFromPoint(leftCoordinate, topCoordinate)[0].id > 0
      && document.elementsFromPoint(leftCoordinate, topCoordinate)[0].id < 100) {
    element.style.left = `${targetTile.getBoundingClientRect().x - 10}px`;
    element.style.top = `${targetTile.getBoundingClientRect().y - 10}px`;
  }
}

element.addEventListener('mousedown', (event) => {
  const x = event.clientX - element.offsetLeft; const
    y = event.clientY - element.offsetTop;
  const onMouseMove = (event) => moveElement(x, y);
  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', onMouseMove);
  });
  document.addEventListener('mousemove', onMouseMove);
});

document.body.appendChild(element);
