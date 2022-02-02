class Entities {
    private appearance: p5.Image;
    private size: p5.Vector;
    private position: p5.Vector;

    constructor(appearance: p5.Image, size: p5.Vector, position: p5.Vector) {
        this.appearance = appearance;
        this.size = size;
        this.position = position;
    }

    public update() {

    }

    public draw() {
        push();
        image(this.appearance, this.position.x, this.position.y, this.size.x, this.size.y);
        pop();
    }
}