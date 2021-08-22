const $answer1 = document.getElementById('answer-1');
const $answer2 = document.getElementById('answer-2');
const $answer3 = document.getElementById('answer-3');
const $answer4 = document.getElementById('answer-4');
const $answer5 = document.getElementById('answer-5');

const $btnAnswer1 = document.getElementById('btn-answer-1');
const $btnAnswer2 = document.getElementById('btn-answer-2');
const $btnAnswer3 = document.getElementById('btn-answer-3');
const $btnAnswer4 = document.getElementById('btn-answer-4');
const $btnAnswer5 = document.getElementById('btn-answer-5');

$btnAnswer1.addEventListener('click', () => {
  $answer1.classList.toggle('card__answer--is-active');
  $btnAnswer1.classList.toggle('card__question-img--is-active');
  
})

$btnAnswer2.addEventListener('click', () => {
  $answer2.classList.toggle('card__answer--is-active');
})

$btnAnswer3.addEventListener('click', () => {
  $answer3.classList.toggle('card__answer--is-active');
})

$btnAnswer4.addEventListener('click', () => {
  $answer4.classList.toggle('card__answer--is-active');
})

$btnAnswer5.addEventListener('click', () => {
  $answer5.classList.toggle('card__answer--is-active');
})