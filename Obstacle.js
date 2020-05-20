class Obstacle {
    constructor(){
    this._obs = []; 
    this._scored = false;
    this._sprites = [redObstacle, pinkObstacle, blueObstacle, greenObstacle, yellowObstacle];
    this._insertTime = 0;
    
    }


    insertObstacle(){
        this._obs.push({ 
            x: gameWidth, 
            y: ground.y - Math.floor(20 + Math.random() * 100),
            obstacleWidth: 50,
            sprite: this._sprites[Math.floor(this._sprites.length * Math.random())]
        });
        this._insertTime = 35 + Math.floor(20 * Math.random());
    }

    updtObstacle(){

        if (this._insertTime == 0){

            this.insertObstacle();

        }
        else{

            this._insertTime--;

        }

        for(var i = 0,  size = this._obs.length; i < size; i++) {
            var obs = this._obs[i];
            obs.x -= obstacleSpeed;

            if (!player.colission && player.x <= obs.x + obs.obstacleWidth && player.x + player.playerWidth >= obs.x && player.y + player.playerHeight >= obs.y){
                
                player.colission = true;
            
                setTimeout(()=>{
                    player.colission = false;
                }, 500) ;

                if (player.lives >= 1){
                    player.lives --;
                }

                else{
                currentStats = stats.lose;
                }
            }

            else if (obs.x <= 0 && !obs._scored) {
                player.score++;
                obs._scored = true;

                if (currentLvl < pointsToNextLvl.length && player.score == pointsToNextLvl[currentLvl]){
                    nextLvl();
                }
            }

            else if (obs.x <= -obs.obstacleWidth) {
                this._obs.splice(i, 1);
                size--;
                i--;
            }
        }
    }

    clean(){

        this._obs = [];
    }

    drawObstacle(){
        for(var i = 0, size = this._obs.length; i < size; i++){
            var obs = this._obs[i];

            obs.sprite.draw(obs.x, obs.y);
        }
    }
}

let obstacle = new Obstacle;