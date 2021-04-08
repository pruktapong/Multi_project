const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;
let score = 0;
let gameFrame = 0;
ctx.font = '50px Georgia';

// Mouse interactivity
let canvasPosition = canvas.getBoundingClientRect();
const mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
    click: false
}
canvas.addEventListener('mousemove', function(e){
    mouse.click = true;
    mouse.x = e.x - canvasPosition.left;
    mouse.y = e.y - canvasPosition.top;
});
window.addEventListener('mouseup', function(e){
    mouse.click = false;
});

// Player
const playerLeft = new Image();
playerLeft.src = 'https://i.ibb.co/TBybGk5/fish-swim-left.png';
const playerRight = new Image();
playerRight.src = 'https://i.ibb.co/SQpfB1v/fish-swim-right.png';

class Player {
    constructor(){
        this.x = canvas.width;
        this.y = canvas.height/2;
        this.radius = 50;
        //this.height = 20;
        this.angle = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.frame = 0;
        this.spriteWidth = 160;
        this.spriteHeight = 105;
    }
    update(){
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        if (mouse.x != this.x){
            this.x -= dx/70;
            this.moving = true;
        }
        if (mouse.y != this.y){
            this.y -= dy/70;
            this.moving = true;
        }
        if (this.x < 0) this.x = 0;
        if (this.x > canvas.width) this.x = canvas.width;
        if (this.y < 50) this.y = 50;
        if (this.y > canvas.height) this.y = canvas.height;
        let theta = Math.atan2(dy,dx);
        this.angle = theta;
    }
    draw(){
        if (mouse.click){
            ctx.lineWidth = 0.2;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
        if (gameFrame % 10 == 0) {
            this.frame++;
            if (this.frame >= 12) this.frame = 0;
            if ( this.frame == 3 ||  this.frame == 7 ||  this.frame == 11) {
                this.frameX = 0;
            } else this.frameX++;
            if (this.frame < 3){
                this.frameY = 0;
            } else if (this.frame < 7){
                this.frameY = 1;
            } else if (this.frame < 11){
                this.frameY = 2;
            } else this.frameY = 0;
        }
      
        ctx.fillStyle = 'black';
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        //ctx.beginPath();
        //ctx.arc(0, 0, this.radius, 0, Math.PI * 360);
        //ctx.fill();
        if (this.x >= mouse.x){
            ctx.drawImage(playerLeft, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, 0 - 60, 0 - 45, this.spriteWidth * 0.8, this.spriteHeight * 0.8);
        } else {
            ctx.drawImage(playerRight, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, 0 - 60, 0 - 45, this.spriteWidth * 0.8, this.spriteHeight * 0.8);
        }
        ctx.restore();
    }
}
const player = new Player();

// Bubbles
const bubblesArray = [];
const bubble = new Image();
bubble.src = 'https://i.ibb.co/ZX3thkw/pop2.png';
class Bubble {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = 0 - 50 - Math.random() * canvas.height/2;
        this.radius = 50;
        this.speed = Math.random() * -5 + -1;
        this.distance;
        this.sound = Math.random() <= 0.5 ? 'sound1' : 'sound2';
        this.counted = false;
        this.frameX = 0;
        this.spriteWidth = 91;
        this.spriteHeight = 91;
        this.pop = false;
        this.counted = false;
    }
    update(){
        this.y -= this.speed
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance = Math.sqrt(dx * dx + dy * dy);
    }
    draw(){
      /*
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();*/
        ctx.drawImage(bubble, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x - 68, this.y - 68, this.spriteWidth*1.5, this.spriteHeight*1.5);
    }
}
function handleBubbles(){
    for (let i = 0; i < bubblesArray.length; i++){
        if (bubblesArray[i].y > canvas.height * 2){
            bubblesArray.splice(i, 1);
        }
    }
    for (let i = 0; i < bubblesArray.length; i++){
        if (bubblesArray[i].distance < bubblesArray[i].radius + player.radius){
            popAndRemove(i);
        }
    }
    for (let i = 0; i < bubblesArray.length; i++){
        bubblesArray[i].update();
        bubblesArray[i].draw();
    }
    if (gameFrame % 50 == 0) {
        bubblesArray.push(new Bubble());

    }
}
function popAndRemove(i){
    if (bubblesArray[i]) {
        if (!bubblesArray[i].counted) score++;
        bubblesArray[i].counted = true;
        bubblesArray[i].frameX++;
        if (bubblesArray[i].frameX > 7) bubblesArray[i].pop = true;
        if (bubblesArray[i].pop) bubblesArray.splice(i, 1);
        requestAnimationFrame(popAndRemove);
    }

}
// animation loop
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleBubbles();
    player.update();
    player.draw();
    ctx.font = '20px Georgia';
    ctx.fillStyle = 'rgba(255,255,255,1)';
    ctx.fillText('score: ' + score, 20, 480);
    gameFrame += 1;
    requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', function(){
  canvasPosition = canvas.getBoundingClientRect();
  mouse.x = canvas.width/2;
  mouse.y = canvas.height/2;
});