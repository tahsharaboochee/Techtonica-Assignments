// const myDictionary = function (word) {
// 	const fetch = require('node-fetch');
// 	fetch("https://gist.githubusercontent.com/jesseditson/1e6b2b524814320515ccfe7e2f856eda/raw/17d61fa1e80e14b13c4525b09f84148772586b59/words.json")
// 		.then(myDictionary => myDictionary.json())
// 		.then(myDictionary => {
// 			if (myDictionary.words.includes(word)) {
// 					return true;
// 			}
// 			return false;
// 		});
// }
// myDictionary = [];
// //storing the git file of english words into a var so it loads only one time
// $.ajax({
// 			url: "https://gist.githubusercontent.com/jesseditson/1e6b2b524814320515ccfe7e2f856eda/raw/17d61fa1e80e14b13c4525b09f84148772586b59/words.json"
// 		})
// 		.done(function (data) {
// 			myDictionary = data.words
// 			//filling the board after the dictionary file is stored in the the dictionary variable to ensure all words are valid
// 			let start = document.getElementById('start'); 
// 		  start.addEventListener("click", shuffleBoggleGrid)
// 		})



		let start = document.getElementById('start'); 
		start.addEventListener("click", shuffleBoggleGrid);


		// array of played words
		let boggleWords = new Array();
		//flag for if string is being built currently
		// let mousedown = 0;
	
		// Boggle dice
		const die1 = ["A", "A", "E", "E", "G", "N"];
		const die2 = ["A", "B", "B", "J", "O", "O"];
		const die3 = ["A", "C", "H", "O", "P", "S"];
		const die4 = ["A", "F", "F", "K", "P", "S"];
		const die5 = ["A", "O", "O", "T", "T", "W"];
		const die6 = ["C", "I", "M", "O", "T", "V"];
		const die7 = ["D", "E", "I", "L", "R", "X"];
		const die8 = ["H", "L", "N", "N", "R", "Z"];
		const die9 = ["D", "I", "S", "T", "T", "Y"];
		const die10 = ["E", "E", "G", "H", "N", "W"];
		const die11 = ["E", "E", "I", "N", "S", "U"];
		const die12 = ["E", "H", "R", "T", "V", "W"];
		const die13 = ["E", "I", "O", "S", "S", "T"];
		const die14 = ["E", "L", "R", "T", "T", "Y"];
		const die15 = ["H", "A", "E", "E", "G", "N"];
		const die16 = ["A", "I", "M", "N", "QU", "U"];

		const board = [die1, die2, die3, die4, die5, die6, die7, die8, die9, die10, die11, die12, die13, die14, die15, die16];

		//phrases at end of game
		const gameOver = "Great game! Game Over!";


		//fills the board with random letters
		function shuffleBoggleGrid() {
			clearBoard();
			// clearlist();
			let randLetter;
			for (let randDie = 0; randDie < board.length; randDie++) {
				// console.log(board[randDie]);
				let randLetter = board[randDie][Math.floor(Math.random() * board[randDie].length)];
				let curDie = document.getElementById(randDie).innerHTML = randLetter;
				// console.log(curDie);
			}
		}
	
		
		let coordToHtmlIdMapping = [{
				'0': {
					"row": 0,
					"column": 0,
					"clickedLetter": false
				},
			},
			{
				'1': {
					"row": 0,
					"column": 1,
					"clickedLetter": false
				}
			},
			{
				'2': {
					"row": 0,
					"column": 2,
					"clickedLetter": false
				}
			},
			{
				'3': {
					"row": 0,
					"column": 3,
					"clickedLetter": false
				}
			},
			{
				'4': {
					"row": 1,
					"column": 0,
					"clickedLetter": false
				}
			},
			{
				'5': {
					"row": 1,
					"column": 2,
					"clickedLetter": false
				}
			},
			{
				'6': {
					"row": 1,
					"column": 3,
					"clickedLetter": false
				}
			},
			{
				'7': {
					"row": 1,
					"column": 2,
					"clickedLetter": false
				}
			},
			{
				'8': {
					"row": 2,
					"column": 0,
					"clickedLetter": false
				}
			},
			{
				'9': {
					"row": 2,
					"column": 3,
					"clickedLetter": false
				}
			},
			{
				'10': {
					"row": 2,
					"column": 2,
					"clickedLetter": false
				}
			},
			{
				'11': {
					"row": 2,
					"column": 3,
					"clickedLetter": false
				}
			},
			{
				'12': {
					"row": 3,
					"column": 0,
					"clickedLetter": false
				}
			},
			{
				'13': {
					"row": 3,
					"column": 1,
					"clickedLetter": false
				}
			},
			{
				'14': {
					"row": 3,
					"column": 2,
					"clickedLetter": false
				}
			},
			{
				'15': {
					"row": 3,
					"column": 3,
					"clickedLetter": false
				}
			},
		];

		let storedLetters = "";

		function startWord(event) {
			//get the attribute of a targeted element
			let die = event.target;
			if (die.style.backgroundColor != "yellow") {
				die.style.backgroundColor = "yellow";
				storedLetters = storedLetters.concat(die.innerHTML);
				delete coordToHtmlIdMapping[die.id];
				if (mousedown == 0) {
					mousedown++;
				}
			}
		}


		// while in the process of building a word
function buildingWord(event){
	if (mousedown == 1){
		let die = event.target;
		if (die.style.backgroundColor != "yellow"){
			die.style.backgroundColor = "yellow";
			storedLetters = storedLetters.concat(die.innerHTML);
			// console.log(storedLetters);
		if (mousedown == 0){mousedown=1;}
		}
	}
}

function submitWord(event){
	if (mousedown == 1){
		// if the word is long enough, add it to the word list
		if (storedLetters.length >= 3 /*&& myDictionary(storedLetters)*/){
			boggleWords.push(storedLetters);
		}
		clearBoard();
	}
}

function clearBoard(){
	let dice = document.querySelectorAll('button');

	for (let i = 0; i < 16; i++){
     	if (dice[i].style.backgroundColor != "white"){
     		dice[i].style.backgroundColor = "white";
     	}
	}
	storedLetters = "";
	mousedown = 0;
	return;
}

