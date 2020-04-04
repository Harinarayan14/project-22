class Box 
{
    constructor(x, y, w, h) 
{

    
 
    // create your box using the function arguments
    this.body = Bodies.rectangle(x,y,w,h);
    World.add(world, this.body);  
    this.w = w; 
      this.h = h;
     
    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
}
display(){
 
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(127);
  rect(0, 0, this.w,this.h);
  pop();
  }
}
