class Game {
    private gameboard: Gameboard;

    constructor() {
        this.gameboard = new Gameboard();
    }

    update() {
        this.gameboard.update();
    }

    draw() {
        this.gameboard.draw();
    }
}