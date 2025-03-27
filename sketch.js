
let catX= 0
let catY = 0
let step = 0
let score = 0;
let life = 1
let enemies = []
let enemiesRows = []
let treats = []


// function preload(){
//     loadFont("https://fonts.googleapis.com/css2?family=Jacquard+12&display=swap")
// }

function setup(){
    createCanvas(800,600);
    background("black");
    noStroke();
    for (let i=0; i<5; i++){
        let enemy = {
            x:random(20, 750),
            y:0,  
            step: random(1, 8)
            // stepX: random(1, 8)
        }
        enemies.push(enemy)
    }

    for(let i =0; i<5; i++){
        let enemyRow = {
            x:0,
            y:random(20, 580),
            step: random(1,8)
        }
        enemiesRows.push(enemyRow)
    }

    for(let i=0 ; i<10; i++){
        let treat ={ 
            x:random(10, 780),
            y:random(10, 580)

        }
        treats.push(treat)
    }
   
}
function draw(){
  
  background("black")
  drawEnemies()
  drawEnemiesRows()
  fill("yellow")
  drawTreats()
  fill("orange")
  cat()
  win()
  gameOver()
}

function cat(){
    catX = catX + (mouseX - catX) * .06
    catY = catY + (mouseY - catY) * .06
    square(catX, catY, 20)
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

        let distance = dist(enemy.x, enemy.y, catX, catY)
        if (distance < 20){
            life--
        //     score--
        //     playerScore.textContent = score  

        }    
    
    
    }
}

function drawEnemiesRows(){
   
    for( let enemyRow of enemiesRows){
        fill("blue")
        if (enemyRow.x > 750){
            enemyRow.step = enemyRow.step * -1
        }
        else if (enemyRow.x < 0){
            enemyRow.step = enemyRow.step * -1
        }

        enemyRow.x += enemyRow.step
        square(enemyRow.x, enemyRow.y, 20)

        let Horizontaldistance = dist(enemyRow.x, enemyRow.y, catX, catY)
        if (Horizontaldistance < 20){
           life--
            // score--
            // playerScore.textContent = score
            
        }

    //     else if (score < 0){
    //         playerScore.textContent = 0
    //     }
    // }
    }
}

function drawTreats(){
    for(let i= treats.length -1; i >= 0; i--){
        let treat = treats[i]
        circle(treat.x, treat.y, 20)
        let treatDistance = dist( treat.x, treat.y, catX, catY)
        if (treatDistance < 20){
            score++
            playerScore.textContent = score
            treats.splice(i,1)
        
        }
        // console.log(score, treatDistance)
            

    }
    
}

function win(){
    fill("white")
     square(760,560,20)
    
    let winDistance = dist(760, 560, catX, catY)
    if (winDistance < 20){
        background("black")
        fill("yellow")
        textAlign("center")
        textSize(45)
        text("Congrats!!", 400, 300)
        let a = createA("./index.html", "Restart")
        a.position(420,400)
        noLoop()
    }

   
}

function gameOver(){
    if (life ==0){
        background("black")
        fill("red")
        textSize(45)
        text("Game Over :(", 300,300)
        let a = createA("./index.html", "Restart")
        a.position(420,400)
        noLoop()

    }
       
       
}


