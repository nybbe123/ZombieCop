const enemies: Enemy[] = [];

class Factory {
    public getEnemies() {
        for(let i = 0; i < 3; i++) {
            enemies.push(new Enemy(images.enemy, createVector(75, 75), createVector(random(75, width - 75), random(-1500, 0))));
        }
        return enemies;
    }

    public createNewEnemy() {
        enemies.push(new Enemy(images.enemy, createVector(75, 75), createVector(random(75, width - 75), random(-1500, 0))));
    }
}