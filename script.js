var counter = 0;
var xArray = [];
var oArray = [];
var player1 = prompt("What is the name of Player 1?");
var player2 = prompt("What is the name of Player 2?");
if (player1 == null) {
	player1 = "Player 1";
}
if (player2 == null) {
	player2 = "Player 2";
}
document.getElementById("p1Name").innerHTML = player1;
document.getElementById("p2Name").innerHTML = player2;
var xWinner = 0;
var oWinner = 0;



function addMarker(element) {
	var elementId = element.getAttribute('id');
	if (element.innerHTML == '') {
		if (counter%2 === 0) {
			element.innerHTML = 'x';
			xArray.push(elementId);
		} else {
			element.innerHTML = 'o';
			oArray.push(elementId);
		}
	counter++;
	} else {
		alert("You can't go there!");
	}
	evaluateWinner();
}

function evaluateWinner() {
	var isWinner = false;
	var winningPlayer;
	for(var i = 0; i < winningCombos.length; i++) {
		var inXArray = 0;
		var inOArray = 0;
		for(var a = 0; a < winningCombos[i].length; a++) {
			if (xArray.indexOf(winningCombos[i][a]) !== -1) {
				inXArray++;
			}
			if (oArray.indexOf(winningCombos[i][a]) !== -1) {
				inOArray++;
			}
		}
		if (inXArray === 3) {
			isWinner = true;
			winningPlayer = player1;
			xWinner++;
			document.getElementById('p1score').innerHTML = xWinner;
		}
		if (inOArray === 3) {
			isWinner = true;
			winningPlayer = player2;
			oWinner++;
			document.getElementById('p2score').innerHTML = oWinner;
		}
	}
	if (isWinner === true) {
		alert(winningPlayer + " is the winner!");
		reset();
	}
	if(counter === 9 && isWinner === false ) {	
		alert("The game has ended in a tie!");
		reset();
	}
}

function reset() {
	for (var i = 0; i < 9; i++) {
		var reset = document.getElementById("box-" + i);
		reset.innerHTML = "";
	}
	counter = 0;
	xArray = [];
	oArray = [];
}

var winningCombos = [
	['box-0', 'box-1', 'box-2'],
	['box-3', 'box-4', 'box-5'],
	['box-6', 'box-7', 'box-8'],
	['box-0', 'box-3', 'box-6'],
	['box-1', 'box-4', 'box-7'],
	['box-2', 'box-5', 'box-8'],
	['box-0', 'box-4', 'box-8'],
	['box-3', 'box-4', 'box-6'],
];




