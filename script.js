setTimeout(()=>{
	$('#guy-1').style.opacity = 1;
}, 600);

setTimeout(()=>{
		$('#guy-1').style.opacity = 0.02;
		$('#guy-2').style.opacity = 1;
}, 1200);

setTimeout(()=>{
	$('#guy-2').style.opacity = 0.02;
	$('#guy-4').style.opacity = 1;
}, 1800);

setTimeout(()=>{
	$('#guy-4').style.opacity = 0.02;
	$('#guy-3').style.opacity = 1;
}, 2400);

setTimeout(()=>{
	$('#guy-3').style.opacity = 0.02;
	$('#guy-1').style.opacity = 1;
}, 3000);

var gameStarted = 0;
var timeouts = [];
setTimeout(()=>{
	for (let i = 1; i<=4; i+=1){
		$('#panel-'+i).addEventListener("mouseenter", function() {
			if (!gameStarted) {
				game();
				gameStarted = 1;
			}
			for(let j = 1; j <= 4; j+=1) {
				$('#guy-' + j).style.opacity = 0.02;
			}
			$('#guy-' + i).style.opacity = 1;
			position = i;
		});
	}
}, 3000);




var position = 1;
var score = 0;
var lives = 3;

function coinFalling (number, speed){
	$('#coin-'+number+'-1').className = "coin";
	for (let i = 1; i < 5; i+=1) {
		timeouts.push(setTimeout(()=>{
			$('#coin-'+number+'-'+i).className = "hidden coin";
			$('#coin-'+number+'-'+(i+1)).className = "coin";
		}, i * speed));
	}
	timeouts.push(setTimeout (()=>{coinFell(number);}, 5 * speed));
}

function coinFell (number) {
	$('#coin-'+number+'-5').className = "hidden coin";
	if (position == number){
		score+=1;
		console.log(score);
	}
	else {
		lives -= 1;
		if (!lives) {
			for (let i = 0; i < timeouts.length; i++) {
				clearTimeout(timeouts[i]);
			}
			console.log('GAME OVER BITCH');
		}
	}
}

var coinSpeed = 1500;
var startSpeed = 1500;


var coinsNum = 0;

function game(){
	timeouts.push(setTimeout(function newCoin(){
		coinFalling(parseInt(Math.random() * 4 + 1), coinSpeed);

		coinsNum += 1;
		if (!(coinsNum % 5)) coinSpeed -= 100;
		if (!(coinsNum % 10)) startSpeed -= 200;
		console.log(startSpeed);
		timeouts.push(setTimeout(()=>{if (lives) game();}, startSpeed));
	}, startSpeed));
	
}


//1.32284319



