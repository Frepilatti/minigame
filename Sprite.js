function Sprite (x, y, imgWidth,  imgHeight)  {

    this.x = x;
    this.y = y;
    this.imgWidth = imgWidth;
    this.imgHeight = imgHeight;

    this.draw = function(xCanvas, yCanvas) {

        context.drawImage(img, this.x, this.y, this.imgWidth, this.imgHeight, xCanvas, yCanvas, this.imgWidth, this.imgHeight);
    }

}

var bg = new Sprite(0, 0, 600, 600),
    playerSprite = new Sprite(618, 16, 87, 87),
    youLose = new Sprite(603, 478, 397, 358),
    start = new Sprite(603, 127, 397, 347),
    newHS = new Sprite(68, 721, 287, 93),
    spriteHighScore = new Sprite(28, 879, 441, 95),
    spriteGround = new Sprite(0, 604, 600, 654),

    redObstacle = new Sprite(662, 867, 50, 120),
    pinkObstacle = new Sprite(719, 867, 50, 120),
    blueObstacle = new Sprite(779, 867, 50, 120),
    greenObstacle = new Sprite(839, 867, 50, 120),
    yellowObstacle = new Sprite(898, 867, 50, 120);