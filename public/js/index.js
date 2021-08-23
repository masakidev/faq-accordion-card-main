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

const $titleAnswer1 = document.getElementById('card__question-title-1');
const $titleAnswer2 = document.getElementById('card__question-title-2');
const $titleAnswer3 = document.getElementById('card__question-title-3');
const $titleAnswer4 = document.getElementById('card__question-title-4');
const $titleAnswer5 = document.getElementById('card__question-title-5');

$btnAnswer1.addEventListener('click', () => {
  $answer1.classList.toggle('card__answer--is-active');
  $btnAnswer1.classList.toggle('card__question-img--is-active');
  $titleAnswer1.classList.toggle('card__question-title--is-active');
})

$btnAnswer2.addEventListener('click', () => {
  $answer2.classList.toggle('card__answer--is-active');
  $btnAnswer2.classList.toggle('card__question-img--is-active');
  $titleAnswer2.classList.toggle('card__question-title--is-active');
})

$btnAnswer3.addEventListener('click', () => {
  $answer3.classList.toggle('card__answer--is-active');
  $btnAnswer3.classList.toggle('card__question-img--is-active');
  $titleAnswer3.classList.toggle('card__question-title--is-active');
})

$btnAnswer4.addEventListener('click', () => {
  $answer4.classList.toggle('card__answer--is-active');
  $btnAnswer4.classList.toggle('card__question-img--is-active');
  $titleAnswer4.classList.toggle('card__question-title--is-active');
})

$btnAnswer5.addEventListener('click', () => {
  $answer5.classList.toggle('card__answer--is-active');
  $btnAnswer5.classList.toggle('card__question-img--is-active');
  $titleAnswer5.classList.toggle('card__question-title--is-active');
})