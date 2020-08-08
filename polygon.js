class Polygon{
    constructor(x,y,radius) {
        var options= {
            isStatic: false,
            restitution: 0.5,
            friction: 1.0,
            stffness: 0.04,
            density: 1.0
        }
    this.body= Bodies.circle(x,y,radius,options);
    this.body.radius= radius

    //this.image= loadImage("polygon.png")

    World.add(world,this.body)
    }
    display() {
        var pos= this.body.position
        ellipseMode(RADIUS)
        fill("pink")
        ellipse(/*this.image,*/pos.x,pos.y,this.body.radius,this.body.radius)
    }
}