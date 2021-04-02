const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var batman;
var engine;
var world;
var drop;

var drops = [];

function preload(){
  thunderImg1 = loadImage("images/thunder1.png")
  
  thunderImg2 = loadImage("images/thunder2.png")
  
  thunderImg3 = loadImage("images/thunder3.png")
  
  thunderImg4 = loadImage("images/thunder4.png")
}

function setup(){
   createCanvas(400,656);

   engine = Engine.create();
   world = engine.world;

   batman = new Umbrella(200,480,75);

   var render = Render.create({ 
    element: document.body,
     engine: engine,
     options: { width: 1200, height: 700, wireframes: false } });
     Render.run(render);
}

function draw(){
  Engine.update(engine);

  background(0);

   batman.display();

   if(frameCount%1 === 0){
      drops.push(new Drops(random(width/2 - 200,width/2 + 200),4))
   }

   for(var m = 0;m < drops.length;m ++){
      drops[m].display();
   }

   if(frameCount % 10 === 0) {
      var thunder = createSprite(random(50,350),40,20,20);
      thunder.scale = 0.5;
      
      var rand = Math.round(random(1,4));
      switch(rand){
         case 1: thunder.addImage("thunder1",thunderImg1);
         break;
         case 2: thunder.addImage("thunder2",thunderImg2);
         break;
         case 3: thunder.addImage("thunder3",thunderImg3);
         break;
         case 4: thunder.addImage("thunder4",thunderImg4); 
         break;
         default: break;
      }
      thunder.lifetime = 10;
   }

   drawSprites();
}   
