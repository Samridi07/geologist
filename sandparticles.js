class sandparticles {
    constructor(x, y, width, height) {
      var options = {
        'restitution':1.3,
        'friction':5,
        'density':1
      }
      Matter.Bodies.circle(x, y, 2, options,4 )
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  