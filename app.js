img = new Image();
img.src = "./images/sheet.png"

var canvas = document.querySelector(".canvas"), 
    context,
    gameHeight, 
    gameWidth, 
    maxJump = 3, 
    obstacleSpeed = 6,
    currentStats,
    highScore,
    img,
    pointsToNextLvl = [10, 20, 30, 40, 50, 70],
    currentLvl = 0,
    context = canvas.getContext("2d"),
    stats = {
        play: 0,
        playing: 1,
        lose: 2
    },

    labelnextLvl = {
        newText: "",
        textOpacity: 0.0,

        fadeIn: function(dt){
            var fadeInId = setInterval(()=>{
                if (labelnextLvl.textOpacity < 1.0) {
                    labelnextLvl.textOpacity += 0.01;
                }
                else {
                    clearInterval(fadeInId);
                }
            }, 10 * dt);
        },

        fadeOut: function(dt){
            var fadeOutId = setInterval(()=>{
                if (labelnextLvl.textOpacity > 0.0) {
                    labelnextLvl.textOpacity -= 0.01;
                }
                else {
                    clearInterval(fadeOutId);
                }
            }, 10 * dt);

        }
    }

    function nextLvl() {

        currentLvl++;
        player.lives++;

        switch(currentLvl){
            case 1:
                obstacleSpeed++;
            break;
            case 2:
                obstacleSpeed++;
                player.gravity *= 0.8;
            break;
            case 3:
                obstacleSpeed++;
                player.gravity *= 0.6;
            break;
            case 4:
                player.gravity *= 2.5;
                obstacleSpeed--;
                maxJump = 4;
            break;
            case 5:
                player.gravity *= 1.3;
                obstacleSpeed--;
                maxJump = 5;
            break;
            case 6:
                player.gravity *= 1.2;
                obstacleSpeed--;
                maxJump = 6;
            break;
        }
        labelnextLvl.newText = "Level" + currentLvl;
        labelnextLvl.fadeIn(0.4);
        setTimeout(function(){
            labelnextLvl.fadeOut(0.4);
        }, 800);

    }


