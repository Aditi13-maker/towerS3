class Polygon{
  constructor(x, y,width,height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      
      
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.height=height
      this.width=width
      //this.image = loadImage("sprites/base.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(this.body.position.x, this.body.position.y);
     
      rectMode(CENTER);
      strokeWeight(4);
      stroke("purple");
      fill("purple");
      rect( 0, 0, this.width,this.height);
      pop();
    }
}
