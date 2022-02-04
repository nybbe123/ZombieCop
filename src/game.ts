type GameStateLabel = 'Start' | 'Running' | 'GameOver';

interface GameState {
    activeGameState: GameStateLabel;
    setGameState: (state: GameStateLabel) => void;
}

class Game implements GameState {
    public activeGameState: GameStateLabel;
    private startMenu: StartMenu;
    private gameboard: GameBoard;
    private gameOverMenu: GameOverMenu;
    
    constructor() {
        this.activeGameState = 'Start';
        this.startMenu = new StartMenu(this);
        this.gameboard = new GameBoard(this);
        this.gameOverMenu = new GameOverMenu(this);
    }
    
    public setGameState = (state: GameStateLabel) => {
        this.activeGameState = state;
        if(state === 'Start') {
            this.startMenu.openStartMenu();
        }  else if (state === 'GameOver') {
            this.gameOverMenu.openGameOverMenu();
        } else if (state === 'Running') {
            
        }
    }

    update() {
        if(this.activeGameState === 'Running') {
            this.gameboard.update();
        }
    }

    draw() {
        background('black');
        if(this.activeGameState === 'Running') {
            this.gameboard.draw();
        }
    }
}