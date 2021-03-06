//---- GLOBAL VARIABLES ----//
let game: Game;
let images: Images;
// let sound: p5.SoundFile

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    // sound: p5.SoundFile = loadSound('../assets/mySound.wav');
    images = {
        playerFront: loadImage('assets/images/playerFront.png'),
        playerLeft: loadImage('assets/images/playerLeft.png'),
        playerRight: loadImage('assets/images/playerRight.png'),
        enemy: loadImage('assets/images/enemy.png'),
        bullet: loadImage('assets/images/bullet.png'),
        life: loadImage('assets/images/life.png'),
        explosion: loadImage('assets/images/explosion.png'),
        boss: loadImage('assets/images/boss.png')
    }
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    
    game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {

    game.update();
    game.draw();
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}