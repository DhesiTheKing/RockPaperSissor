function disEl(){
    document.getElementById("ans").style.display="none";
}
function userData(e){
    let computer=Math.floor(Math.random() * (4-1) + 1);
    if(computer==1 && e==2 || computer==2 && e==3 || computer==3 && e==1){
        document.getElementById("ans").style.display="flex";
        document.getElementById("answer").innerHTML="YOU WON!!";
        setTimeout(disEl,10000);
    }
    else if(computer==e){
        document.getElementById("ans").style.display="flex";
        document.getElementById("answer").innerHTML="MATCH DIE!!";
        setTimeout(disEl,10000);
    }
    else{
        document.getElementById("ans").style.display="flex";
        document.getElementById("answer").innerHTML="YOU LOOSE!!";
        setTimeout(disEl,10000);
    }
}