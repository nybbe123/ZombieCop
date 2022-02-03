type GameStateLabel = 'Start' | 'GameRules' | 'Running' | 'Pause' | 'GameOver';

interface GameState {
    activeGameState: GameStateLabel;
    setGameState: (state: GameStateLabel) => void;
}

class Game implements GameState {
    public activeGameState: GameStateLabel;
    private startMenu: StartMenu;
    private gameboard: GameBoard;
    
    constructor() {
        this.activeGameState = 'Start';
        this.startMenu = new StartMenu(this);
        this.gameboard = new GameBoard(this);
    }
    
    public setGameState = (state: GameStateLabel) => {
        this.activeGameState = state;
        if(state === 'Start') {
            this.startMenu.openStartMenu();
        }
    }

    update() {
        if(this.activeGameState === 'Running') {
            this.gameboard.update();
        }
    }

    draw() {
        if(this.activeGameState === 'Running') {
            this.gameboard.draw();
        }
    }
}