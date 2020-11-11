class Pig{
    constructor(x,y){

        var options={
            restitution:0.8
        }
 this.body= Bodies.rectangle(x,y,50,50,options)
 World.add(wd,this.body)      
 this.w=50
 this.h=50
    }

    display(){
        fill ("green")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
    }
}