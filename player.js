class Player{
    constructor(){
        this.body = Bodies.rectangle(100, 350, 200, 190, {restitution:0});
        this.image = loadImage('player.png');

        World.add(world, this.body);
    }
    display(){
        var posx = this.body.position.x;
        //var posy;/* = this.body.position.y;*/

        if(this.body.position.y>0 && this.body.position.y<700){
            this.body.position.y = mouseY;
        }
        
        image(this.image, posx, mouseY, 200, 190);

    }
}