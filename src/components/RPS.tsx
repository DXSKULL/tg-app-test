type Choice = 'Rock' | 'Paper' | 'Scissors';
type Result = 'Win' | 'Lose' | 'Tie';

const choices: Choice[] = ['Rock', 'Paper', 'Scissors'];

const getRandomChoice = (): Choice => choices[Math.floor(Math.random() * choices.length)];

const determineWinner = ()