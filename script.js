setTimeout(()=>{
	$$('#guy-1').style.opacity = 1;
	$$("#left").style.backgroundImage = "url('images/l" + 1 + ".png')";
}, 600);

setTimeout(()=>{
	$$('#guy-1').style.opacity = 0.02;
	$$('#guy-2').style.opacity = 1;
	$$("#left").style.backgroundImage = "url('images/l" + 0 + ".png')";
	$$("#right").style.backgroundImage = "url('images/r" + 2 + ".png')";
}, 1200);

setTimeout(()=>{
	$$('#guy-2').style.opacity = 0.02;
	$$('#guy-4').style.opacity = 1;
	$$("#right").style.backgroundImage = "url('images/r" + 4 + ".png')";
}, 1800);

setTimeout(()=>{
	$$('#guy-4').style.opacity = 0.02;
	$$('#guy-3').style.opacity = 1;
	$$("#left").style.backgroundImage = "url('images/l" + 3 + ".png')";
	$$("#right").style.backgroundImage = "url('images/r" + 0 + ".png')";
}, 2400);

setTimeout(()=>{
	$$('#guy-3').style.opacity = 0.02;
	$$('#guy-1').style.opacity = 1;
	$$("#left").style.backgroundImage = "url('images/l" + 1 + ".png')";
}, 3000);

function changePosition(i) {
	if (!gameStarted) {
		game();
		gameStarted = 1;
	}
	for(let j = 1; j <= 4; j+=1) {
		$$('#guy-' + j).style.opacity = 0.02;
	}
	if (i % 2) {
		$$("#right").style.backgroundImage = "url('images/r0.png')";
		$$("#left").style.backgroundImage = "url('images/l" + i + ".png')";
	}
	else {
		$$("#left").style.backgroundImage = "url('images/l0.png')";
		$$("#right").style.backgroundImage = "url('images/r" + i + ".png')";
	}
	$$('#guy-' + i).style.opacity = 1;
	position = i;
	vibrate(50);
};


var gameStarted = 0;
var timeouts = [];
setTimeout(()=>{
	for (let i = 1; i<=4; i+=1){
		$$('#panel-'+i).addEventListener("mouseenter", ()=>{changePosition(i);});
		$$('#botton-'+i).addEventListener('click', ()=>{changePosition(i)});
	}
}, 3100);

var position = 1;
var score = 0;
var lives = 3;


function coinFalling (number){
	$$('#coin-'+number+'-1').className = "coin";
	for (let i = 1; i < 5; i+=1) {
		timeouts.push(setTimeout(()=>{
			$$('#coin-'+number+'-'+i).className = "hidden coin";
			$$('#coin-'+number+'-'+(i+1)).className = "coin";
		}, i * coinSpeed));
	}
	timeouts.push(setTimeout (()=>{coinFell(number);}, 5 * coinSpeed));
}

function coinFell (number) {
	$$('#coin-'+number+'-5').className = "hidden coin";
	if (position == number){
		score+=1;
		scoreBox();
	}
	else {
		lives -= 1;
		livesBox();

		if (!lives) {
			for (let i = 0; i < timeouts.length; i++) {
				clearTimeout(timeouts[i]);
			}
			console.log('GAME OVER');
			$$('#stab').style.visibility = "visible";

		}
	}
}

function goldCoinFalling (number){
	$$('#coin-'+number+'-1').className = "golden coin";
	for (let i = 1; i < 5; i+=1) {
		timeouts.push(setTimeout(()=>{
			$$('#coin-'+number+'-'+i).className = "hidden coin";
			$$('#coin-'+number+'-'+(i+1)).className = "golden coin";
		}, i * coinSpeed));
	}
	timeouts.push(setTimeout (()=>{goldCoinFell(number);}, 5 * coinSpeed));
}

function goldCoinFell (number) {
	$$('#coin-'+number+'-5').className = "hidden coin";
	if (position == number){
		score+=10;
		if (lives != 3) lives+=1;
		livesBox();
		scoreBox();
	}
	else {
		lives -= 1;
		livesBox();

		if (!lives) {
			for (let i = 0; i < timeouts.length; i++) {
				clearTimeout(timeouts[i]);
			}
			console.log('GAME OVER');
		}
	}
}


var coinSpeed = 1000;
var startSpeed = 1000;


var coinsNum = 0;

function game(){
	timeouts.push(setTimeout(function newCoin(){
		if (!(coinsNum % 50) && coinsNum) goldCoinFalling(parseInt(Math.random() * 4 + 1))
		else coinFalling(parseInt(Math.random() * 4 + 1))

		coinsNum += 1;
		if (!(coinsNum % 5)) {
			coinSpeed *= (14/15);
			startSpeed *= (14/15);
		}
		timeouts.push(setTimeout(()=>{if (lives) game();}, startSpeed));
	}, startSpeed));
	
}

function scoreBox(){
	
	for (let i = 0; i < 4; i+=1) {
		$$('#pos-'+i).style.backgroundImage = 'url("images/' + parseInt(score % Math.pow(10, i+1) / Math.pow(10, i)) + '.png")';
	}
}

function livesBox(){
	for (let i = 0; i < 3; i+=1) {
		if ((i+1) > lives) $$('#life-'+i).style.opacity = '0.1'
		else $$('#life-'+i).style.opacity = '1'
	}
	vibrate(200);
}

$$('#stab-botton').addEventListener('click', ()=>{
	setTimeout(()=>{
		if (!gameStarted) {
			game();
			gameStarted = 1;
		}
	}, 1000);
	$$('#stab').style.visibility = "hidden";
	$$('#stab-text').innerHTML = "Отличный результат! Оставь свой e-mail и мы расскажем тебе, что еще интересного ты сможешь увидеть на стенде MTS StartUp Hub в дни конференции!";
	$$('#stab-botton').style.visibility = "hidden";
	emailForm();
});

function emailForm(){
	var form = document.createElement('form');
	form.action = 'send.php';
	form.method='post';
	$("#stab").append(form);
	var input = document.createElement('input');
	input.id = "email-text";
	input.type = 'text';
	input.name = 'email';
	input.placeholder="Укажите ваш email";
	form.append(input);
	var button = document.createElement('input');
	button.type = "submit";
	button.id="email-button";
	button.value = " ";
	form.append(button);
}