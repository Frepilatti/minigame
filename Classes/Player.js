class Player {
    constructor(){
    this.x = 50;
    this.y = 0;
    this.playerHeight = playerSprite.imgHeight;
    this.playerWidth = playerSprite.imgWidth;
    this.gravity = 1.6;
    this.speed = 0;
    this.jumpSpeed = 23.6;
    this.jumps = 0;
    this.score = 0;
    this.spin = 0;
    this.lives = 3;
    this.colission = false;
    }
    drawPlayer() {
       
       context.save();
       context.translate(this.x + this.playerWidth / 2, this.y + this.playerHeight / 2);
       context.rotate(this.spin);
       playerSprite.draw(-this.playerWidth / 2, - this.playerHeight / 2); 
       context.restore();
    }

    playerMovement() {
        this.speed += this.gravity; 
        this.y += this.speed; 
        this.spin += Math.PI / 180 * obstacleSpeed;

        if(this.y > ground.y - this.playerHeight && currentStats != stats.lose) { 
            this.y = ground.y - this.playerHeight; 
            this.jumps =0; 
            this.speed = 0;
        }
    }

    reset() {

        this.speed = 0;
        this.y = 0;
        
        if (this.score > highScore){

            localStorage.setItem("highScore", this.score);
            highScore = this.score;
        }
        this.lives = 3;
        this.score = 0;

        obstacleSpeed = 6;
        currentLvl = 0;
        this.gravity = 1.6;
        maxJump = 3;

    }

    jump(){
        if(this.jumps < maxJump){ 
            this.speed = - this.jumpSpeed; 
            this.jumps++; 
        }
    }
}

let player = new Player;