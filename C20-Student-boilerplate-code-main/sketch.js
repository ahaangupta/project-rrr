var hole
var playerImg
var player
var bossImg
var bullet
var playerbullet
var bulletImg
var boss
var health = 100
function preload(){
  hole = loadImage('black hole.jpg')
  playerImg = loadImage('cringy-spaceship.PNG')
  bossImg = loadImage('boss-man.PNG')
  bulletImg = loadImage('bullet.PNG')
}
function setup(){
  createCanvas(windowWidth, windowHeight)
  //sprites
  boss = createSprite(windowWidth/2, windowHeight/2,50,50)
  boss.addImage("boss-man.PNG",bossImg)
  player = createSprite(windowWidth/3, windowHeight/3,50,50)
  player.addImage("cringy-spaceship.PNG",playerImg)
  player.scale = 0.3
  player.setCollider('circle',0,0,200)
  boss.setCollider('circle',0,0,190)
}
function draw(){
  background(hole)
  drawSprites()
  fire()
  bossFire()
  // movement
  if(keyWentDown(UP_ARROW)){
    player.velocityY = -10
  }
  if(keyWentUp(UP_ARROW)){
    player.velocityY = 0
  }
  if(keyWentDown(DOWN_ARROW)){
    player.velocityY = 10
  }
  if(keyWentUp(DOWN_ARROW)){
    player.velocityY = 0
  }
  if(keyWentDown(RIGHT_ARROW)){
    player.velocityX = 10
  }
  if(keyWentUp(RIGHT_ARROW)){
    player.velocityX = 0
  }
  if(keyWentDown(LEFT_ARROW)){
    player.velocityX =-10
  }
  if(keyWentUp(LEFT_ARROW)){
    player.velocityX = 0
  }
  
}
function damage(){
  if(boss.isTouching(playerbullet)){
    health -=1 
  }
  if(health === 0){
    boss.destroyEach()
  }
  if(player.isTouching(bullet)){
    player.destroyEach()
  }
}

function fire(){
  if (keyWentDown('space')){
    playerbullet = createSprite(player.x,player.y,50,50)
    playerbullet.velocityX = 20
    playerbullet.addImage('bullet.PNG',bulletImg)
    playerbullet.scale = 0.1
  }  
}
function bossFire(){
  if(frameCount % 20 === 0){
    bullet = createSprite(boss.x,boss.y,50,50)
    bullet.velocityX = 50
    bullet.addImage('bullet.PNG',bulletImg)
   bullet.scale = 0.1

  }
  if(frameCount % 20 === 0){
    bullet = createSprite(boss.x/4,boss.y/3,50,50)
    bullet.velocityX = 50
    bullet.addImage('bullet.PNG',bulletImg)
   bullet.scale = 0.1
  }
  if(frameCount % 20 === 0){
    bullet = createSprite(boss.x,boss.y,50,50)
    bullet.velocityX = -50
    bullet.addImage('bullet.PNG',bulletImg)
   bullet.scale = 0.1
  }
  if(frameCount % 20 === 0){
    bullet = createSprite(boss.x,boss.y/4,50,50)
    bullet.velocityX = 50
    bullet.addImage('bullet.PNG',bulletImg)
   bullet.scale = 0.1
  }
  if(frameCount % 20 === 0){
    bullet = createSprite(boss.x,boss.y/4,50,50)
    bullet.velocityX = -50
    bullet.addImage('bullet.PNG',bulletImg)
   bullet.scale = 0.1
  }
  if(frameCount % 20 === 0){
    bullet = createSprite(boss.x,boss.y/-2,50,50)
    bullet.velocityX = -50
    bullet.addImage('bullet.PNG',bulletImg)
   bullet.scale = 0.1
  }
}