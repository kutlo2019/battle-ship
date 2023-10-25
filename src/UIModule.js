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
  gameMessagesDiv.classList.add('game-messages')
  gameMessagesDiv.appendChild(gameMessage);
  gameMessagesDiv.appendChild(gameButton);

  const headerWrapper = _createElement('div');
  headerWrapper.classList.add('header-wrapper');

  headerWrapper.appendChild(titleDiv);
  headerWrapper.appendChild(gameMessagesDiv);

  rootDiv.appendChild(headerWrapper);
}

function createPlayerBoards() {
  const boardsWrapper = _createElement('div')
  boardsWrapper.classList.add('boards-wrapper');

  const player1Board = _createBoard('Player 1');
  const player2Board = _createBoard('Computer');

  boardsWrapper.appendChild(player1Board);
  boardsWrapper.appendChild(player2Board);
  rootDiv.appendChild(boardsWrapper);
}

function _createBoard(player) {

  const playerBoard = _createElement('div');
  playerBoard.classList.add('player-board');

  const gridWrapper = _createElement('div');
  gridWrapper.classList.add('grid-wrapper');

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = _createElement('div');
      cell.classList.add('cell');
      gridWrapper.appendChild(cell);
    } 
  }

  const playerGridText = `${player} Grid`;
  const h3 = _createElement('h3');
  h3.classList.add('board-owner');
  h3.innerText = playerGridText;

  playerBoard.appendChild(gridWrapper);
  playerBoard.appendChild(h3);

  return playerBoard;
}

function _createElement(element) {
  return document.createElement(element);
}

export { createHeader, createPlayerBoards }