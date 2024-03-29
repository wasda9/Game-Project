const obstaclesArray = [];

class Obstacle {
    constructor(){
        this.top =(Math.random()* canvas.height/2); + 20;
        this.bottom = (Math.random() * canvas.height/2.4) + 20;
        this.x = canvas.width;
        this.width = 40;
        this.colour = 'blue';
        this.counted = false;
        this.imageTop = new Image();
        this.imageTop.src = 'kebade2.png';
        this.imageBottom = new Image();
        this.imageBottom.src = 'kebade.png';
        this.counted = false;
        

    }
    draw(){
        //ctx.fillStyle = this.colour;
        //ctx.fillRect (this.x, 0, this.width, this.top);
        //ctx.fillRect (this.x, canvas.height - this.bottom, this.width, this.bottom);
        ctx.drawImage(this.imageTop, this.x, 0, this.width, this.top);
        // Draw bottom obstacle image
        ctx.drawImage(this.imageBottom, this.x, canvas.height - this.bottom, this.width, this.bottom);
    }
    update(){
        this.x -= gamespeed;
        if (! this.counted && this.x < bird.x){
            score++;
            this.counted = true;
        }
        this.draw();

    }
}
function handleObstacles(){
    if (frame%100 === 0){
        obstaclesArray.unshift(new Obstacle);
    }
    for (let i = 0; i < obstaclesArray.length; i++){
        obstaclesArray[i].update();

    }
    if (obstaclesArray.length > 20){
        obstaclesArray.pop(obstaclesArray[0]);
    }
    

}




