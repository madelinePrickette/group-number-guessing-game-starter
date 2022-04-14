$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $('#submitButton').on('click', onSubmitClick)
  $('#resetGameButton').on('click', onResetClick)
}

function onSubmitClick(){
  console.log('submit button works');
}

function onResetClick(){
  console.log('reset button works');
}