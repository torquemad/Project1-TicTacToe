var marker = 'x';
var counter = 0;
var max_turns = 9;

var player1Score = 0;
var player2Score = 0;

var hasPlayerWon = false;

var board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];


function resetBoard() {
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    $('li').removeClass('selected');
    $('li').html('');
    $('li').css("background-color", "")
    hasPlayerWon = false;
    counter = 0;
};

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    $('#player1Score span').html(player1Score)
    $('#player2Score span').html(player1Score)
}

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
        $(this).html(marker);
        $(this).addClass('selected');
    } else {
        marker = 'X'
        board[xCoOrd][yCoOrd] = marker;
        $(this).html(marker)
        $(this).addClass('selected');
    };


    if ((_.contains(board[0][0], marker) &&
            _.contains(board[1][0], marker) &&
            _.contains(board[2][0], marker)
        ) ||

        (_.contains(board[0][1], marker) &&
            _.contains(board[1][1], marker) &&
            _.contains(board[2][1], marker)
        ) ||

        (_.contains(board[0][2], marker) &&
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
        if (marker === "X") {
            $('#0-0').css("background-color", "rgb(255, 146, 37)")
            $('#0-2').css("background-color", "rgb(255, 146, 37)")
            $('#1-1').css("background-color", "rgb(255, 146, 37)")
            $('#2-0').css("background-color", "rgb(255, 146, 37)")
            $('#2-2').css("background-color", "rgb(255, 146, 37)")
            player1Score++
            $('#player1Score span').html(player1Score)

        } else if (marker === 'O') {
            $('#0-0').css("background-color", "rgb(255, 146, 37)")
            $('#0-1').css("background-color", "rgb(255, 146, 37)")
            $('#0-2').css("background-color", "rgb(255, 146, 37)")
            $('#1-0').css("background-color", "rgb(255, 146, 37)")
            $('#1-2').css("background-color", "rgb(255, 146, 37)")
            $('#2-0').css("background-color", "rgb(255, 146, 37)")
            $('#2-1').css("background-color", "rgb(255, 146, 37)")
            $('#2-2').css("background-color", "rgb(255, 146, 37)")
            player2Score++
            $('#player2Score span').html(player2Score)
        }
        // alert who the winner is (will always be the last clicker (marker))
        alert(marker + ' wins');

        //check who wins out of 5
        if (player1Score === 5) {
          alert('Player 1 wins, good game!');
          player1Score =0;
          $('#player1Score span').html(player1Score)

        }
        else if (player2Score === 5) {
          alert('Player 2 wins, good game!');
          player2Score = 0;
          $('#player2Score span').html(player2Score)

        };

        resetBoard();
        //reset the board after all the above
    } else {
      if (counter === 9) {
        alert('tie');
        resetBoard();
      }
    }
});

$('#btn').click(function() {
    resetBoard();
    resetGame();
});