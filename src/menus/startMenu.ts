class StartMenu {
    private gameState: GameState;
    private startMenuDiv: HTMLDivElement;

    constructor(gameState: GameState) {
        this.gameState = gameState;

        this.startMenuDiv = document.createElement('div');
        this.startMenuDiv.className = 'start-main-div';
        
        const title = document.createElement('h1');
        title.textContent = 'ZombieCop';
        title.className = 'game-title';

        const startNewGameBtn = document.createElement('button');
        startNewGameBtn.textContent = 'Start Game'
        startNewGameBtn.className = 'btn';
        startNewGameBtn.addEventListener('click', () => this.startNewGame());

        const gameRuleBtn = document.createElement('button');
        gameRuleBtn.textContent = 'Game Rules';
        gameRuleBtn.className = 'btn';
        gameRuleBtn.addEventListener('click', () => this.openRuleMenu());

        this.startMenuDiv.append(title, startNewGameBtn, gameRuleBtn);
        this.openStartMenu();

    }

    public openStartMenu() {
        document.body.append(this.startMenuDiv);
    }

    public startNewGame() {
        this.gameState.setGameState('Running');
        this.startMenuDiv.remove();
    }

    public openRuleMenu() {
        this.gameState.setGameState('GameRules');
        this.startMenuDiv.remove();
    }
}