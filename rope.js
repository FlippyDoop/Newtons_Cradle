class RopeMaker{
    constructor(BodyA, pointB){
        var RopeOptions ={
            bodyA: BodyA,
            pointB: pointB,
            stiffness: 0.3,
            length: 350
           
            
        }
        this.pointB = pointB;
       
        this.rope = Constrained.create(RopeOptions);
        World.add(world, this.rope)
    }

    attach(thing){
        this.rope.BodyA = thing;
    }

    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB;
        push()
        line( pointB.x, pointB.y,pointA.x, pointA.y);
        pop()

        
        

    }
}             