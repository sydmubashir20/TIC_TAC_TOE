//Variables for game sounds
let backGroundMusic=new Audio("music/music.mp3");
let playerTurn=new  Audio("music/ting.mp3");
let gameOver= new Audio("music/gameover.mp3");

//Variable for verifying the turns
let turnPlayer="X";

let gameover=false;

//Function for handling the turns
 const TurnHandler=()=>{
    return turnPlayer === "X" ? "0": "X"
 }

 //Win/Lose Function
 const winLose=()=>{
    let boxtext=document.getElementsByClassName("boxtext");
  let winning=[
 [0,1,2,5,5,0],
 [3,4,5,5,15,0],
 [6,7,8,5,25,0],
 [0,3,6,-5,15,90],
 [1,4,7,5,15,90],
 [2,5,8,15,15,90],
 [0,4,8,5,15,45],
 [2,4,6,5,15,-45]
  ]
  winning.forEach(e=>{
    if((boxtext[e[0]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[2]].innerText=== boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText !== '')){
      document.querySelector('.info').innerText= boxtext[e[0]] .innerText + " Player Won ";
      gameover= true;
      document.querySelector(".iamge").getElementsByTagName('img')[0].style.width="200px"
      document.querySelector(".line").style.width="20vw"
      document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
    }
  })
 }

 //Background music play and pause
let musicBtn=document.getElementById('musicBtn');
musicBtn.addEventListener('click',()=>{
  backGroundMusic.play()
});
let musicClose=document.getElementById('musicClose');
musicClose.addEventListener('click',()=>{
  backGroundMusic.pause()
});
//Main logic of the game
 let ticTacBoxes=document.getElementsByClassName("box");
 Array.from(ticTacBoxes).forEach(value=>{
    let textOfBox= value.querySelector(".boxtext");
    value.addEventListener('click',()=>{
        if(textOfBox.innerText==''){
            textOfBox.innerText= turnPlayer;
            turnPlayer=TurnHandler();
            playerTurn.play();
            winLose();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText ="Turn for "+turnPlayer;
            } 
        }
    })
 });

 //Reset button logic
 let resetBtn=document.getElementById('reset');

 resetBtn.addEventListener('click',()=>{
  let textOfBox= document.querySelectorAll(".boxtext");
  Array.from(textOfBox).forEach(element=>{
    element.innerText='';
  });
  turnPlayer="X";
  gameover=false
  document.getElementsByClassName("info")[0].innerText ="Turn for "+turnPlayer;
  document.querySelector(".iamge").getElementsByTagName('img')[0].style.width="0px"
  document.querySelector(".line").style.width="0vw"
 });