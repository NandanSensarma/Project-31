class Plinko {
    constructor(x,y,r){
    var options={

        isStatic: true
    }
    

    this.body= Bodies.circle(x,y,10,options);
    this.r=10
    World.add(world, this.body);
    }

display(){
    var pos=this.body.position;
    fill("white");
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,10);
}
};