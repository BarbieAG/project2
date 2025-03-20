
let step = 2
let playerLife = 3; 
let score = 0;


let enemies = []
let treats = []



function setup(){
    createCanvas(800,600);
    background("black");
    noStroke();
    for (let i=0; i<5; i++){
        let enemy = {
            x:random(20, 750),
            y:0,  
            step: random(1, 8)
        }
        enemies.push(enemy)
    }

    for(let i=0; i<8; i++){
        let treat ={
            x:random(10, 780),
            y:random(10, 580)
        }
        treats.push(treat)
    }
    // fill("yellow")
    // square(0,0,20)
}
function draw(){
  background("black")
  drawEnemies()
  fill("yellow")
  drawTreats()
  fill("orange")
  square(mouseX * 0.8,  mouseY * 0.8, 20)
  console
  
  
}
 


function drawEnemies(){
    
    for (let enemy of enemies){
        fill("red")
        if (enemy.y > 600){
            enemy.step= enemy.step * -1
        }
        else if(enemy.y < 0){
            enemy.step = enemy.step * -1
        }
        // enemy.x = random(20, 550)
        // enemy.step = random(1, 4)
        enemy.y += enemy.step
       
        square(enemy.x, enemy.y, 20)
        let distance = dist(enemy.x, enemy.y, mouseX * 0.8, mouseY * 0.8)
        if (distance < 5){
            playerLife -= 1
        }
        // console.log(distance, playerLife)

        
    }    
    
    
}

function drawTreats(){
    for(let treat of treats){
        circle(treat.x, treat.y, 20)
        let treatDistance = dist( treat.x, treat.y, mouseX*0.8, mouseY*0.8)
        if (treatDistance < 20){
            score++;
            playerScore.textContent = score
           
        }
        console.log(score, treatDistance)

    }
}
