document.querySelector("body").onload= dice();
document.querySelector("body").style.backgroundColor= "#F4E0B9";


function dice() {
    var x=Math.random();
    x=Math.floor(x*(7-1)+1);
    var y=Math.random();
    y=Math.floor(y*(7-1)+1);
    decision(x,y);
}
function decision(x,y){
    if(x>y)
    {
        document.querySelector("h1").innerHTML="Player 1 wins!!! 🚩";
    }

    if(x===y)
    {
        document.querySelector("h1").innerHTML="Draw!!!";
    }
    if(x<y)
    {
        document.querySelector("h1").innerHTML="Player 2 wins!!! 🚩";
    }
    if(x===5)
    {
        document.querySelector(".left .dice1 .dicethree").outerHTML="";
        document.querySelector(".left .dice1 .dicefour").classList.replace('four','twomiddle');
    }
    if(y===5)
    {
    document.querySelector(".right .dice1 .dicethree").outerHTML="";
    document.querySelector(".right .dice1 .dicefour").classList.replace('four','twomiddle');
    }
    if(x===4)
    {
        document.querySelector(".left .dice1 .dicethree").outerHTML="";
        document.querySelector(".left .dice1 .dicefour").outerHTML="";
    }
    if(y===4)
    {
        document.querySelector(".right .dice1 .dicethree").outerHTML="";
        document.querySelector(".right .dice1 .dicefour").outerHTML="";
    }
    if(x===1)
    {
        document.querySelector(".left .dice1 .dicetwo").outerHTML="";
        document.querySelector(".left .dice1 .dicethree").outerHTML="";
        document.querySelector(".left .dice1 .dicefour").outerHTML="";
        document.querySelector(".left .dice1 .dicefive").outerHTML="";
        document.querySelector(".left .dice1 .dicesix").outerHTML="";
        document.querySelector(".left .dice1 .diceone").classList.replace('one','twomiddle');

    }
    if(y===1)
    {
        document.querySelector(".right .dice1 .dicetwo").outerHTML="";
        document.querySelector(".right .dice1 .dicethree").outerHTML="";
        document.querySelector(".right .dice1 .dicefour").outerHTML="";
        document.querySelector(".right .dice1 .dicefive").outerHTML="";
        document.querySelector(".right .dice1 .dicesix").outerHTML="";
        document.querySelector(".right .dice1 .diceone").classList.replace('one','twomiddle');
    }
    if(x===2)
    {
        document.querySelector(".left .dice1 .dicetwo").outerHTML="";
        document.querySelector(".left .dice1 .dicethree").outerHTML="";
        document.querySelector(".left .dice1 .dicefour").outerHTML="";
        document.querySelector(".left .dice1 .dicefive").outerHTML="";
    }
    if(y===2)
    {
        document.querySelector(".right .dice1 .dicetwo").outerHTML="";
        document.querySelector(".right .dice1 .dicethree").outerHTML="";
        document.querySelector(".right .dice1 .dicefour").outerHTML="";
        document.querySelector(".right .dice1 .dicefive").outerHTML="";
    }
    if(x===3)
    {
        document.querySelector(".left .dice1 .dicetwo").outerHTML="";
        document.querySelector(".left .dice1 .dicethree").classList.replace('three','twomiddle');
        document.querySelector(".left .dice1 .dicefour").outerHTML="";
        document.querySelector(".left .dice1 .dicefive").outerHTML="";
    }
    if(y===3)
    {
        document.querySelector(".right .dice1 .dicetwo").outerHTML="";
        document.querySelector(".right .dice1 .dicethree").classList.replace('three','twomiddle');
        document.querySelector(".right .dice1 .dicefour").outerHTML="";
        document.querySelector(".right .dice1 .dicefive").outerHTML="";
    }



}