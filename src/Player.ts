class Player {
    private appearance: p5.Image;
    private size: p5.Vector;
    private position: p5.Vector;
    private controls: Controls;
    private velocity: number;

    public bullets: any[];
    private isShooting: boolean;

    public score: number;

    constructor(appearance: p5.Image, size: p5.Vector, position: p5.Vector, controls: Controls) {
        this.appearance = appearance;
        this.size = size;
        this.position = position;
        this.controls = controls;
        this.velocity = 20;
        
        this.bullets = [];
        this.isShooting = false;

        this.score = 0;
    }

    private move() {
        if(keyIsDown(this.controls.left)) {
            this.position.x -= this.velocity;
        } else if (keyIsDown(this.controls.right)) {
            this.position.x += this.velocity;
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
            }, 300);

            const bullet = {
                appearance: images.bullet,
                x: this.position.x - 10,
                y: this.position.y - 65
            }
            return this.bullets.push(bullet);
        }
        return undefined;
    }

    public update() {
        this.move();
        this.border();
        if(keyIsDown(this.controls.shoot)) {
            return this.shoot();
        }

        for(const bullet of this.bullets) {
            if(bullet.y < 10) {
                this.bullets.splice(bullet, 1);
            }
        }
        return undefined;
    }

    public draw() {
        push();
        imageMode(CENTER);
        image(this.appearance, this.position.x, this.position.y, this.size.x, this.size.y)
        pop();
        
        for(const bullet of this.bullets) {
            push();
            imageMode(CENTER);
            image(bullet.appearance, bullet.x, bullet.y, 20, 25);
            pop();
            bullet.y -= 10;
        }

        fill('white');
        textSize(40);
        text(this.score, 35, 55);
    }
}