class GameOverMenu {
    private gameState: GameState;
    private gameOverDivEl: HTMLDivElement;

    constructor(gameState: GameState) {
        this.gameState = gameState;

        this.gameOverDivEl = document.createElement('div');
        this.gameOverDivEl.className = 'start-main-div';

        const gameOverTitle = document.createElement('h1');
        gameOverTitle.textContent = 'Game over';

        const quitGameBtn = document.createElement('button');
        quitGameBtn.textContent = 'Main menu';
        quitGameBtn.className = 'btn';
        quitGameBtn.addEventListener('click', () => this.quitGame());

        this.gameOverDivEl.append(gameOverTitle, quitGameBtn);
    }

    public openGameOverMenu() {
        document.body.append(this.gameOverDivEl);
    }

    public quitGame() {
        window.location.reload();
    }
}