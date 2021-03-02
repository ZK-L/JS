const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

function random(min, max){
    const num = Math.floor(Math.random()*(max-min+1)) + min;
    return num;
}

class Ball {
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }
}

Ball.prototype.draw = function(){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
    ctx.fill();
}

Ball.prototype.update = function(){
    if (((this.x + this.size) >= width)||((this.x - this.size) <=0)){
        this.velX = -(this.velX);
    }  
    if (((this.y + this.size) >= height)||((this.y - this.size) <=0)){
        this.velY = -(this.velY);
    }
    this.x += this.velX;
    this.y += this.velY;

}

Ball.prototype.bouncingDetect = function(){
    for (let i = 0; i < balls.length; i++){
        if (!(this === balls[i])){
            const distance = Math.sqrt((this.x - balls[i].x)**2 + (this.y - balls[i].y)**2);
            if (distance <= (this.size + balls[i].size)){
                if (this.velX * balls[i].velX < 0){
                    this.velX = -this.velX;
                    balls[i].velX = -balls[i].velX;
                }
                if (this.velY * balls[i].velY < 0){
                    this.velY = -this.velY;
                    balls[i].velY = -balls[i].velY;
                }

            }
        }
    }
}


let balls = [];
let vel = 3;
while (balls.length <25){
    let size = random(10,20);
    let sign = Math.random()-0.5;
    sign = sign/Math.abs(sign);
    let ball = new Ball(
        random(0+size, width-size),
        random(0+size, height-size),
        Math.floor((Math.random()+1)*vel)*sign,
        Math.floor((Math.random()+1)*vel)*sign,
        "rgb(" + random(0,255)+","+random(0,255)+","+random(0,255)+")",
        size
    );
    balls.push(ball);
}

function loop(){
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0,0,width,height);

    for (let i = 0; i < balls.length; i++){
        balls[i].draw();
        balls[i].update();
        balls[i].bouncingDetect();
    }
    requestAnimationFrame(loop);
}

loop();
