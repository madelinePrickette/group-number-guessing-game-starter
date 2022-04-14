$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $('#submitButton').on('click', onSubmitClick)
  $('#resetGameButton').on('click', onResetClick)
}

let newGuesses = [];

function onSubmitClick(){
  console.log('submit button works');
  let chrisGuess = {
    name: 'Chris',
    number: $('#chrisInput').val()
  }
  let joeGuess = {
    name: 'Joe',
    number: $('#joeInput').val()
  }
  let madelineGuess = {
    name: 'Madeline',
    number: $('#madelineInput').val()
  }
  console.log(chrisGuess);
  console.log(joeGuess);
  console.log(madelineGuess);

  newGuesses.push(chrisGuess, joeGuess, madelineGuess);
  postUserGuesses(newGuesses);
  console.log(newGuesses);

  $('input').val('');

  newGuesses = [];

  console.log(newGuesses);
}

function postUserGuesses(newGuesses){
  //console.log(newGuesses);
  //console.log(guesses);
  let dataToSendToTheServer = {
    allTheGuesses: newGuesses
  };
  console.log('guesses:', newGuesses);
  console.log('dataToSendToTheServer', dataToSendToTheServer);
  $.ajax({
    method: 'POST',
    url: '/guessesPage',
    data: dataToSendToTheServer
  })
  .then(function (response){
    console.log('response of POST is:');
    console.log(response);
        readGuesses();
  })
  //console.log(newGuesses);
  //console.log(guesses);
}

function readGuesses(){
  $.ajax({
    method: 'GET',
    url: '/guessesPage'
  })
  .then(function(response){
    console.log('the server sent me something');
    console.log(response);
    $('#previousGuessesList').empty();

    for (let guess of response){
      for (let i=0; i<guess.allTheGuesses.length; i++){
      $('#previousGuessesList').append(`
        <li>${guess.allTheGuesses[i].name} guessed ${guess.allTheGuesses[i].number}</li>
        `);
      }
    }
  })
}

function onResetClick(){
  console.log('reset button works');
}