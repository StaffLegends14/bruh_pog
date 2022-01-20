class Wall{
constructor(x,y){

    this.x = x;
    this.y = y;
    this.scale = 0.1;

    this.sprite = createSprite(this.x,this.y,10,10);
    this.sprite.setCollider("rectangle",0,0,Hitman.width * 5,Hitman.height/2.6);
    this.sprite.addImage("wall",ww);
    this.sprite.scale = 0.1;
    //this.sprite.debug = true;
}

display(){
    

}
}