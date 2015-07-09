var computerChoice;
function computerThink(){
	computerChoice = Math.floor(Math.random()*100);
	if(computerChoice < 5){
		computerChoice = Diamond;
		diamondPoint++;
			alert("You Got Diamond");
}
	else if(computerChoice > 31){
		computerChoice = Nothing;
		nothingPoint++;	
			alert("You Got Nothing");	
}
	else if(computerChoice > 5 && computerChoice < 16){
		computerChoice = Gold;
		goldPoint++;
			alert("You Got Gold");	
}
	else if(computerChoice > 15 && computerChoice < 31){
		computerChoice = Silver;
		silverPoint++;
			alert("You Got Silver");	
}
}

Score = diamondPoint*50 + silverPoint*10 + goldPoint*25 + nothingPoint*1;

var Diamond = 50;

var Silver = 10;

var Gold = 25;

var Nothing = 1;

var Uscore = 0;

var press = function(){
	Uscore++;
	document.getElementById('score').innerHTML = "Your Score: " + Uscore;
};



