//Create variables here
var dog,happyDog,foodStock

function preload()
{
  //load images here
   dog = loadImage ("dogImg.png")
  happyDog = loadImage ("dogImg1.png")
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);

  
  
  food = database.ref('food')
  foodStock.on("value",readStock)
  
}




function draw() {  
  background(46,139,87)

  function readStock(data){
    function readStock(data){
      foodS=data.val();
    }
  
  function writeStock(x){
    database.ref('/').update({
  Food:x
    })
  }
  
    }
  

if (keyWentDown(UP_ARROW)){
  writeStock(food);
  dog.addImage(happyDog)
}

  drawSprites();
  //add styles here

}



