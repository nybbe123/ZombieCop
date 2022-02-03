class Gameboard {
    private factory: Factory;
    private enemies: Enemy[];
    private player: Player;

    constructor() {
        this.factory = new Factory();
        this.enemies = this.factory.getEnemies();

        this.player = new Player(
            images.player,
            createVector(125, 125),
            createVector(width * .5, height * .90),
            {
                left: 65,
                right: 68,
                shoot: ENTER
            }
        );
    }

    private checkCollision() {
        for(const enemy of this.enemies) {
            for(const bullet of this.player.bullets) {
                if(dist(enemy.position.x, enemy.position.y, bullet.x, bullet.y) < 35) {
                    this.enemies.splice(this.enemies.indexOf(enemy), 1);
                    this.player.bullets.splice(this.player.bullets.indexOf(bullet), 1);
                    this.player.score += 10;
                    this.factory.createNewEnemy();
                }
            }
        }
    }
    
    public update() {
        this.player.update();
        
        for(const enemy of this.enemies) {
            enemy.update();
        }
        
        this.checkCollision();
    }
    
    public draw() {
        this.player.draw();
        
        for(const enemy of this.enemies) {
            enemy.draw();
        }
        
    }
}