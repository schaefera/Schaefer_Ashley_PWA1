//javascript file - single line comment

/*
	Ashley Schaefer
	4/16/14
	Duel 3
*/


//self-executing function
(function(){

	console.log("The Fight"); //This is printed to the console
	
	
	//My dom parts
	var playerOneText = document.querySelector("#diablo").querySelector("p"); //grabs the p element from the html in my diablo div
	var playerTwoText = document.querySelector("#death").querySelector("p"); //grabs the p element from the html in my death div
	var roundText = document.querySelector("h4"); //grabs the text from h4 tag in my html
	var button = document.getElementById("fight_btn"); // grabs the fight_btn element from my html
	
	//My click event
	button.addEventListener("click", fight, false);
	
	//My array of objects containing player name, damage, and health for both fighters
	var fighters = [
		{
			name:"Diablo",
			damage:20,
			health:100
		},
		{
			name:"Death",
			damage:20,
			health:100
		}];
	
	//round
	var round = 0;

	//allows dom to input its own html
	roundText.innerHTML = "Let's Fight!";
	playerOneText.innerHTML = fighters[0].name + ":" + fighters[0].health;
	playerTwoText.innerHTML = fighters[1].name + ":" + fighters[1].health;


	//fight function
	function fight(){
		console.log('in the fight function');
		
		//alert(playerOne[0]+":"+playerOne[2]+" *START* "+playerTwo[0]+":"+playerTwo[2]);
		playerOneText.innerHTML = fighters[0].name + ":" + fighters[0].health;
		playerTwoText.innerHTML = fighters[1].name + ":" + fighters[1].health;
				
		for (var i=0; i < 10; i++){
		
			//random formula for damage
		
			var minDamage1 = fighters[0].damage * .5;
			var minDamage2 = fighters[2].damage * .5;
			var f1 = Math.floor(Math.random()*(fighters[0].damage-minDamage1)+minDamage1);
			var f2 = Math.floor(Math.random()*(fighters[1].damage-minDamage2)+minDamage2);
			
			//inflict damage
			fighters[0].health -= f1;
			fighters[1].health -=f2;
			
			
		console.log(fighters[0].health, fighters[1].health);

			//checks for winner
			var results = winnerCheck();	
			console.log(results);	
		
			roundText.innerHTML = "Round " + round + " Finished";
			
			if(results === "no winner"){
				round++;
				playerOneText.innerHTML = fighters[0].name + ":" + fighters[0].health;
				playerTwoText.innerHTML = fighters[1].name + ":" + fighters[1].health;
			}else{
				playerOneText.innerHTML = result;
				playerTwoText.innerHTML = "";
				
				//disables button
				button.removeEventListener("click", fight, false);
				
				document.querySelector('.buttonblue').innerHTML = 'FINISHED';
				};
		
			};
		};
	
	function winnerCheck(){
		console.log("in winnerCheck FN");
		var result="no winner";
		
		
		
		
		if(fighters[0].health < 1 && fighters[1].health < 1){
			result = "Death To All";
		} else if(fighters[0].health < 1){
			result = fighters[1].name + " WINS!!!";
		} else if(fighters[1].healther < 1){
			result = fighters[0].name + " WINS!!!";
		};
		
		return result;
	
	
	};
	
	//Program starts
	console.log('program starts');
	fight();





})();