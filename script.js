let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComputerchoice = () => {
    const options =['rock', 'paper', 'scissor'];
    const randInx = Math.floor(Math.random() * 3);
    return options[randInx];
}

const drawGame = () =>{
    msg.innerText = "Game was draw"
    console.log("Game was draw");
    msg.style.backgroundColor = "yellow";
}

const showWinner = (userWin, userChoice, computerChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`
        console.log("You Win");
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${computerChoice} beats yours ${userChoice}`
        console.log("You lose");
        msg.style.backgroundColor = "red";
    }

}

const palyGame = (userChoice) => {
    console.log("User Choice is:", userChoice);
    // Generate Computer choice
    const computerChoice = genComputerchoice();
    console.log("Computer choice is :", computerChoice);

    if (userChoice === computerChoice){
        //draw game caling function to print
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            // Computer choice may be paper or scissor
            userWin = computerChoice === "paper" ? false : true
        } else if (userChoice === "paper"){
            //rock or scissor 
            userWin = computerChoice === "scissor" ? false : true
        }else{
            userWin = computerChoice === "rock" ? false : true
        }
        showWinner(userWin, userChoice, computerChoice);
    } 
    
};


choices.forEach((choice) =>{
    console.log(choice);
choice.addEventListener('click', () =>{
    const userChoice = choice.getAttribute("id");    
    palyGame(userChoice);
})
});