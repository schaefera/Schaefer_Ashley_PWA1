//javascript file - single line comment

/*
	Ashley Schaefer
	2/20/14
	Duel 2
*/


//self-executing function
(function(){

	console.log("fight!!!");
	
	//player name, damage, and health in array format
	var playerOne = ["Spiderman", 20, 100];
	var playerTwo = ["Batman", 20, 100];
	
	
	
	//round
	var round = 0;


	function fight(){
		console.log('in the fight function');
		
		alert(playerOne[0]+":"+playerOne[2]+" *START* "+playerTwo[0]+":"+playerTwo[2]);
				
		for (var i=0; i < 10; i++){
		
			//random formula
		
			var minDamage1 = playerOne[1] * .5;
			var minDamage2 = playerTwo[1] * .5;
			var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1);
			var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);
			
			//inflict damage
			playerOne[2]-=f1; // same as playerOneHealth = playerOneHealth - f1
			playerTwo[2]-=f2;
			
		console.log(playerOne[0]+":"+playerOne[2]+" "+playerTwo[0]+":"+playerTwo[2]);

		var results = winnerCheck();	
		console.log(results);	
		
		if(results === "no winner"){
			round++;
			alert(playerOne[0]+":"+playerOne[2]+" *ROUND "+round+" OVER* "+playerTwo[0]+":"+playerTwo[2]);
		}else{
			alert(results);
			break;
		};
		
		};
	};
	
	function winnerCheck(){
		console.log("in winnerCheck FN");
		var result="no winner";
		
		if(playerOne[2]<1 && playerTwo[2]<1){
			result = "You Both Die";
		} else if(playerOne[2]<1){
			result =playerTwo[0] + " WINS!!!";
		} else if(playerTwo[2]<1){
			result =playerOne[0] + " WINS!!!";
		};
		
		return result;
	
	
	};
	
	//Program starts
	console.log('program starts');
	fight();





})();