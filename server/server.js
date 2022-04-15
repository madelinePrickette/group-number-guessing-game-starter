const previousGuessesList = [];

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here

function randomNumberFunction(min, max){
  return Math.floor(Math.random() * (1 + max - min) + 1);
}

let randomizedNumber = randomNumberFunction(1, 25);
console.log(randomizedNumber);

app.post('/guessesPage', (req, res) => {
  console.log('POST/guessesPage');
  console.log(req.body);
  let newGuess = req.body;
  previousGuessesList.push(newGuess);
  res.sendStatus(200);
  console.log(previousGuessesList);

})

app.get('/guessesPage', (req, res) => {
  console.log('GET /guessesPage');
  for (let guess of previousGuessesList){
    for ( i = 0; i < guess.allTheGuesses.length; i++){
      if ( guess.allTheGuesses[i].number === randomizedNumber.toString()){
        res.send(guess.allTheGuesses[i].number);
        console.log(guess.allTheGuesses[i]);
        return true;
      }
      
    }
  }
  res.send(previousGuessesList);
})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})