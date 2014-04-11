/*
	Ashley Schaefer
	4/10/14
	javascript practice
*/

// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers"); 	//prints out the first problem
    var avgNumbers = function(arr){ 				//defines the function
    	var avg = 0; 								//sets the average
    	for(var i=0, j=arr.length; i<j; i++){ 		//loops through the array
    		avg += arr[i];							//adds the new array element to avg
    	};
    	avg /= arr.length; 							//divides the total of avg by the length of the array.
    	return avg;


    };

    console.log('avg number = ', avgNumbers([1,2,3,4,5])); //prints out the result

   
   
   
   
   
   
   
   
   
    //--------------------------------------------------------
    console.log("2. concat first and last name");		//prints out second problem

	var fullName = function(firstName, lastName){		//defines the function
		return firstName + ' ' + lastName;				//concatenates firstName and lastName with a space in between 
	};

    console.log(fullName('James', 'Bond'));				//passes james into the function in place of firstName and Bond in place of lastName and prints out the concatenated result to the console

   
   
   
   
   
   
   
    //--------------------------------------------------------
    console.log("3. word count");						//prints out the third problem
    var ipsum = "this is test text that is being used as input to a function"	//defines the variable ipsum

	var wordCount = function(sentence) {				//defines the function 
		return sentence.split(' ').length;				//takes out the spaces in the parameter sentence from the variable ipsum
	};
	
       

    console.log(wordCount(ipsum));						//passes the ipsum variable into the wordCount function and prints out the result to the console

   
   
   
   
   
   
   
   
   
    //--------------------------------------------------------
    console.log("4. sentence char count");			//prints out the fourth problem

    var charCount = function(sentence) {			//defines the function
    	return sentence.split('').length;			//instead of taking out the spaces now we are including spaces in the character count of the variable
    };

    console.log(charCount(ipsum));					//pases the ipsum variable again but through the function charCount and prints out the result

    
    
    
    
    
    
    
    
    
    //--------------------------------------------------------
    console.log("5. how many vowels in a word");				//prints out the fifth problem

    var vowelsInWord = function(word) {							//defines the function and passes the parameter  word
    	var vowels = ['a', 'e', 'i', 'o', 'u'];					//creates a variable containing  an array of vowels
    	
    	count = 0;												//sets the count to 0
    	
    	this.word = word.toLowerCase().split('');				//converts the letters to all lowercase; allows them to be compared to our array of vowels that were in lowercase
    	
    	for(var i=0, j=this.word.length; i<j; i++) {			//this for look compares our word to each index value in the array and keep track of how many matches there are
    		for(var ii=0, jj=vowels.length; ii<jj; ii++) {
    			if(this.word[i] === vowels[ii]){
    				count++;
    			};
    		};
    	};
    	return count;											//returns the total matches to the array
    };
	
    console.log(vowelsInWord('JavaScript'));					//passes JavaScript into the function and prints out the result

   
   
   
   
   
   
   
   
   
   
    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");	//prints out the sixth problem

    var findNum = function(array, even) {						//defines the function, the array and the boolean
    	var returnArray = [],									
    		value;
																//if second parameter is false, an array will be created with all the odd numbers otherwise the array will have all even numbers    		
    	if(even === undefined || even){							//this loops through the numbers and finds all even numbers
    		for(var i=0, j=array.length; i<j; i++){
    			value = array[i];
    			if(value%2 === 0){
    				returnArray.push(value);
    			};
    		};
    	}else{													//this loops through and basically finds the odd numbers  if there were no even numbers found 
    		for(var i=0, j=array.length; i<j; i++){
    			value = array[i];
    			if(value%2 !== 0){
    				returnArray.push(value);
    			};
    		};
    	};
    	return returnArray;										//returns the number of even or odd numbers
    };

    console.log(findNum([31,22,4,67,83,6,5,4]));				//passes in those numbers into the function and prints out the result
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();