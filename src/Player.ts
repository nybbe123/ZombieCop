class Player {
    private appearance: p5.Image;
    private size: p5.Vector;
    private position: p5.Vector;
    private controls: Controls;
    private velocity: number;

    private bullets: any[];
    private isShooting: boolean;

    constructor(appearance: p5.Image, size: p5.Vector, position: p5.Vector, controls: Controls) {
        this.appearance = appearance;
        this.size = size;
        this.position = position;
        this.controls = controls;
        this.velocity = 15;
        
        this.bullets = [];
        this.isShooting = false;
    }

    private move() {
        if(keyIsDown(this.controls.left)) {
            this.position.x -= this.velocity;
            this.appearance = images.playerLeft;
        } else if (keyIsDown(this.controls.right)) {
            this.position.x += this.velocity;
            this.appearance = images.playerRight;
        }
    }

    private border() {
        if(this.position.x < 0) {
            this.position.x += this.velocity;
        } else if(this.position.x > width - 62) {
            this.position.x -= this.velocity;
        }
    }

    private shoot() {
        if(!this.isShooting) {
            this.isShooting = true;

            setTimeout(() => {
                this.isShooting = false;
            }, 500);

            const bullet = {
                x: this.position.x,
                y: this.position.y
            }
            return this.bullets.push(bullet);
        }
    }

    public update() {
        this.move();
        this.border();
        if(keyIsDown(this.controls.shoot)) {
            return this.shoot();
        }
    }

    public draw() {
        push();
        image(this.appearance, this.position.x, this.position.y, this.size.x, this.size.y)
        pop();

        for(const bullet of this.bullets) {
            fill('red');
            circle(bullet.x, bullet.y, 10);
            bullet.y -= 10;
        }
    }
}