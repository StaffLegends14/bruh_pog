class sideWall{
    constructor(x,y){
    
        this.x = x;
        this.y = y;
        this.scale = 0.1;
    
        this.sprite = createSprite(this.x,this.y,10,10);
        this.sprite.setCollider("rectangle",0,0,Hitman.width/2.6,Hitman.height * 3.2);
        this.sprite.addImage("wall",ww2);
        this.sprite.scale = 0.1;
        //this.sprite.debug = true;
    }
    
    display(){
        
    
    }
    }