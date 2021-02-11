class Peach extends BaseClass {
    constructor(x, y){
      super(x,y,100,100);
      this.image = loadImage("sprites/Peach.png");
      
    }
  
   display(){
    if(this.body.speed < 5){
        super.display();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }
    
    }

}