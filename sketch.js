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
    
}

function setup(){
   createCanvas(400,656);

   engine = Engine.create();
   world = engine.world;


   background(0);

   batman = new Umbrella(200,526,10);

   var render = Render.create({ 
    element: document.body,
     engine: engine,
     options: { width: 1200, height: 700, wireframes: false } });
     Render.run(render);
}

function draw(){

batman.display();
if(frameCount%10 === 0){
    drops.push(new Drops(random(width/2 - 10,width/2 + 10),10,10))
  }

  for(var m = 0;m < drops.length;m ++){
    drops[m].display();
  }
}   

