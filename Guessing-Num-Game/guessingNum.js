const input = document.getElementById("numInput");
const button = document.getElementById("submit");

const LH = document.getElementById("LH");
const previous = document.getElementById("previous");
const rightOrWrong = document.getElementById("rightOrWrong");
const rst = document.createElement("button");
rst.textContent = "Start new game";
const click = document.getElementById("click");

var randNum;
var guessCount = 0;

function genRanNum(){
    randNum = Math.floor(Math.random()*100) + 1;
}

function guessing(guess){
    if (guess === randNum){
        rightOrWrong.textContent = "Correct";
        rightOrWrong.style.backgroundColor = "green";
        LH.textContent = "";
        setGameOver();
    }
    else{
        rightOrWrong.textContent = "Wrong";
        rightOrWrong.style.backgroundColor = "red";
        if (guess < randNum){
            LH.textContent = "previous guess is low"
        }
        else{
            LH.textContent = "previous guess is high"
        }
        if (guessCount === 10){
            setGameOver();
        }
    }
}

function setGameOver(){
    input.disabled = true;
    button.disabled = true;
    document.body.append(rst);
    rst.addEventListener('click', resetGame);
}

function resetGame(){
    input.disabled = false;
    button.disabled = false;
    rst.remove();
    previous.textContent = "";
    LH.textContent = "";
    rightOrWrong.textContent = "";
    button.textContent = "submit(10)";
    guessCount = 0;
}

function startGuess(){
    if (guessCount==0){
        genRanNum();
        previous.textContent = "previous guesses: " ;
    }
    if (guessCount < 10){
        var guess = Number(input.value);
        previous.textContent += guess+" ";
        guessCount ++;
        guessing(guess);
        input.value ="";
    }
    button.textContent = "submit("+(10-guessCount)+")";
}

button.addEventListener('click', startGuess)
click.addEventListener("click", function () {
    alert("greeting ");
    output(X);
});
