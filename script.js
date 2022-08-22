'use strict';



// welcoming prompts
let nameUser = prompt('Welcome to a webpage what is your name?');
alert('Prepare to guess ' + nameUser);

//Array for questions
let questions = [
'Is my favorite color crimson? y/n',
'Is my favorite movie Interstellar? y/n',
'Do I like older cars? y/n',
'Is the ARMY the best branch of service? y/n',
'Do I love sweet Rock\'n\'Roll? y/n',
'Im thinking of a number between 0-10, guess'
]

//Array for answers
let answer = [
'y',
'n',
'y',
'y',
'y',
['team fortress 2', 'rimworld', 'ultrakill'],
]

// loop going through the questions
let c = 0 //correct ans variable
for (let i = 0; i < 5; i++) {
    let guess = prompt(questions[i]);
        if (guess == answer[i]) {
            alert('correct');
            c++
        } else {
            alert('Incorrect');
    }
}

//random number guess question
let x = Math.round(Math.random() * 10); //rand numb 0-1 times 10, then rounds it to a whole numb
for (let i = 0; i < 4; i++) {
    let numGuess = prompt(questions[5]);
    if (numGuess == x) {
        alert('Correct!, Nice job!');
        c++
        break;
    } else if (i == 3) {
        alert('The answer was ' + x + ', better luck next time!');
        break;
    } else if (numGuess > x) {
        alert('Too high!, you have ' + (3 - i) + ' tries left');
    } else if (numGuess < x) {
        alert('Too low!, you have ' + (3 - i) + ' tries left');
    }
}

//Guessing game code
loopMain: //label to break the nested loop
for (let i = 0; i < 6; i++) {
    let gameGuess = prompt('What is one of my favorite games?');
    for (let j = 0; j < 3; j++) { //loops inside array[5]
        if (gameGuess === answer[5][j]) {
          alert('Correct!, all answers are ' + answer[5]);
          c++;
          break loopMain;
        }
    }
    alert('You have ' + (5 - i) + ' tries left');
}

alert('The correct answers are ' + answer[5] + ', In total you got ' + c + ' out of 7 correct');
