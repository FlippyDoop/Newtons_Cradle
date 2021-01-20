class GroundMaker{
    constructor(x, y){
        var GroundOptions = {
            'isStatic': true,
            
        }
        this.ground = Bodies.rectangle(x, y, 1400, 50, GroundOptions);
        World.add(world, this.ground);
    }

    display(){
        var Pos = this.ground.position;
        fill("brown");
        rectMode(CENTER)
        rect(Pos.x, Pos.y, 1400, 50)
    }
}