console.log("welcome to Tic Tac Toe")
let turn = "X"
let gameover = false;

// turn change malpare
const changeTurn = ()=>{
    return turn === "X"? "0 ":"X"
}
//win check malpare
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
     if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText ===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="" )){
        let info = document.querySelector('.info')
        info.innerHTML = boxtext[e[0]].innerText + " won"
        info.classList.add('success')
        gameover = true
     } 
    })
}

//main logic game da
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText ==='' && !gameover){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameover){
                document.getElementsByClassName("info")[0].innerText ="Turn for " + turn;

            }
          
           
        }
        else if(gameover){
            resetGame()
        }
    })
})

const resetGame = ()=>{
        document.querySelector('.info').classList.remove('success')
        let boxtext = document.querySelectorAll('.boxtext');
        Array.from(boxtext).forEach(element =>{
            element.innerText = " "
        });
        turn ="X";
        gameover = false
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
}
//evrythng must become reset(first ethleka avare rest malpunu)
reset.addEventListener('click', resetGame)