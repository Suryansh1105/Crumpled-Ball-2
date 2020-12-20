class bin
{
    constructor(x,y,width,height)
    {
        var option={
            isStatic:true
        }
        this.binObject=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.binObject);
        this.width=width;
        this.height=height;
        this.image=loadImage("dustbin.png")
        
    }

    display()
    {
        fill("lightgrey");
        noStroke();
        rectMode(CENTER);
        rect(this.binObject.position.x,this.binObject.position.y,this.width,this.height);

    }
}