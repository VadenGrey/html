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
let c = 0
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
let x = Math.round(Math.random() * 10);
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
loopMain:
for (let i = 0; i < 6; i++) {
    let gameGuess = prompt('What is one of my favorite games?');
    for (let j = 0; j < 3; j++) {
        if (gameGuess === answer[5][j]) {
          alert('Correct!, all answers are ' + answer[5]);
          c++;
          break loopMain;
        }
    }
    alert('You have ' + (5 - i) + ' tries left');
}

alert('The correct answers are ' + answer[5] + ', In total you got ' + c + ' out of 7 correct');





//V1 code

// let name = prompt("What is your name?");
// alert("Welcome to my website " + name + ", prepare to guess");

// let color = prompt("What is my favorite color?");
// color = color.toLowerCase();
// switch (color) {
//     case 'crimson':
//         alert('Correct');
//         break;
//     default:
//         alert('Incorrect');
// }

// let movie = prompt('What is my favorite movie?');
// movie = movie.toLowerCase();
// if (movie === 'redline') {
//     alert('Theres no way you actually guessed that, you looked at the code didnt you?');
// } else {
//     alert('Incorrect');
// }

// let car = prompt('Do I like older cars? y/n');
// car = car.toLowerCase();
// if (car === 'y') {
//     alert('Absolutley, theres no vehicles that are better')
// } else if (car === 'n') {
//     alert('Wrong and if you dont think so your opinion is also wrong ' + name);
// } else {
//     alert('didnt even try to answer?');
// }

// let game = prompt('What is my favorite PC game?');
// game = game.toLowerCase();
// switch (game) {
//     case 'rimworld':
//         alert('Correct, very fun');
//         break;
//     case 'minecraft':
//         alert('Its fun but its not my favorite');
//         break;
//     default:
//         alert('I didnt put a case for that game');
// }

// let music = prompt('What is the best genre of music?');
// music = music.toLowerCase();
// switch (music) {
//     case 'rock':
//         alert('Yes!, I love screaming guitars');
//         break;
//     case 'electronic':
//         alert('Sounds nice, but not my go to');
//         break;
// }

// let farewell = alert('Guessing game complete, nice job ' + name + ', enjoy the website now');