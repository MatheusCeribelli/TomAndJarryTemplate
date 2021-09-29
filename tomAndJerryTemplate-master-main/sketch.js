var fundoImg;
var gato, gatoImg1, gatoImg2, gatoImg3, gatoImg4;
var rato, ratoImg1, ratoImg2, ratoImg3, ratoImg4;

function preload() {
    fundoImg = loadImage("images/garden.png");
    gatoImg1 = loadImage("images/cat1.png");
    gatoImg2 = loadImage("images/cat2.png");
    gatoImg3 = loadImage("images/cat3.png");
    gatoImg4 = loadImage("images/cat4.png");
    ratoImg1 = loadImage("images/mouse1.png");
    ratoImg2 = loadImage("images/mouse2.png");
    ratoImg3 = loadImage("images/mouse3.png");
    ratoImg4 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    gato = createSprite(800,600);
    gato = addImage ("cat1", gatoImg1);
    gato.scale = 0.2;
    
}

function draw() {
    background(255);
    
    if(gato.x - rato.x < (gato.width - rato.width)/2){
        gato.velocityX = 0;
        gato.addAnimation("ÚltimaImagemGato", gatoImg3);
        gato.changeAnimation("ÚltimaImagemGato");
        gato.x = 300;
        gato.scale = 0.2;
    }

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    rato.addAnimation("ratoProvocando", ratoImg2);
    rato.changeAnimation("ratoProvocando");
    rato.frameDeLay = 25;

    gato.addAnimation("gatoCorrendo", gatoImg2);
    gato.changeAnimation("gatoCorrendo");
    gato.frameDeLay = 25;
    gato.velocityX = -5;
}

}
