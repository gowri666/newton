class rope{
    construstor(body1,body2,offsetX,offsetY){
        this.offsetX= offsetX
        this.offsetY= offsetY
        var options={
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX,y:this.offsetY}
        }
        this.rope= Constrain.create(options)
        World.add(world,this.rope)
    }
    display(){
        var pointA= this.rope.bodyA.position;
        var pointA= this.rope.bodyB.position;

        strokeWeight(2)

        var AnchorX1= pointA.x
        var AnchorY1= pointA.y

         var AnchorX2= pointB.x
         var AnchorY2= pointB.y
        
         line(AnchorX1,AnchorY1,AnchorX2,AnchorY2)

    }
}