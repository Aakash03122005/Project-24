class Sand
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		//this.image = loadImage("paper.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var Sandpos=this.body.position;		

			push()
			translate(Sandpos.x, Sandpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill("red")
			ellipse(0,0,this.r, this.r);
			//imageMode(CENTER);
           // image(this.image,0,0,this.r*2,this.r*2); 
			pop();
			
	}

}