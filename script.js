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
document.write(input)


const element = document.getElementById("button");
    if(element){
        element.addEventListener('click', buttonclick, false);
    }


function buttonclick(){
    let input = prompt("Enter Giveaway!? y/n")
    console.log(input)
    
    if(input == "y"){
        window.open("https://www.youtube.com/watch?v=tS_2hEmGnzA&ab_channel=Adroon");
        return;
    } 
    else if(input == "n"){
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
        return;
    }
    
    buttonclick()

} 



function printMoney(){
    let x = 0;
    let input2 = document.getElementById("formInput").value;

    if (isNaN(input2)){
        alert("Please put in a number");

    }
    
    while (x < input2) {
        const m = '<img src="monie.jpg" alt="monies" width="250" height="100" />'
        x++;
        document.getElementById("monies");
        monies.insertAdjacentHTML("afterend", m);

    }

}

// function burnMoney() {
//     const b = ""
//     document.getElementById("monies");
//     monies.insertAdjacentHTML("beforebegin", b);
    
// }
























