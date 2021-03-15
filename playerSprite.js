class PlayerS{
    constructor(){
        this.sprite = createSprite(100, 350, 200, 190);
        //sprite.setAnimation('player.png')
    }
    display(){
        var posx = this.sprite.x;
        
        //this.sprite.setAnimation('player.png')

        drawSprites();
    }
}