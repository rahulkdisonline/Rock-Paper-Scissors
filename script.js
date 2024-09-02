let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msgPara = document.querySelector(".msg");
let userScores = document.querySelector("#userScore");
let compScores =document.querySelector("#compScore");

const genChoice = ()=>{
    const options = ["rock", "paper","scissor"];
    const randomIdx = Math.floor((Math.random())*3);
    return options[randomIdx];
}

const drawGame=()=>{
    msgPara.innerText = "Game was Draw, Play Again !";
    msgPara.style.backgroundColor="#081b31";
}

const showWinner=(userWin)=>{
    if (userWin==true) {
        userScore++
        msgPara.innerText = "You Win";
        userScores.innerText=userScore;
        msgPara.style.backgroundColor="green";

    }
    else{
        compScore++;
        msgPara.innerText = "You Lose";
        compScores.innerText=compScore;
        msgPara.style.backgroundColor="red";
    }
}

const playGames = (userChoice)=>{
    const compChoice = genChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice==="scissor"?false:true;
        }
        else{
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGames(userChoice);
    })
})