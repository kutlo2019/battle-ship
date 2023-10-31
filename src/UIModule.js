import { publish } from './eventBus.js';

const GAME_MESSAGES_DIV = _createElement('div');
const ROOT_DIV = document.getElementById('root');

function renderGameboards(gameBoards, players) {
  const headerWrapper = createHeader();
  const boardsWrapper = createPlayerBoards(gameBoards, players);
  ROOT_DIV.appendChild(headerWrapper)
  ROOT_DIV.appendChild(boardsWrapper)
}

function createHeader() {
  // Create title element
  const titleDiv = _createElement('div');
  const titleH1 = _createElement('h1');
  titleH1.innerText = 'BattleShip';
  titleDiv.appendChild(titleH1);

  const GAME_MESSAGES_DIV = createGameMessages('Press the button to begin game')
  const gameButton = _createElement('button');
  gameButton.innerText = 'Play';
  GAME_MESSAGES_DIV.appendChild(gameButton);

  const headerWrapper = _createElement('div');
  headerWrapper.classList.add('header-wrapper');

  headerWrapper.appendChild(titleDiv);
  headerWrapper.appendChild(GAME_MESSAGES_DIV);

  return headerWrapper;
}

function updateMessage(message) {
  const messageParagraph = document.querySelector('.message');
  const newMsgDiv = _createElement('p');
  newMsgDiv.classList.add('message');
  newMsgDiv.innerText = message;
  messageParagraph.parentNode.replaceChild(newMsgDiv, messageParagraph); 
}

function createGameMessages(message) {
  GAME_MESSAGES_DIV.classList.add('game-messages');
  const gameMessage = _createElement('p');
  gameMessage.classList.add('message');
  gameMessage.innerText = message;
  GAME_MESSAGES_DIV.appendChild(gameMessage);
  return GAME_MESSAGES_DIV;
}

function updateBoards(gameBoards, players) {
  const boardsWrapper = document.querySelector('.boards-wrapper'); 
  const newWrapper = createPlayerBoards(gameBoards, players);
  boardsWrapper.parentNode.replaceChild(newWrapper, boardsWrapper); 
}

function createPlayerBoards(gameBoards, players) {
  const boardsWrapper = _createElement('div');
  boardsWrapper.classList.add('boards-wrapper');

  const player1Board = _createBoard(players.player1, gameBoards.gameBoard1);
  const player2Board = _createBoard(players.player2, gameBoards.gameBoard2);

  boardsWrapper.appendChild(player1Board);
  boardsWrapper.appendChild(player2Board);
  return boardsWrapper;
}

function _createBoard(player, gameBoard) {
  const playerBoard = _createElement('div');
  playerBoard.classList.add('player-board');

  const gridWrapper = _createElement('div');
  gridWrapper.classList.add('grid-wrapper');

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cellDiv = _createElement('div');
      cellDiv.classList.add('cell');
      let currentCell = gameBoard.cells[i][j];
      if (currentCell.hasShip) {
        cellDiv.classList.add('hasShip');
      }

      if (currentCell.isAttacked && currentCell.hasShip) {
        cellDiv.classList.add('shipHit');
      }

      if (currentCell.isAttacked) {
        cellDiv.classList.add('hit');
      }

      if (!player.turn) {
        cellDiv.addEventListener('click', () => {
          _handleAttack(cellDiv, currentCell, gameBoard, player)
        })

      } else {
        cellDiv.removeEventListener('click', () => {
          _handleAttack(cellDiv, currentCell, gameBoard, player)
        })
      }
  
      gridWrapper.appendChild(cellDiv);
    } 
  }

  const playerGridText = `${player.name} Grid`;
  const h3 = _createElement('h3');
  h3.classList.add('board-owner');
  h3.innerText = playerGridText;

  playerBoard.appendChild(gridWrapper);
  playerBoard.appendChild(h3);

  return playerBoard;
}

const _handleAttack = (cellDiv, currentCell, gameBoard, player) => {
  if (currentCell.isAttacked) {
    return;
  } else {
    gameBoard.receiveAttack(currentCell.x, currentCell.y);
    if (currentCell.hasShip) {
      cellDiv.classList.add('shipHit');
    } else {
      cellDiv.classList.add('hit');
    }
    publish('turnChange', player)
  }
}

function _createElement(element) {
  return document.createElement(element);
}

export { renderGameboards, updateBoards, updateMessage }