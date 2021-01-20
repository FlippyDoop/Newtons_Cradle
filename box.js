class BoxMaker{
    constructor(x, y, width, height){
        var BoxOptions = {
            isStatic: true
        };
        
        this.box = Bodies.rectangle(x, y, width, height, BoxOptions);
        
        this.width = width;
        this.height = height;
        World.add(world, this.box);
    }

    display(){
        
        var Pos = this.box.position;
        var angle = this.box.angle;
        push();
        translate(Pos.x, Pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("brown");
        strokeWeight(2)
        stroke("silver");
        rect(0, 0, this.width, this.height);
        pop();
    }
}             