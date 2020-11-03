  
class Circle
{
    constructor(x,y,radius)
    {   
        var options =
        {
           'weight' : 1,
           'friction' : 1
        }

        this.body = Bodies.circle(x,y,radius,options)
        this.body.position.x = x;
        this.body.position.y = y;
        this.body.radius = radius;
        World.add(world, this.body);
        this.cc = loadImage("images/hf.png");

       
    }

    display()
    {
        image(this.cc, this.body.position.x, this.body.position.y, this.body.width, this.body.height);
        circle(this.body.position.x,this.body.position.y,this.body.radius);
    }
}