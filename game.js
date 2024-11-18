let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let turnX = "true";
let newGame = document.querySelector("#new-game");
let count=0;

let winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const checkWinner = () => {
    for(pattern of winningPattern) {

        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[2]].innerText;
        let val3 = boxes[pattern[1]].innerText;

        if(val1!="" && val2!="" && val3!="")
        {
            if(val1===val2 && val1===val3)
            {
                document.querySelector("h1").innerText = "Winner is " + val1;
                document.querySelector("div").classList.remove("hide");
            }
        }
        if(count==9)
            {
                document.querySelector("h1").innerText = "Draw Match";
                document.querySelector("div").classList.remove("hide");
            }
    }
}

const enableBox = () => {
    for(box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnX==="true")
        {
            box.innerText = "X";
            turnX = "false";
            box.classList.remove("blue");
            box.classList.add("red");
        }
        else
        {
            box.innerText = "O";
            turnX = "true";
            box.classList.add("blue");
            box.classList.remove("red");
        }
        box.disabled = true;
        count++;
        checkWinner();
    })
})

newGame.addEventListener("click", () => {
    count=0;
    turnX="true";
    document.querySelector("div").classList.add("hide");
    enableBox();
})

reset.addEventListener("click", () => {
    count=0;
    turnX = "true";
    for(box of boxes)
        {
            box.disabled = false;
            box.innerText = "";
        }
})