function $ (elem) {
	return (document.querySelector(elem));
}

var windowHeight = 0.99 * document.documentElement.clientHeight;
var windowWidth = 0.99 * document.documentElement.clientWidth;

var panelWidth = windowWidth * 0.5;

if (windowHeight * 0.8 > windowWidth) {
	panelWidth = windowWidth * 0.85;
	$('#front-panel').style.transform = 'translate(-50%, 0)';
	$('#front-panel').style.top = '10%';

	$('#left').style.top = '65%';
	$('#left').style.left = '2%';
	$('#left').style.width = '50vw';
	$('#left').style.height = '25vh';

	$('#right').style.top = '65%';
	$('#right').style.right = '2%';
	$('#right').style.width = '50vw';
	$('#right').style.height = '25vh';
}

if (windowHeight * 2.17 < windowWidth) {
	panelWidth = windowHeight * 1.1;
}

var coinSize = panelWidth / 35;

$('#front-panel-side').style.width = (panelWidth) + "px";
$('#front-panel-side').style.height = (panelWidth / 1.32284319) + "px";

$('#front-panel').style.width = (panelWidth * 1.1) + "px";
$('#front-panel').style.height = (panelWidth / 1.32284319 * 1.1) + "px";

$('#screen').style.boxShadow = 'rgb(82, 90, 91) 0 0 0 '+ panelWidth / 80 + 'px, rgb(224, 209, 166) 0 0 0 ' + panelWidth / 40 + 'px,rgb(70, 70, 70) 0 0 0 ' + panelWidth / 35 + 'px, inset rgb(0, 0, 0) 0 0 6px 0';

$('#front-panel').style.boxShadow = 'inset rgba(255,255,255,0.2) '+ panelWidth / 160 + 'px ' + panelWidth / 160 + 'px '+ panelWidth / 40 + 'px '+ panelWidth / 40 + 'px, inset rgba(0,0,0,0.5)      -'+ panelWidth / 160 + 'px -'+ panelWidth / 160 + 'px '+ panelWidth / 40 + 'px '+ panelWidth / 80 + 'px';


for (let i = 0; i < document.querySelectorAll('.coin').length; i+=1) {
	document.querySelectorAll('.coin')[i].style.width = coinSize + 'px';
	document.querySelectorAll('.coin')[i].style.height = coinSize + 'px';
}

topUp = 19.5;
topDown = 46;
leftL = 3;
topD = 3.6;
leftD = 4;

for (let i = 1; i <=5; i+=1) {
	$('#coin-1-'+i).style.top = (topUp + topD * (i - 1)) + "%";
	$('#coin-1-'+i).style.left = (leftL + leftD * (i - 1)) + "%";
}

for (let i = 1; i <=5; i+=1) {
	$('#coin-2-'+i).style.top = (topUp + topD * (i - 1)) + "%";
	$('#coin-2-'+i).style.right = (leftD * (i - 1)) + "%";
}

for (let i = 1; i <=5; i+=1) {
	$('#coin-3-'+i).style.top = (topDown + topD * (i - 1)) + "%";
	$('#coin-3-'+i).style.left = (leftL + leftD * (i - 1)) + "%";
}

for (let i = 1; i <=5; i+=1) {
	$('#coin-4-'+i).style.top = (topDown + topD * (i - 1)) + "%";
	$('#coin-4-'+i).style.right = (leftD * (i - 1)) + "%";
}

$("#left").style.backgroundImage = "url('images/l" + 0 + ".png')";
$("#left").style.backgroundImage = "url('images/l" + 1 + ".png')";
$("#left").style.backgroundImage = "url('images/l" + 3 + ".png')";
$("#right").style.backgroundImage = "url('images/r" + 0 + ".png')";
$("#right").style.backgroundImage = "url('images/r" + 2 + ".png')";
$("#right").style.backgroundImage = "url('images/r" + 4 + ".png')";
