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

  newGuesses = [];

  console.log(newGuesses);
}

function postUserGuesses(guesses){
  $.ajax({
    method: 'POST',
    url: '/guessesPage',
    data: guesses
  })
  .then(function (response){
        //readGuesses();
  })

}

function onResetClick(){
  console.log('reset button works');
}