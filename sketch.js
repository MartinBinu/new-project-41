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
  thunderImg1 = loadImage("images/thunder1.jpeg")
  
  thunderImg2 = loadImage("images/thunder2.jpeg")
  
  thunderImg3 = loadImage("images/thunder3.jpeg")
  
  thunderImg4 = loadImage("images/thunder4.jpeg")
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
      var thunder = createSprite(200,100,20,20);
      var rand = Math.round(random(1,4));
      switch(rand){
         case 1: thunder.addImage("thunder",thunderImg1);
         break;
         case 2: thunder.addImage("thunder",thunderImg2);
         break;
         case 3: thunder.addImage("thunder",thunderImg3);
         break;
         case 4: thunder.addImage("thunder",thunderImg4);  
         break;
         default: break;
      }
   }
}   

