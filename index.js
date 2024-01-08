
let Matchcount=0;
let winCount=0;
let looseCount=0;
let tieCount=0;
function userData(e){
    Matchcount++;
    let computer=Math.floor(Math.random() * (4-1) + 1);
    if(e==1){
        document.getElementById("u1").style.display="flex";
    }
    else{
        document.getElementById("u1").style.display="none";
    }
    if(e==2){
        document.getElementById("u2").style.display="flex";
    }
    else{
        document.getElementById("u2").style.display="none";
    }
    if(e==3){
        document.getElementById("u3").style.display="flex";
    }
    else{
        document.getElementById("u3").style.display="none";
    }
    if(computer==1){
        document.getElementById("c1").style.display="flex";
    }
    else{
        document.getElementById("c1").style.display="none";
    }
    if(computer==2){
        document.getElementById("c2").style.display="flex";
    }
    else{
        document.getElementById("c2").style.display="none";
    }
    if(computer==3){
        document.getElementById("c3").style.display="flex";
    }
    else{
        document.getElementById("c3").style.display="none";
    }
    if(computer==1 && e==2 || computer==2 && e==3 || computer==3 && e==1){
        winCount++;
        document.getElementById("ans").style.display="flex";
        document.getElementById("answer").innerHTML="YOU WON!!";
    }
    else if(computer==e){
        tieCount++;
        document.getElementById("ans").style.display="flex";
        document.getElementById("answer").innerHTML="MATCH TIE!!";
    }
    else{
        looseCount++;
        document.getElementById("ans").style.display="flex";
        document.getElementById("answer").innerHTML="YOU LOOSE!!";
    }
    document.getElementById("matchCount").innerHTML=Matchcount;
    document.getElementById("winCount").innerHTML=winCount;
    document.getElementById("looseCount").innerHTML=looseCount;
    document.getElementById("tieCount").innerHTML=tieCount;
}
function reset(){
    location.reload();
}