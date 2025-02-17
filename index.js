var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

var possibleLetters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" 
]

var correctLetters = []
var badLetters = []
var usedLetters = []
var wordDashes = []

var listCount = 11
var wins = 0
var losses = 0
var guesses = 10
var wordNum = 0

var currentWord = ""
var badLettersString = ""

var incorrectLetters = document.getElementById('incorrect-letters')
var previousWord = document.getElementById('previous-word')
var wordToGuess = document.getElementById('word-to-guess')
var remainingGuesses = document.getElementById('remaining-guesses')
var currentWins = document.getElementById('wins')
var currentLosses = document.getElementById('losses')


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function checkLetter(letter, array){
  return array.includes(letter)
}

function wordGet(){
  wordNum = getRandomInt(listCount)
  newWord = words[wordNum]
  currentWord = (newWord)
  guesses = 10
  correctLetters = []
  badLetters = []
  usedLetters = []
  correctLetters = newWord.split('')
  wordDashes = Array(currentWord.length).fill("_")
  words.splice(wordNum, 1)

  console.log(words)
  console.log(currentWord)

}

//keypress function

document.onkeyup = function(e) {
  var key = e.key.toLowerCase()

  if (checkLetter(key, possibleLetters)==true){

     if(checkLetter(key, usedLetters)==true){
     }

     else{
      if (checkLetter(key, correctLetters)==true){  

        for(i=0; i < currentWord.length; i++){
          if(key == currentWord[i]){
            wordDashes[i] = key
         }
        usedLetters.push(key)
      }
      }

      else{  
        badLetters.push(key)  
        usedLetters.push(key)
        guesses --   
      }
    }
  }

    if (guesses < 1){
      listCount --
      losses ++
      previousWord.textContent = (currentWord)
      wordGet()
    }

  if(wordDashes.includes("_")){
    
  }

  else{
      listCount --
      wins ++
      previousWord.textContent = (currentWord)
      wordGet() 
  } 

  remainingGuesses.textContent = (guesses)
  incorrectLetters.textContent = (badLetters.toString())
  wordToGuess.textContent = (wordDashes.join(""))
  currentWins.textContent = (wins)
  currentLosses.textContent = (losses)
}


//start game


wordNum = getRandomInt(listCount)
newWord = words[wordNum]
currentWord = (newWord)
correctLetters = currentWord.split('')
wordDashes = Array(currentWord.length).fill("_")
wordToGuess.textContent = (wordDashes.join(""))
remainingGuesses.textContent = (guesses)
words.splice(wordNum, 1)

console.log(words)
console.log(currentWord)
















