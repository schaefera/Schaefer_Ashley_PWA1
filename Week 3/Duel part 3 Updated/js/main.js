/*
Ashley Schaefer
	4/16/14
	Duel 3
*/

// self-executing function
(function(){

    console.log("The Fight"); // this is printed to the console

	var fighter1_txt = document.querySelector("#diablo").querySelector("p");  //grabs the p element from the html in my diablo div
	var fighter2_txt = document.querySelector("#death").querySelector("p");  //grabs the p element from the html in my death div
	var round_txt = document.querySelector("round_number");  //grabs the text from round_number tag in my html
	var button = document.getElementById("fight_btn");  // grabs the fight_btn element from my html
	
	//My click Event
	button.addEventListener("click", fight, false);
	
	//My array of objects containing player name, damage, and health for both fighters
	var fighters = [
		{
			name:"Death",
			damage:20,
			health:100
		},
		{
			name:"Diablo",
			damage:20,
			health:100
		}];

    

    //initiates round
    var round=1;

	round_txt.innerHTML = "Let's fight";
	fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
	fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
	
	//fight function
    function fight(){
        fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
		fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
        
       
        
        //determines damage
        var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);
        var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5); 
        
        //inflict damage
        fighters[0].health -= f1;
        fighters[1].health -= f2;
        
        console.log(fighters[0].health, fighters[1].health);   
           
        //check for winner
            var result = winnerCheck();
            console.log(result);
            
            round_txt.innerHTML = "Round " + round + " finished";
            round++;
            
            if (result==="no winner")
            {
              fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
              fighter1_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;
              
            } else{
            	fighter1_txt.innerHTML = result;
            	fighter2_txt.innerHTML = "";
            
                button.removeEventListener("click", fight, false);
                
                document.querySelector('.buttonblue').innerHTML = 'Finished';
            };

          };
    	

    function winnerCheck(){
    	console.log("in winnerCheck FN");
        var result="no winner";
        
        
        
        if (fighters[0].health < 1 && fighters[1].health < 1)
        {
            result = "Death To All";
        } else if(fighters[0].health < 1){
            result = fighters[1].name + " WINS!!!"
        } else if (fighters[1].health < 1)
        {
            result = fighters[0].name+ " WINS!!!"
        };
       return result;
    };

   

})();