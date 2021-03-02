const canvas = document.querySelector(".myCanvas");
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0,0,width, height);

ctx.fillStyle = "rgb(255,0,0)";
ctx.fillRect(50,50,100,150);

ctx.fillStyle = 'rgb(0, 255, 0)';
ctx.fillRect(75, 75, 100, 100);

ctx.strokeStyle = 'rgb(255, 255, 255)';
ctx.strokeRect(25, 25, 175, 200);


ctx.fillStyle = 'rgb(255, 255, 0)';
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(150, 50);
let triHeight = 50 * Math.tan(60*Math.PI/180);
ctx.lineTo(100, 50+triHeight);
ctx.lineTo(50, 50);
ctx.fill();
ctx.lineWidth = 5;


ctx.strokeStyle = 'white';
ctx.lineWidth = 1;
ctx.font = '36px arial';
ctx.strokeText('Canvas text', 50, 50);

ctx.fillStyle = 'red';
ctx.font = '48px georgia';
ctx.fillText('Canvas text', 50, 150);

let image = new Image();
image.src = "coffee.jpg";


image.onload= ()=>{
    ctx.drawImage(image, 0, 0,2048,2048, 150, 150, 1024,1024);
    // 0,0 is the top left corner of the image 
    // 2048,2048 is the width and length of the image you want to cut 
    // 150, 150 is the place of the top left corner in the canvas 
    // 1024,1024 is the width and length of the image in the cnavas
}