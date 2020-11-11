class Box{
    constructor(x,y){

        var options={
            restitution:0.8
        }
 this.body= Bodies.rectangle(x,y,70,70,options)
 World.add(wd,this.body)      
 this.w=70
 this.h=70
    }

    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
    }
}