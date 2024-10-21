let buttons = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn  = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let container = document.querySelector(".mas-container");

let u1 = prompt("Enter First User Name");
let u2 = prompt("Enter Second User Name");

let turn = "O";
let count = 0; 
let p = 0; 
let p2 = 0;
let ti ; 



const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn = true;
    anableboxes();
    container.classList.add("hide");

};

buttons.forEach(button =>{
    button.onclick = () =>{
       
        if(turn == "O"){
            turn = "X";
           button.innerText = "O";
        }
        else{
            turn = "O";
            button.innerText = "X";
        }
        button.disabled = "O";

        count++;

        let isWinner = winner();
    
        if (count === 9 && !isWinner) {
            matchdraw();
        }

    };
});

const matchdraw = () =>{
    msg.innerText = "Draw";
    container.classList.remove("hide");
    disabledBoxes();
 
 };


const disabledBoxes = () => {
    for(let box of buttons){
        box.disabled = true;
    }
};

const anableboxes = () => {
    for(let box of buttons){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winn) =>{
   msg.innerText = `Congratulation, Winner is ,  ${winn}`;
   container.classList.remove("hide");
   disabledBoxes();

};


const winner = () =>{
    for(let win of winpattern){


        /*console.log(win[0],win[1],win[2])
        console.log(
            buttons[win[0]].innerText,
            buttons[win[1]].innerText,
            buttons[win[2]].innerText);*/

        let pos1 = buttons[win[0]].innerText;
        let pos2 = buttons[win[1]].innerText;
        let pos3 = buttons[win[2]].innerText;
         
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 == pos3){  
                if(pos1 === "O"){
                    
                    pos1 = u1;
                    showWinner(pos1,ti);
                    ti = p++;


                }
                else{
                    pos1 = u2;
                    showWinner(pos1,ti);
                    ti = p2++;

                }    
                return true; 
         }
           
    }
    
    
    }  

};

newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
