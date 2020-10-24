class Chain{
    constructor(bodyA,bodyB){
        var option = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.4,
            length:10
        }
        this.chain=Constraint.create(option)
        World.add(world,this.chain)
    }
    display(){
        strokeWeight(3)
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}