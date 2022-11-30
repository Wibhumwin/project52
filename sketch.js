var canvas;
var ball, player, goal, goalhit, hitSound, backMusic, ballImg, playerImg, goalImg, goalhitImg, background, backgroundImg;

function preload() {
    backgroundImg = loadImage("/images/background.png");
    goalImg = loadImage("/images/goal.png");
    ballImg = loadImage("/images/ball.png");
    playerImg = loadImage("/images/player.png");
    //hitSound = loadSound("/images/hit_sound.mp3");
    //backMusic = loadSound("/images/back_music.mp3");
}

function setup() {
    createCanvas(1500,600);

    player = createSprite(200,400,10,20)
    player.addImage("player", playerImg)
    player.scale = 1.3;
    
    ball = createSprite(500,450,10,10);
    ball.addImage("ball", ballImg)
    ball.scale = 0.3;

    goal = createSprite(1200,400,10,20);
    goal.addImage("goal", goalImg)
    goal.scale = 0.6;

    player.setCollider("circle",-20,80,30)
    player.debug = true;

    ball.setCollider("circle",0,0,100)
    ball.debug = true;

    goal.setCollider("circle",0,0,100)
    goal.debug = true;


}

function draw() {
    background(backgroundImg);

    if (keyDown("RIGHT_ARROW")) {
        //backMusic.play();
        player.velocityX = +3;
        
    }

    if(player.isTouching(ball)) {
        ball.velocityX = +10
        //hitSound.play();
    }

    

    if(ball.isTouching(goal)) {
        textSize(20);
        fill ("white");
        text("Goal!!",1000,300)
        player.velocityX = 0;
        ball.velocityX = 0;
        
    }

    drawSprites();
}