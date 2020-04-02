class Box 
{
    constructor(x, y, w, h) 
{

    
 
    // create your box using the function arguments
    this.body = Bodies.rectangle(x,y,w,h);
      this.w = w; 
      this.h = h;
      World.add(world, this.body);
    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
}
display(){
  push();
    var pos =this.body.position;
    rectMode(CENTER);
  rect(pos.x, pos.y, this.w,this.h);
  pop();
  }
}
