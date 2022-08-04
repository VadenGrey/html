// let x = 5
// let y = 4
// let z = x + y
// console.log(z)


// for getting input
// const input = prompt("How do it do?");
// console.log(input);
// console.log(typeof(input))
// console.log("but " + input + " how tho?");

//for giving a message
// alert("This is an alert")



const input = prompt("Welcome to Best Website™, what is your name?");
console.log(input);

document.write(input)


const element = document.getElementById("button");
if(element){
    element.addEventListener('click', buttonclick, false);
  }


function buttonclick() {
    let input = prompt("Enter Giveaway!? y/n")
    console.log(input)
    
    if (input == "y") {
        window.open("https://www.youtube.com/watch?v=tS_2hEmGnzA&ab_channel=Adroon");
    
    } else if (input == "n") {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
    }

} 






























