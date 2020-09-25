//Create variables here
var dog1, dog, happyDog, database, foods, foodStock;

function preload(){
  //load images here
  dog = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  dog1 = createSprite(250,250,10,10);

 foodStock=database.ref("Food").on("value",readStock);
}


function draw() {  
background(46,139,87);

dog1.addImage(dog);
dog1.scale=0.20;

if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog1.addImage(happyDog);
}


  drawSprites();
  //add styles here
  textSize(20);
  stroke(4);
  fill("white");
    text("Note: Press UP_ARROW Key To Feed Drago Milk!", 22,30);

}

function readStock(data){
  foods=data.val();
  console.log(foods)
}

function writeStock(x){

  if(x<=0){
    x=0;
  }

  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



