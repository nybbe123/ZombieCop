class Enemy {
    private appearance: p5.Image;
    public size: p5.Vector;
    public position: p5.Vector;
    private velocity: number;

    constructor(appearance: p5.Image, size: p5.Vector, position: p5.Vector) {
        this.appearance = appearance;
        this.size = size;
        this.position = position;
        this.velocity = 3;
    }

    public update() {
        this.position.y += this.velocity;
    }
    
    public draw() {
        push();
        imageMode(CENTER);
        image(this.appearance, this.position.x, this.position.y, this.size.x, this.size.y);
        pop();
    }
}