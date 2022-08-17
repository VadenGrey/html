'use strict';

let name = prompt("What is your name?");
alert("Welcome to my website " + name + ", prepare to guess");

let color = prompt("What is my favorite color?");
color = color.toLowerCase();
switch (color) {
    case 'crimson':
        alert('Correct');
        break;
    default:
        alert('Incorrect');
}

let movie = prompt('What is my favorite movie?');
movie = movie.toLowerCase();
if (movie === 'redline') {
    alert('Theres no way you actually guessed that, you looked at the code didnt you?');
} else {
    alert('Incorrect');
}

let car = prompt('Do I like older cars? y/n');
car = car.toLowerCase();
if (car === 'y') {
    alert('Absolutley, theres no vehicles that are better')
} else if (car === 'n') {
    alert('Wrong and if you dont think so your opinion is also wrong ' + name);
} else {
    alert('didnt even try to answer?');
}

let game = prompt('What is my favorite PC game?');
game = game.toLowerCase();
switch (game) {
    case 'rimworld':
        alert('Correct, very fun');
        break;
    case 'minecraft':
        alert('Its fun but its not my favorite');
        break;
    default:
        alert('I didnt put a case for that game');
}

let music = prompt('What is the best genre of music?');
music = music.toLowerCase();
switch (music) {
    case 'rock':
        alert('Yes!, I love screaming guitars');
        break;
    case 'electronic':
        alert('Sounds nice, but not my go to');
        break;
}

let farewell = alert('Guessing game complete, nice job ' + name + ', enjoy the website now');


















