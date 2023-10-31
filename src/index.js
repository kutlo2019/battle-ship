import { renderGameboards, updateBoards, updateMessage } from "./UIModule.js";
import Gameboard from './Gameboard.js'
import Player from "./Player.js";
import { subscribe } from "./eventBus.js";

const player1 = new Player('Player 1');
const player2 = new Player('Computer');
player1.turn = true
const players = { player1, player2 };

const gameBoard1 = new Gameboard();
const gameBoard2 = new Gameboard();
const gameBoards = { gameBoard1, gameBoard2 };

// const data = {
//   isPlayer1Turn: player
// };

renderGameboards(gameBoards, players);

subscribe('turnChange', (player) => {
  player.turn = true;
  if (player.name == 'Computer') {
    players.player1.turn = false;
  } else {
    players.player2.turn = false
  }
  updateMessage(`${player.name}'s turn`);
  updateBoards(gameBoards, players);
})

function switchTurns() {
  players.player1.turn = !players.player1.turn;
  players.player2.turn = !players.player2.turn;
  console.log('players afta', players);
}

// let startGame = true;
// while(startGame) {
//   while(playe)
// }

// function mainLoop() {
//   updateBoards(gameBoards, players);
//   requestAnimationFrame(mainLoop);
// }

// requestAnimationFrame(mainLoop)