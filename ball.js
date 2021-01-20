class BallMaker{
    constructor(x, y, width, height, angle){
        var BallOptions = {
            'restitution': 0.9,
            'friction': 1,
            'density': 0.01
        };
        
        this.ball = Bodies.rectangle(x, y, width, height, BallOptions);
        
        this.width = width;
        this.height = height;
        World.add(world, this.ball);
    }

    display(){
        
        var Pos = this.ball.position;
        var angle = this.ball.angle;
        push();
        translate(Pos.x, Pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("black");
        strokeWeight(3)
        stroke("purple");
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}             