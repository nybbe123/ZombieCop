class Gameboard {
    private player: Player;

    constructor() {
        this.player = new Player(
            images.playerLeft,
            createVector(65, 100),
            createVector(width * .5, height * .85),
            {
                left: 65,
                right: 68,
                shoot: ENTER
            }
        );
    }

    public update() {
        this.player.update();
    }

    public draw() {
        this.player.draw();
    }
}