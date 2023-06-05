
alert("Click on 'Refresh Me' to start the game.");

alert("Player with higher dice value wins!!");

function play(){
    var randomn1=Math.floor(Math.random()*6)+1;
    //return a value from 1 to 6

    var randomn2=Math.floor(Math.random()*6)+1;

    switch(randomn1){
    case 1:
        document.querySelector(".dice .img1").setAttribute("src","images/dice1.png");
        break;
    case 2:
        document.querySelector(".dice .img1").setAttribute("src","images/dice2.png");
        break;
    case 3:
        document.querySelector(".dice .img1").setAttribute("src","images/dice3.png");
        break;

    case 4:
        document.querySelector(".dice .img1").setAttribute("src","images/dice4.png");
    break;    

    case 5:
        document.querySelector(".dice .img1").setAttribute("src","images/dice5.png");
        break;

    case 6:
    document.querySelector(".dice .img1").setAttribute("src","images/dice6.png");
    break;      
    }

    switch(randomn2){
    case 1:
        document.querySelector(".dice .img2").setAttribute("src","images/dice1.png");
        break;
    case 2:
        document.querySelector(".dice .img2").setAttribute("src","images/dice2.png");
        break;
    case 3:
        document.querySelector(".dice .img2").setAttribute("src","images/dice3.png");
        break;

    case 4:
        document.querySelector(".dice .img2").setAttribute("src","images/dice4.png");
    break;    

    case 5:
        document.querySelector(".dice .img2").setAttribute("src","images/dice5.png");
        break;

    case 6:
        document.querySelector(".dice .img2").setAttribute("src","images/dice6.png");
        break;
        
    }

    if(randomn1<randomn2)
    {
        document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
        document.querySelector("h3").innerHTML="Value on dice 2 is more";
    }
    else if(randomn1==randomn2)
    {
        document.querySelector("h1").innerHTML="Draw!";
        document.querySelector("h3").innerHTML="Value on both dice is same";
    }
    else{
        document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
        document.querySelector("h3").innerHTML="Value on dice 1 is more";
    }
};

var turn=0;

document.querySelector("h1").addEventListener('click',()=>{
    if(turn==0){
        play();
        turn=1;
    }
    else 
    {
        document.querySelector("h1").innerHTML="Refresh Me";
        document.querySelector("h3").innerHTML="";
        document.querySelector(".dice .img1").setAttribute("src","images/dice6.png");
        document.querySelector(".dice .img2").setAttribute("src","images/dice6.png");
        turn=0;
    }
});
