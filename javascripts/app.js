var marker = 'x';
var counter = 0;
var max_turns = 9;

var player1Score = 0;
var player2Score = 0;


var board = [
    ["+", "+", "+"],
    ["+", "+", "+"],
    ["+", "+", "+"]
];

function reset() {

    board = [
        ["+", "+", "+"],
        ["+", "+", "+"],
        ["+", "+", "+"]
    ];

    $('li').removeClass('selected');
    $('li').html('+');
    $('li').css("background-color", "")


};

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
        if (marker === "O") {
            $('#0-0').css("background-color", "rgb(255, 146, 37)")
            $('#0-1').css("background-color", "rgb(255, 146, 37)")
            $('#0-2').css("background-color", "rgb(255, 146, 37)")
            $('#1-0').css("background-color", "rgb(255, 146, 37)")
            $('#1-2').css("background-color", "rgb(255, 146, 37)")
            $('#2-0').css("background-color", "rgb(255, 146, 37)")
            $('#2-1').css("background-color", "rgb(255, 146, 37)")
            $('#2-2').css("background-color", "rgb(255, 146, 37)")
            player2Score++
            $('player1Score').html(player2Score)
        } else {
            $('#0-0').css("background-color", "rgb(255, 146, 37)")
            $('#0-2').css("background-color", "rgb(255, 146, 37)")
            $('#1-1').css("background-color", "rgb(255, 146, 37)")
            $('#2-0').css("background-color", "rgb(255, 146, 37)")
            $('#2-2').css("background-color", "rgb(255, 146, 37)")
            player1Score++
            $('player1Score').html(player1Score)
        };

        alert(marker + ' wins')
    };

  console.log(board[0])
  console.log(board[1])
  console.log(board[2])
  console.log('--------------------')

});

$('.btn').click(function() {
    reset();
})