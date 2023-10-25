const rootDiv = document.getElementById('root');

const playerBoard = document.createElement('div');
playerBoard.innerText = 'Player 1';

function createHeader() {
  // Create title element
  const titleDiv = _createElement('div');
  const titleH1 = _createElement('h1');
  titleH1.innerText = 'BattleShip';
  titleDiv.appendChild(titleH1);

  // game messages element
  const gameMessagesDiv = _createElement('div');
  const gameMessage = _createElement('p');
  gameMessage.innerText = 'Press the button to begin game';
  const gameButton = _createElement('button');
  gameButton.innerText = 'Play';
  gameMessagesDiv.appendChild(gameMessage);
  gameMessagesDiv.appendChild(gameButton);

  const headerWrapper = _createElement('div');
  headerWrapper.classList.add('header-wrapper');

  headerWrapper.appendChild(titleDiv)
  headerWrapper.appendChild(gameMessagesDiv)

  rootDiv.appendChild(headerWrapper);
}

function _createElement(element) {
  return document.createElement(element);
}

export default createHeader