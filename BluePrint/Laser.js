class Laser{
constructor(x,y,scale){

    this.x = x;
    this.y = y;
    this.scale = scale

    this.sprite = createSprite(this.x,this.y,10,10);
    this.sprite.addImage("pew",lazabeam);
    this.sprite.scale = this.scale;

}
}