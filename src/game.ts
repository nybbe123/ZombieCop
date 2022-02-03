type GameStateLabel = 'Start' | 'GameRules' | 'Running' | 'Pause' | 'GameOver';

interface GameState {
    activeGameState: GameStateLabel;
    setGameState: (state: GameStateLabel) => void;
}

class Game implements GameState {
    public activeGameState: GameStateLabel;
    private startMenu: StartMenu;
    private gameboard: Gameboard;
    
    constructor() {
        this.activeGameState = 'Start';
        this.startMenu = new StartMenu(this);
        this.gameboard = new Gameboard(this);
    }
    
    public setGameState = (state: GameStateLabel) => {
        this.activeGameState = state;
        if(state === 'Start') {
            this.startMenu.openStartMenu();
        } else if(state === 'Running') {
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