class GameController{
    constructor(){
        gameHeight = window.innerHeight;
        gameWidth = window.innerWidth;
        
        if (gameWidth >= 600){
  
            gameWidth = 600;
            gameHeight = 600;
  
        } 
  
        document.addEventListener("mousedown", () => this.onClick()); 
  
        currentStats = stats.play; 
  
        highScore = localStorage.getItem("highScore"); 
  
        if (!highScore) {
  
            highScore = 0;
        } 
  
        canvas.width = gameWidth; 
        canvas.height = gameHeight;
        this.runGame();
    }

    onClick(event){

        if (currentStats == stats.playing){
  
            player.jump();
  
        }
  
        else if (currentStats == stats.play){
  
            currentStats = stats.playing;
        }
  
        else if (currentStats == stats.lose && player.y >= 2* gameHeight){
  
            currentStats = stats.play;
  
            obstacle.clean();
  
            player.reset();
        }
    }
  

    runGame(){

        this.updtStats(); 
        this.draw();

        window.requestAnimationFrame(()=> this.runGame());
  
    }

    updtStats(){

        if (currentStats == stats.playing){
  
            obstacle.updtObstacle(); 
        }
  
        player.playerMovement(); 
        ground.updtGround();
  
    }

    draw(){

        bg.draw(0, 0);
  
        context.fillStyle = "#fff";
        context.font = "50px Arial";
        context.fillText(player.score, 30, 68);
        context.fillText(player.lives, 540, 68);
  
        context.fillStyle = "rgba(0, 0, 0, " +labelnextLvl.textOpacity + ")";
        context.fillText(labelnextLvl.newText, canvas.width/2 - context.measureText(labelnextLvl.newText).width/2, canvas.height/3);
  
        if (currentStats == stats.playing){
            obstacle.drawObstacle();
        }
                   
        ground.drawGround(); 
       
        player.drawPlayer(); 
  
        if (currentStats == stats.play){
            start.draw(gameWidth/2 - start.imgWidth/2, gameHeight /2 - start.imgHeight/2);
        }
  
        if (currentStats == stats.lose) {
            youLose.draw(gameWidth/2 - youLose.imgWidth/2, gameHeight/2 - youLose.imgHeight/2 - spriteHighScore.imgHeight/2);
            spriteHighScore.draw(gameWidth/2 - spriteHighScore.imgWidth/2, gameHeight/2 + youLose.imgHeight/2 - spriteHighScore.imgHeight/2 - 20);
            context.fillStyle = "#fff";
  
            if (player.score > highScore){
                
                newHS.draw(gameWidth/2 - 180, gameHeight/2 +30);
                context.fillText(player.score, 420, 480);
            }
  
            else {
  
                context.fillText(highScore, 420, 480);
                context.fillText(player.score, 375, 390);
            }
        }
    }
}

let gameController = new GameController;
