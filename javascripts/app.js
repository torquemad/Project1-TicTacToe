var marker = 'x';
var counter = 0;
var max_turns = 9;

var player1_win = 0;
var player2_win = 0;


var board = [
  ["+","+","+"],
  ["+","+","+"],
  ["+","+","+"]
  ];

$('li').on('click', function() {
   var clickedSquare = this.id.split('-')

    xCoOrd = parseInt(clickedSquare[0])
    yCoOrd = parseInt(clickedSquare[1]) 


    if (counter < max_turns) {
      counter++
    };
    if (counter % 2 === 0) {
      marker = 'O'
      board[xCoOrd][yCoOrd] = marker;
      $(this).html(marker)
    } else {
      marker = 'X'
      board[xCoOrd][yCoOrd] = marker;
      $(this).html(marker)
    };


    if ((_.contains(board[0][0], marker) && 
      _.contains(board[1][0], marker) && 
      _.contains(board[2][0], marker)
      ) ||

      (_.contains(board[0][1], marker) && 
      _.contains(board[1][1], marker) && 
      _.contains(board[2][1], marker)
      ) ||

      (_.contains(board[2][2], marker) && 
      _.contains(board[1][2], marker) && 
      _.contains(board[2][2], marker)
      ) ||

      (_.contains(board[0][0], marker) && 
      _.contains(board[0][1], marker) && 
      _.contains(board[0][2], marker)
      ) ||

      (_.contains(board[1][0], marker) && 
      _.contains(board[1][1], marker) && 
      _.contains(board[1][2], marker)
      ) ||

      (_.contains(board[2][0], marker) && 
      _.contains(board[2][1], marker) && 
      _.contains(board[2][2], marker)
      ) ||

      (_.contains(board[2][0], marker) && 
      _.contains(board[1][1], marker) && 
      _.contains(board[0][2], marker)
      ) ||

      (_.contains(board[0][0], marker) && 
      _.contains(board[1][1], marker) && 
      _.contains(board[2][2], marker)
      ))

      {
      alert(marker + ' wins')
      };

});