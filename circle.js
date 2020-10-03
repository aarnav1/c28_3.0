class ball {
    constructor(x, y, radius){
    var options ={
        isStatic: false,
        restitution: 0.6,
        friction: 0.5,
        density: 1.2

    }
    this.radius = radius;
    this.body = Bodies.circle(x, y, 10, options);
    this.image = loadImage("images/paper.png");
    World.add(world,this.body);
}

display(){
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y);

    

}   
}
