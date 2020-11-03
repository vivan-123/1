class Rectangle1
{
    constructor(x,y,w,h)
    {
        var options =
        {
            isStatic : false
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.body.position.x = x;
        this.body.position.y = y;
        this.body.width = w;
        this.body.height = h;
        World.add(world, this.body);
    }

    display()
    {
        fill("red");
        rect(this.body.position.x,this.body.position.y,this.body.width,this.body.height);
        
    }
}
