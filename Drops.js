class Drops {
    constructor(x,y) {

        var options ={
            "restitution": 0.4,
            "friction": 0.1
        }
      
        this.body = Bodies.circle(x,y,2,options); 
        this.radius = 2; 
        this.color = color(0,0,255);
        World.add(world, this.body);

    }

    display() {

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();

    }

};