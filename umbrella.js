class Umbrella {
    constructor(x,y,radius) {

        var options ={
            isStatic: true
        }
      
        this.body = Bodies.circle(x,y,radius,options); 
        this.radius = radius; 
        this.image = loadImage("images/man1.png")
        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        imageMode(CENTER);
        image(this.image,0,0,300,300);
        pop();
    }

};