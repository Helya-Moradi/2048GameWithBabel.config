import Board from "./classes/board.js";
var board = new Board();
function keyDownHandler(e) {
  if (e.code.startsWith('Arrow')) {
    var direction = e.code.substring(5).toLowerCase();
    board.moveHandler(direction);
  }
}
window.addEventListener('keydown', keyDownHandler);