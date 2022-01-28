class Game {
    private gameBoard: GameBoard;

    constructor() {
        this.gameBoard = new GameBoard();
    }

    update() {
        this.gameBoard.update();
    }

    draw() {
        this.gameBoard.draw();
    }
}