let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn")
let msgcontainer=document.querySelector('.win-container')
let msg=document.querySelector('.win')
let turnO=true;
let count =0;
let winningpattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
         const resetgame=()=>{
              turnO=true;
              count =0
              enableboxes();
              msgcontainer.classList.add("hide");
    }
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    if(turnO){
        box.innerText='O'
      
        turnO=false;
    }else{
        box.innerText='X'
        turnO=true;
    }
    box.disabled=true
    count++
   let check= checkwinner();
   if(check===9 && !check){
gamedraw();
   }
})
});  
const draw=()=>{
    msg.innerText=`game was draw`
    msgcontainer.classList.remove("hide")
    disableBoxes();
}
const disableBoxes= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showinner=(winner)=>{
    msg.innerText=`sheerrrrr!!!! ${winner}`
    msgcontainer.classList.remove("hide")
    disableBoxes();  
}

    const checkwinner=() =>{
        for(let pattern of winningpattern){
            let pos1= boxes[pattern[0]].innerText
            let pos2= boxes[pattern[1]].innerText
            let pos3=boxes[pattern[2]].innerText
        if(pos1!="" && pos2 != "" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                showinner(pos1)
                return true
            }
        }
        
        }

    }
    newgamebtn.addEventListener("click",resetgame)
    resetbtn.addEventListener("click",resetgame)