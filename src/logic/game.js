import '../styles/game.style.css';

function Game() {
  function shipElement(shipSize) {
    return Object.assign(document.createElement('div'), {
      className: String(shipSize),
    });
  }

  const convertNumbersToWords = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
  };

  function renderShips() {
    for (let i = 2; i < 6; i += 1) {
      const shipClassName = convertNumbersToWords[i];
      if (i !== 2) {
        document.body.append(shipElement(shipClassName));
      } else {
        document.body.append(shipElement(shipClassName));
        document.body.append(shipElement(shipClassName));
      }
    }
  }

  function playGame() {

  }

  return { renderShips, playGame };
}

export { Game };
