const soraSprite = new Image();
soraSprite.src = 'spritesheet.png';

class Bird {
    constructor(){
        this.x = 150;
        this.y = 200;
        this.vy = 0;
        this.originalWidth = 1118
        this.originalHeight = 623
        this.width = this.originalWidth/20;
        this.height = this.originalHeight/20;
        this.weight = 1;
    }
    update(){
        let curve = Math.sin(angle)* 20;
        if (this.y > canvas.height - (this.height * 3)+ curve){
            this.y = canvas.height - (this.height * 3 + curve);
            this.vy = 0;
        } else {
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy;
    
        }
        if (this.y < 0 + this.height){
            this.y = 0 + this.height;
            this.vy = 0;
        }
        if (spacePressed && this.y > this.height * 3){
            this.flap();

        } 
        

    }
    draw(){
        ctx.fillStyle = 'red';
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(soraSprite, 0,0,this.originalWidth, this.originalHeight, this.x- 22, this.y-14,this.width*1.7, this.height*1.7);


    }
    flap(){
        this.vy -= 2;
    }
}
const bird = new Bird();