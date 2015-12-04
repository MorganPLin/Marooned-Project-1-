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
function throwdice(countmovesA) { //create 0-5
  randomDice = Math.floor(Math.random()*6+1);
  document.images['dice'].src = eval("face" + randomDice + ".src");

 if (counter % 2 === 0) {
    displaymoveA.innerHTML= "Move " + randomDice + " spots";
    document.onkeydown = movespriteA;
    document.getElementById('playerA').style.border = "2px solid pink";
    document.getElementById('playerB').style.border = "none";
  }

 if (counter % 2 === 1) {
    displaymoveB.innerHTML= "Move " + randomDice + " spots";
    document.onkeydown = movespriteB;
    document.getElementById('playerB').style.border = "2px solid teal"
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
  displayPicture();
  keepDry();
  swimming();
  dryLand();
  alertWin();
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
  displayPicture();
  keepDry();
  swimming();
  dryLand();
  alertWin();
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
    // if (i === 0 || i === 13) {
    //   cell.setAttribute("class", "perimeter")
    // // }
    // if (j === 0 || j === 14) {
    //   cell.setAttribute("class", "perimeter")
    // }
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

//set class landtiles
var landtilesQ = ['#B3', '#B13', '#M3', '#M13', '#C2', '#C3', '#C13', '#C14', '#L2', '#L3',
'#L13', '#L14', '#D4', '#D6', '#D7', '#D8', '#D9', '#D10', '#D12', '#E5', '#E6', '#E7', '#E8',
'#E9', '#E10', '#E11', '#F5', '#F8', '#F11', '#G5', '#G7', '#G8',
'#G9', '#G11', '#G12', '#H5', '#H6', '#H7', '#H9', '#H10', '#H11', '#I6', '#I7', '#I8', '#I9',
'#I10', '#J5', '#J6', '#J7', '#J8', '#J9', '#J10', '#J11', '#K4', '#K6', '#K8', '#K10', '#K12',
'#G2', '#G3', '#G4', '#G14', '#B8', '#C8', '#L8', '#M8', '#A1', '#A2', '#A3', '#A4', '#A5',
'#A6', '#A7', '#A8', '#A9', '#A10', '#A11', '#A12', '#A13', '#A14', '#A15', '#B1', '#B15',
'#C1', '#C15', '#D1', '#D15', '#E1', '#E15', '#F1', '#F15', '#G1', '#G15', '#H1', '#H15', '#I1',
'#I15', '#J1', '#J15', '#K1', '#K15', '#L1', '#L15', '#M1', '#M15', '#N1', '#N2', '#N3', '#N4',
'#N5', '#N6', '#N7', '#N8', '#N9', '#N10', '#N11', '#N12', '#N13', '#N14', '#N15', '#G13'];

var watertiles = ['#B2', '#B4', '#B5', '#B6', '#B7', '#B9', '#B10', '#B11', '#B12', '#B14',
'#C4', '#C5', '#C6', '#C7','#C9', '#C10', '#C11', '#C12', '#D2', '#D3', '#D5', '#D11', '#D13',
'#D14', '#E2', '#E3', '#E4', '#E12', '#E13', '#E14', '#F2', '#F3', '#F4', '#F6',
'#F7', '#F9', '#F10', '#F12', '#F13', '#F14', '#G6', '#G10', '#H2', '#H3', '#H4', '#H8', '#H12',
'#H13', '#H14', '#I2', '#I3', '#I4', '#I5', '#I11', '#I12', '#I13', '#I14', '#J2', '#J3', '#J4',
'#J12', '#J13', '#J14', '#K2', '#K3', '#K5', '#K7', '#K9', '#K11', '#K13', '#K14', '#L4', '#L5',
'#L6', '#L7', '#L9', '#L10', '#L11', '#L12', '#M2', '#M4', '#M5', '#M6', '#M7', '#M9', '#M10',
'#M11', '#M12', '#M14'];

function assignLandClass() {
  for (var i = 0; i < 121; i++) {
    $(landtilesQ[i]).addClass("land");
  }
}

function assignWaterClass() {
  for (var i = 0; i < 89; i++) {
    $(watertiles[i]).addClass("water");
  }
}

// if Sprites position on water and (wood x1) || (woodx 0), then reverse pixels
function keepDry() {

  for (var i = 0; i < 89; i++) {
  var leftH = $(watertiles[i]).position().left;
  var topH = $(watertiles[i]).position().top;


//if in water square and wood count is 0 or 1, then reverse pixels
   if (((leftH < leftA) && (leftA < (leftH + 50)) && (topH < topA) && (topA < (topH + 50))) &&
      ((document.getElementById('woodcountA').innerHTML === 'Wood x 0') ||
       (document.getElementById('woodcountA').innerHTML === 'Wood x 1'))) {

                    if (event.keyCode == 37) {
                    leftA += 50;
                    spriteA.style.left = leftA + "px";
                    }

                  //up
                    if (event.keyCode == 38) {
                    topA += 50;
                    spriteA.style.top = topA + "px";
                    }

                  //right
                    if (event.keyCode == 39) {
                    leftA -= 50;
                    spriteA.style.left = leftA + "px";
                    }


                  //up
                    if (event.keyCode == 40) {
                    topA -= 50;
                    spriteA.style.top = topA + "px";
                    }
    }

    if (((leftH < leftB) && (leftB < (leftH + 50)) && (topH < topB) && (topB < (topH + 50))) &&
      ((document.getElementById('woodcountB').innerHTML === 'Wood x 0') ||
       (document.getElementById('woodcountB').innerHTML === 'Wood x 1'))) {

                    if (event.keyCode == 37) {
                    leftB += 50;
                    spriteB.style.left = leftB + "px";
                    }

                  //up
                    if (event.keyCode == 38) {
                    topB += 50;
                    spriteB.style.top = topB + "px";
                    }

                  //right
                    if (event.keyCode == 39) {
                    leftB -= 50;
                    spriteB.style.left = leftB + "px";
                    }


                  //up
                    if (event.keyCode == 40) {
                    topB -= 50;
                    spriteB.style.top = topB + "px";
                    }
    }

  }

}

function swimming() {

  for (var i = 0; i < 89; i++) {
  var leftH = $(watertiles[i]).position().left;
  var topH = $(watertiles[i]).position().top;


//if in water square and wood count is 2, then change picture to swimming in raft
    if (((leftH < leftA) && (leftA < (leftH + 50)) && (topH < topA) && (topA < (topH + 50))) &&
      (document.getElementById('woodcountA').innerHTML === 'Wood x 2')) {
           document.getElementById('spriteA').style.backgroundImage = "url('images/characters/Aswimming2.gif')";
    }

    if (((leftH < leftB) && (leftB < (leftH + 50)) && (topH < topB) && (topB < (topH + 50))) &&
      (document.getElementById('woodcountB').innerHTML === 'Wood x 2')) {
          document.getElementById('spriteA').style.backgroundImage = "url('images/characters/Bswimming2.gif')";
    }

  }

}

function dryLand() {


  for (var i = 0; i < 89; i++) {
  var leftH = $(landtilesQ[i]).position().left;
  var topH = $(landtilesQ[i]).position().top;


//if in water square and wood count is 2, then change picture to swimming in raft
    if (((leftH < leftA) && (leftA < (leftH + 50)) && (topH < topA) && (topA < (topH + 50))) &&
      ((document.getElementById('woodcountA').innerHTML === 'Wood x 2') ||
       (document.getElementById('woodcountA').innerHTML === 'Wood x 3')))  {
           document.getElementById('spriteA').style.backgroundImage = "url('images/characters/Sprite_Boy_LightBrownHair.gif')";
    }

    if (((leftH < leftB) && (leftB < (leftH + 50)) && (topH < topB) && (topB < (topH + 50))) &&
      ((document.getElementById('woodcountB').innerHTML === 'Wood x 2') ||
       (document.getElementById('woodcountB').innerHTML === 'Wood x 3')))  {
          document.getElementById('spriteA').style.backgroundImage = "url('images/characters/Sprite_Boy_Blackhair.gif')";
    }

  }

}

//Insert random Wood/Coin in specific areas
function randomWoodA() {
  var column = Math.floor(Math.random()*13+2);
  document.getElementById('A' + column).innerHTML ='<img src="images/map/woodicon.gif">';
  document.getElementById('A' + column).setAttribute('class','wood1');
}

function randomWoodN() {
  var column = Math.floor(Math.random()*13+2);
  document.getElementById('N' + column).innerHTML ='<img src="images/map/woodicon.gif">';
  document.getElementById('N' + column).setAttribute('class','wood2');
}

function randomWoodE() {
  var column = Math.floor(Math.random()*7+5);
  document.getElementById('E' + column).innerHTML ='<img src="images/map/woodicon.gif">';
  document.getElementById('E' + column).setAttribute('class','wood3');
}

function randomwood3() {
  var tile = Math.floor(Math.random()*10);
  var randomWood3 = ['G2', 'G4', 'G5', 'G7', 'G8', 'G9', 'G11', 'G12', 'G13', 'G14'];
  document.getElementById(randomWood3[tile]).innerHTML = '<img src="images/map/woodicon.gif">';
  document.getElementById(randomWood3[tile]).setAttribute('class','wood4');

}

function randomWoodJ() {
  var column = Math.floor(Math.random()*7+5);
  document.getElementById('J' + column).innerHTML ='<img src="images/map/woodicon.gif">';
  document.getElementById('J' + column).setAttribute('class','wood5');
}
function randomWoodcorner() {
  var newtile = Math.floor(Math.random()*4);
  var islandtiles = ['C3', 'D12', 'L13', 'K4']
  document.getElementById(islandtiles[newtile]).innerHTML ='<img src="images/map/woodicon.gif">';
  document.getElementById(islandtiles[newtile]).setAttribute('class','wood6');
}

//function makes wood disappear and count wood

var woodicons = ['.wood1', '.wood2', '.wood3', '.wood4', '.wood5', '.wood6'];
var woodiconS = ['wood1', 'wood2', 'wood3', 'wood4', 'wood6'];
var woodA = 1;
var woodB = 1;

function grabWood() {

  for (var i = 0; i <6; i++) {
  var leftW = $(woodicons[i]).position().left;
  var topW = $(woodicons[i]).position().top;


   if (((leftW < leftA) && (leftA < (leftW + 50)) && (topW < topA) && (topA < (topW + 50))) && (document.getElementsByClassName(woodiconS[i]).innerHTML = '<img src="images/map/woodicon.gif">')) {
        $('#woodcountA').html('Wood x ' + woodA);
         woodA++;
   }

   if ((leftW < leftA) && (leftA < (leftW + 50)) && (topW < topA) && (topA < (topW + 50))) {
    $(woodicons[i]).html('');
  }

   if (((leftW < leftB) && (leftB < (leftW + 50)) && (topW < topB) && (topB < (topW + 50))) && (('<img src="images/map/woodicon.gif">'))) {
        $('#woodcountB').html('Wood x' + woodB);
         woodB++;
   }

   if ((leftW < leftB) && (leftB < (leftW + 50)) && (topW < topB) && (topB < (topW + 50))) {
    $(woodicons[i]).html('');
   }

  }

}
//display picture in scoreboard!
function displayPicture() {

  if (document.getElementById('woodcountA').innerHTML === 'Wood x 2') {
    document.getElementById('boatA').innerHTML = '<img src="images/characters/Sprite_LightBrownHair_Raft.gif">';
  }

  if (document.getElementById('woodcountB').innerHTML === 'Wood x 2') {
    document.getElementById('boatB').innerHTML = '<img src="images/characters/Sprite_BlackHair_Raft.gif">';
  }
}

//Insert Random Coins
function randomCoinB() {
  var rowB = ['B2', 'B4', 'B5', 'B6', 'B7', 'B9', 'B10', 'B11', 'B12', 'B14']
  var tile = Math.floor(Math.random()*10);
  document.getElementById(rowB[tile]).innerHTML ='<img src="images/map/coinicon.gif">';
  document.getElementById(rowB[tile]).setAttribute('class','coin1');
}

function randomCoinF1() {
  var leftTop = ['D2', 'D3', 'D5', 'C5', 'E2', 'E3', 'E4', 'F2', 'F3', 'F4']
  var random = Math.floor(Math.random()*10);
  document.getElementById(leftTop[random]).innerHTML ='<img src="images/map/coinicon.gif">';
  document.getElementById(leftTop[random]).setAttribute('class','coin2');
}

function randomCoinF2() {
  var rightTop = ['D14', 'D13', 'D11', 'C11', 'E14', 'E13', 'E12', 'F14', 'F13', 'F12']
  var random = Math.floor(Math.random()*10);
  document.getElementById(rightTop[random]).innerHTML ='<img src="images/map/coinicon.gif">';
  document.getElementById(rightTop[random]).setAttribute('class','coin3');
}

function randomCoinI() {
  var column = ['2', '3', '4', '5', '11', '12', '13', '14']
  var random = Math.floor(Math.random()*8);
  document.getElementById('I' + column[random]).innerHTML ='<img src="images/map/coinicon.gif">';
  document.getElementById('I' + column[random]).setAttribute('class','coin4');
}

function randomCoinK() {
  var rowK = ['K2', 'K3', 'K5', 'K7', 'K9', 'K11', 'L6', 'L9', 'L10', 'L11']
  var random = Math.floor(Math.random()*10);
  document.getElementById(rowK[random]).innerHTML ='<img src="images/map/coinicon.gif">';
  document.getElementById(rowK[random]).setAttribute('class','coin5');
}

function randomCoinM() {
  var rowM = ['M2', 'M4', 'M5', 'M6', 'M7', 'M9', 'M10', 'M11', 'M14']
  var random = Math.floor(Math.random()*9);
  document.getElementById(rowM[random]).innerHTML ='<img src="images/map/coinicon.gif">';
  document.getElementById(rowM[random]).setAttribute('class','coin6');
}

//grabCoin and count coins for A and B
// 6 coins with class coinicon
var coinicons = ['.coin1', '.coin2', '.coin3', '.coin4', '.coin5', '.coin6'];
var coiniconS = ['coin1', 'coin2', 'coin3', 'coin4', 'coin5', 'coin6'];
var coinA = 1;
var coinB = 1;

function grabCoin() {

  for (var i = 0; i < 6; i++) {
  var leftC = $(coinicons[i]).position().left;
  var topC = $(coinicons[i]).position().top;


   if (((leftC < leftA) && (leftA < (leftC + 50)) && (topC < topA) && (topA < (topC + 50))) && (document.getElementsByClassName(coiniconS[i]).innerHTML = '<img src="images/map/coinicon.gif">')) {
        $('#coincountA').html('Coin x ' + coinA);
         coinA++;
   }

   if ((leftC < leftA) && (leftA < (leftC + 50)) && (topC < topA) && (topA < (topC + 50))) {
    $(coinicons[i]).html('');
   }

   if (((leftC < leftB) && (leftB < (leftC + 50)) && (topC < topB) && (topB < (topC + 50))) && (document.getElementById(coiniconS[i]).innerHTML = '<img src="images/map/coinicon.gif">')) {

        $('#coincountB').html('Coin x ' + coinB);
         coinB++;
   }

   if ((leftC < leftB) && (leftB < (leftC + 50)) && (topC < topB) && (topB < (topC + 50))) {
    $(coinicons[i]).html('');
    }

  }

}

//set Win condition
//modal overlay
function overlayA() {
  var A = document.getElementById("overlayA");
  A.style.visibility = (A.style.visibility == "visible") ? "hidden" : "visible";
}

function overlayB() {
  var B = document.getElementById("overlayB");
  B.style.visibility = (B.style.visibility == "visible") ? "hidden" : "visible";
}

var tradingposts = ['#D4', '#K12'];

function alertWin() {
  for (var i = 0; i < 2; i++) {

  var leftH = $(tradingposts[i]).position().left;
  var topH = $(tradingposts[i]).position().top;

//if in water square and wood count is 2, then change picture to swimming in raft
    if (((leftH < leftA) && (leftA < (leftH + 50)) && (topH < topA) && (topA < (topH + 50))) &&
      (document.getElementById('coincountA').innerHTML === 'Coin x 2')) {
          document.getElementById('coincountA').innerHTML = 'Coin x 0';
          document.getElementById('sailA').innerHTML = 'Sail x 1';
          overlayA();
    }

    if (((leftH < leftB) && (leftB < (leftH + 50)) && (topH < topB) && (topB < (topH + 50))) &&
      (document.getElementById('coincountB').innerHTML === 'Coin x 2')) {
          document.getElementById('coincountB').innerHTML = 'Coin x 0';
          document.getElementById('sailB').innerHTML = 'Sail x 1';
          overlayB();
    }

  }

}



//trading posts
document.getElementById('D4').innerHTML = '<img src="images/map/palm_tree.gif">';
document.getElementById('K12').innerHTML = '<img src="images/map/palm_tree.gif">'

var resetbutton = document.getElementById('reset');
resetbutton.addEventListener ("click", function() {
  document.location.reload(true);

})



assignWaterClass();
assignLandClass();
randomWoodA();
randomWoodN();
randomWoodE();
randomwood3();
randomWoodJ();
randomWoodcorner();
randomCoinB();
randomCoinF1();
randomCoinF2();
randomCoinI();
randomCoinK();
randomCoinM();




