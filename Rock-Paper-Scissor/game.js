const choices=document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

let userScore=0;
let compScore=0;

const userScorePara = document.querySelector("#score");
const compScorePara = document.querySelector("#compscore");

const gencompchoice=()=>{
    const game=["rock","paper","scissor"]
    const Idx= Math.floor(Math.random()* 3);
    return game[Idx];
};
const drawGame=(userchoice,compchoice) =>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin===true){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    
    }
};

const playgame=(userchoice)=>{
    const compchoice= gencompchoice();

    if(userchoice===compchoice){
        drawGame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })

})
