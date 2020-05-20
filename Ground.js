class Ground {
    constructor(){
        this.y = 550;
        this.x = 0;
        this.groundHeight = 50;
        this.updtGround();
        this.drawGround();
    }

        updtGround(){
            this.x -= obstacleSpeed;
            if(this.x <= -30){
                this.x += 30;
            }
        }

        drawGround(){
            spriteGround.draw(this.x, this.y);
            spriteGround.draw(this.x + spriteGround.imgWidth, this.y);
        }
}

let ground = new Ground;