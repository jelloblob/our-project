var computerChoice;
function computerThink(){
	computerChoice = Math.floor(Math.random()*100);
	if(computerChoice < 1){
		computerChoice = "Diamond";
		alert("You Got Diamond");
}
	else if(computerChoice > 24){
		computerChoice = "Nothing";
			alert("You Got Nothing");	
}
	else if(computerChoice > 2 && computerChoice < 11){
		computerChoice = "Gold";
			alert("You Got Gold");	
}
	else if(computerChoice > 9 && computerChoice < 26){
		computerChoice = "Silver";
			alert("You Got Silver");	
}

}







