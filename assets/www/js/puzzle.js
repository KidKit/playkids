var img;var boardSize;var tileCount;var tileSize;var clickLoc;var emptyLoc;var solved;var boardParts;
var context;var boolNumbers=false;var boolVocals=false;
$(document).ready(function () {
    context = document.getElementById('puzzle').getContext('2d');

    img = new Image();
    img.src = "css/images/abeja.png";
    img.addEventListener('load', drawTiles, false);

    boardSize = document.getElementById('puzzle').width;
    
    tileCount=2;
    tileSize = boardSize / tileCount;

    clickLoc = new Object;
    clickLoc.x = 0;
    clickLoc.y = 0;

    emptyLoc = new Object;
    emptyLoc.x = 0;
    emptyLoc.y = 0;

    solved = false;

    boardParts = new Object;
    setBoard();

/*
    document.getElementById('scale').onchange = function() {
      tileCount = this.value;
      tileSize = boardSize / tileCount;
      setBoard();
      drawTiles();
    };*/

    document.getElementById('puzzle').onmousemove = function(e) {
      clickLoc.x = Math.floor((e.pageX - this.offsetLeft) / tileSize);
      clickLoc.y = Math.floor((e.pageY - this.offsetTop) / tileSize);
    };

    document.getElementById('puzzle').onclick = function() {
      if (distance(clickLoc.x, clickLoc.y, emptyLoc.x, emptyLoc.y) == 1) {
        slideTile(emptyLoc, clickLoc);
        drawTiles();
      }
      if (solved) {
        setTimeout(function() {alert("Ganaste....!!!");}, 500);
      }
    };

    function setBoard() {
      boardParts = new Array(tileCount);
      for (var i = 0; i < tileCount; ++i) {
        boardParts[i] = new Array(tileCount);
        for (var j = 0; j < tileCount; ++j) {
          boardParts[i][j] = new Object;
          boardParts[i][j].x = (tileCount - 1) - i;
          boardParts[i][j].y = (tileCount - 1) - j;
        }
      }
      emptyLoc.x = boardParts[tileCount - 1][tileCount - 1].x;
      emptyLoc.y = boardParts[tileCount - 1][tileCount - 1].y;
      solved = false;
    }

    function drawTiles() {
      context.clearRect ( 0 , 0 , boardSize , boardSize );
      for (var i = 0; i < tileCount; ++i) {
        for (var j = 0; j < tileCount; ++j) {
          var x = boardParts[i][j].x;
          var y = boardParts[i][j].y;
          if(i != emptyLoc.x || j != emptyLoc.y || solved == true) {
            context.drawImage(img, x * tileSize, y * tileSize, tileSize, tileSize,
                i * tileSize, j * tileSize, tileSize, tileSize);
          }
        }
      }
    }

    function distance(x1, y1, x2, y2) {
      return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }

    function slideTile(toLoc, fromLoc) {
      if (!solved) {
        boardParts[toLoc.x][toLoc.y].x = boardParts[fromLoc.x][fromLoc.y].x;
        boardParts[toLoc.x][toLoc.y].y = boardParts[fromLoc.x][fromLoc.y].y;
        boardParts[fromLoc.x][fromLoc.y].x = tileCount - 1;
        boardParts[fromLoc.x][fromLoc.y].y = tileCount - 1;
        toLoc.x = fromLoc.x;
        toLoc.y = fromLoc.y;
        checkSolved();
      }
    }

    function checkSolved() {
      var flag = true;
      for (var i = 0; i < tileCount; ++i) {
        for (var j = 0; j < tileCount; ++j) {
          if (boardParts[i][j].x != i || boardParts[i][j].y != j) {
            flag = false;
          }
        }
      }
      solved = flag;
    }

var pp2=$('#pan-puz-2');var pp3=$('#pan-puz-3');var pp4=$('#pan-puz-4');var ppR=$('#pan-puz-R');
var ppA=$('#pan-puz-A');var ppE=$('#pan-puz-E');var ppI=$('#pan-puz-I');var ppO=$('#pan-puz-O');var ppU=$('#pan-puz-U');

pp2.click(function(){ clearNumbers();pp2.addClass('presionado');
tileCount = 2;tileSize = boardSize / tileCount;setBoard();drawTiles();});
pp3.click(function(){clearNumbers();pp3.addClass('presionado');
tileCount = 3;tileSize = boardSize / tileCount;setBoard();drawTiles();});
pp4.click(function(){clearNumbers();pp4.addClass('presionado');
tileCount = 4;tileSize = boardSize / tileCount;setBoard();drawTiles();});

ppR.click(function(){setBoard();drawTiles();});

ppA.click(function(){clearVocals();ppA.addClass('presionado');
img.src = "css/images/abeja.png";
setBoard();drawTiles();
});
ppE.click(function(){clearVocals();ppE.addClass('presionado');
  img.src = "css/images/elefante.png";
setBoard();drawTiles();
});
ppI.click(function(){clearVocals();ppI.addClass('presionado');
  img.src = "css/images/iman.png";
setBoard();drawTiles();
});
ppO.click(function(){clearVocals();ppO.addClass('presionado');
img.src = "css/images/osito.png";
setBoard();drawTiles();
});
ppU.click(function(){clearVocals();ppU.addClass('presionado');
  img.src = "css/images/uva.png";
setBoard();drawTiles();
});



function clearNumbers(){
  pp2.removeClass('presionado');
  pp3.removeClass('presionado');
  pp4.removeClass('presionado');
}
function clearVocals(){
  ppA.removeClass('presionado');
  ppE.removeClass('presionado');
  ppI.removeClass('presionado');
  ppO.removeClass('presionado');
  ppU.removeClass('presionado');
}




});
        

