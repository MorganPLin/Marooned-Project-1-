//DICE
var face1=new Image()
face1.src="images/dice/d1.gif";
var face2=new Image()
face2.src="images/dice/d2.gif";
var face3=new Image()
face3.src="images/dice/d3.gif";
var face4=new Image()
face4.src="images/dice/d4.gif";
var face5=new Image()
face5.src="images/dice/d5.gif"
var face6=new Image()
face6.src="images/dice/d6.gif";

var displaymoveA = document.getElementById('playerAmoves');
var displaymoveB = document.getElementById('playerBmoves')
var counter = 0;
var randomDice = Math.floor(Math.random()*6+1);

//switch sprites after each click / click called in html
function throwdice() { //create 0-5
  document.images['dice'].src = eval("face" + randomDice + ".src");


 if (counter % 2 === 0) {
    displaymoveA.innerHTML= "Move " + randomDice + " spots";
    document.onkeydown = movespriteA;
    document.getElementById('playerA').style.border = "5px solid rgba(255,255,255,0.7)";
    document.getElementById('playerB').style.border = "none";
    };
 if (counter % 2 === 1) {
    displaymoveB.innerHTML= "Move " + randomDice + " spots";
    document.onkeydown = movespriteB;
    document.getElementById('playerB').style.border = "5px solid rgba(255,255,255,0.7)"
    document.getElementById('playerA').style.border = "none";
    }
    counter ++;
}

//move spriteA with arrow keys

leftA = $('#spriteA').position().left;
topA = $('#spriteA').position().top;
leftB = $('#spriteB').position().left;
topB = $('#spriteB').position().top;
var spriteA = document.getElementById("spriteA");
var spriteB = document.getElementById("spriteB");

// document.onkeydown = countmovesA;
// document.onkeydown = countmovesB;

//left
var counterA = 0;
function movespriteA(event) {

  if (event.keyCode == 37) {
  leftA -= 50;
  spriteA.style.left = leftA + "px";
  }

//up
  if (event.keyCode == 38) {
  topA -= 50;
  spriteA.style.top = topA + "px";
  }

//right
  if (event.keyCode == 39) {
  leftA += 50;
  spriteA.style.left = leftA + "px";
  }


//up
  if (event.keyCode == 40) {
  topA += 50;
  spriteA.style.top = topA + "px";
  }

  counterA ++;
  grabWood();
  grabCoin();
  countmovesA();
  resetA();
}

function resetA() {
    if ((randomDice - counterA) <= 0) {
      document.onkeydown = null;
      displaymoveA.innerHTML = "Move 0 spots";
      counterA = 0;
    }
}

function countmovesA() {
    if (randomDice > counterA) {
    displaymoveA.innerHTML = "Move " + (randomDice - counterA) + " spots";
    }
}

//move spriteB with arrow keys W,S,D,A
var counterB = 0;
//left a
function movespriteB(event) {
  if (event.keyCode == 65) {
  leftB -= 50;
  spriteB.style.left = leftB + "px";
  }

//up
  if (event.keyCode == 87) {
  topB -= 50;
  spriteB.style.top = topB + "px";
  }

//right
  if (event.keyCode == 68) {
  leftB += 50;
  spriteB.style.left = leftB + "px";
  }

//down
  if (event.keyCode == 83) {
  topB += 50;
  spriteB.style.top = topB + "px";
  }

  counterB ++;
  grabWood();
  grabCoin();
  countmovesB();
  resetB();
}

//stop moves for B
function resetB() {
    if ((randomDice - counterB) <= 0) {
      document.onkeydown = null;
      displaymoveB.innerHTML = "Move 0 spots";
      counterB = 0;
    }
}

function countmovesB() {
    if (randomDice > counterB) {
    displaymoveB.innerHTML = "Move " + (randomDice - counterB) + " spots";
    }
}

//prevent key buttons from scrolling page

var ar=new Array(33,34,35,36,37,38,39,40);

$(document).keydown(function(e) {
     var key = e.which;
      //console.log(key);
      //if(key==35 || key == 36 || key == 37 || key == 39)
      if($.inArray(key,ar) > -1) {
          e.preventDefault();
          return false;
      }
      return true;
})

// make a grid/table for the board game
var body = document.body;
var leftSide = document.getElementById('mapspace');
var tbl = document.createElement('table');
var tableBody = document.createElement('tbody');
var rowletter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];
var rows =  document.getElementById('tr');

for (var i = 0; i < 14; i++) {
   var row = document.createElement('tr');
   row.setAttribute("id", rowletter[i]);


  for (var j = 0; j < 15; j++) {
    var cell = document.createElement('td');
    if (i === 0 || i === 13) {
      cell.setAttribute("class", "water")
    }
    if (j === 0 || j === 14) {
      cell.setAttribute("class", "water")
    }
    // if ((i === 1 && j === 1) || (i === 12 && i === 14)) {
    //   cell.setAttribute("class", "water")
    // }

    row.appendChild(cell);
    cell.setAttribute("id", rowletter[i] + [j+1]);
  }

 tableBody.appendChild(row);
}

tbl.appendChild(tableBody);
leftSide.insertBefore(tbl, leftSide.childNodes[0]);
tbl.setAttribute("border", "1");
tbl.setAttribute('border-style', 'solid');
tbl.setAttribute('id','map');


//Insert random Wood/Coin in specific rows
function randomWoodC() {
  // var randomrow= Math.floor(Math.random()*5+1); //pick rows 1-5
  // var row = ['C', 'D', 'E', 'F', 'G'];
  var column = Math.floor(Math.random()*13+2);
  document.getElementById('C' + column).innerHTML ='<img src="images/map/woodicon.gif">';
  document.getElementById('C' + column).setAttribute('id','wood1');
}

function randomWoodE() {
  var column = Math.floor(Math.random()*13+2);
  document.getElementById('E' + column).innerHTML ='<img src="images/map/woodicon.gif">';
  document.getElementById('E' + column).setAttribute('id','wood2');
}

function randomWoodH() {
  var column = Math.floor(Math.random()*13+2);
  document.getElementById('H' + column).innerHTML ='<img src="images/map/woodicon.gif">';
  document.getElementById('H' + column).setAttribute('id','wood3');
}
function randomWoodI() {
  var column = Math.floor(Math.random()*13+2);
  document.getElementById('I' + column).innerHTML ='<img src="images/map/woodicon.gif">';
  document.getElementById('I' + column).setAttribute('id','wood4');
}
function randomWoodL() {
  var column = Math.floor(Math.random()*11+4);
  document.getElementById('L' + column).innerHTML ='<img src="images/map/woodicon.gif">';
  document.getElementById('L' + column).setAttribute('id','wood5');
}


function grabWood() {
  var woodicons = ['#wood1', '#wood2', '#wood3', '#wood4', '#wood5']
  for (var i = 0; i <5; i++) {
  var leftW = $(woodicons[i]).position().left;
  var topW = $(woodicons[i]).position().top;
   if ((leftW < leftA) && (leftA < (leftW + 50)) && (topW < topA) && (topA < (topW + 50))) {
    $(woodicons[i]).html('');
    }
   if ((leftW < leftB) && (leftB < (leftW + 50)) && (topW < topB) && (topB < (topW + 50))) {
    $(woodicons[i]).html('');
    }
  }
}

//Insert Random Coins
function randomCoinB() {
  var column = Math.floor(Math.random()*11+3);
  document.getElementById('B' + column).innerHTML ='<img src="images/map/coinicon.gif">';
  document.getElementById('B' + column).setAttribute('id','coin1');
}

function randomCoinD() {
  var column = Math.floor(Math.random()*13+2);
  document.getElementById('D' + column).innerHTML ='<img src="images/map/coinicon.gif">';
  document.getElementById('D' + column).setAttribute('id','coin2');
}

function randomCoinF() {
  var column = Math.floor(Math.random()*13+2);
  document.getElementById('F' + column).innerHTML ='<img src="images/map/coinicon.gif">';
  document.getElementById('F' + column).setAttribute('id','coin3');
}

function randomCoinG() {
  var column = Math.floor(Math.random()*13+2);
  document.getElementById('G' + column).innerHTML ='<img src="images/map/coinicon.gif">';
  document.getElementById('G' + column).setAttribute('id','coin4');
}

function randomCoinJ() {
  var column = Math.floor(Math.random()*13+2);
  document.getElementById('J' + column).innerHTML ='<img src="images/map/coinicon.gif">';
  document.getElementById('J' + column).setAttribute('id','coin5');
}

function randomCoinM() {
  var column = Math.floor(Math.random()*10+4);
  document.getElementById('M' + column).innerHTML ='<img src="images/map/coinicon.gif">';
  document.getElementById('M' + column).setAttribute('id','coin6');
}

//grabCoin for A and B
function grabCoin() {
  var coinicons = ['#coin1', '#coin2', '#coin3', '#coin4', '#coin5', '#coin6']
  for (var i = 0; i < 6; i++) {
  var leftC = $(coinicons[i]).position().left;
  var topC = $(coinicons[i]).position().top;
   if ((leftC < leftA) && (leftA < (leftC + 50)) && (topC < topA) && (topA < (topC + 50))) {
    $(coinicons[i]).html('');
    }
   if ((leftC < leftB) && (leftB < (leftC + 50)) && (topC < topB) && (topB < (topC + 50))) {
    $(coinicons[i]).html('');
    }
  }
}

var resetbutton = document.getElementById('reset');
resetbutton.addEventListener ("click", function() {
  document.location.reload(true);

})

randomWoodC();
randomWoodE();
randomWoodH();
randomWoodI();
randomWoodL();
randomCoinB();
randomCoinD();
randomCoinF();
randomCoinG();
randomCoinJ();
randomCoinM();






