const { title } = require("process");
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> " // the shape of the prompt > also we can put %
});



function menuPrompt(){
    const theMenu = ( "(v) View.(n) New.(cX) Complete.(dX) Delete,(q) Quit")
    console.log(theMenu);
    rl.prompt()
}


function showList(){
    theList.forEach((entry, index) => {
        let status = entry[0] === true ? "✔": " ";
        console.log(`${index} [${status}] ${entry[1]}`)
    });
}


function newEntry(entry = "") {
    if (entry === "") {
        console.log("What?");
        rl.prompt()
    } else {
        theList.push([false, entry])
    }

}

function completeItem(num) {
    if (num >= 0 && num < theList.length) {
       theList[num][0] = true;
       console.log(`Completed "${theList[num][1]}"`); 
    }
   
}


console.log("Welcome to Todo CLI!\n--------------------");
menuPrompt();

let curCmd = "";
rl.on("line", (input) => {

  if (input === "q") {
    rl.close();
    return;

  } else if (input === "v") {
    showList()
    menuPrompt();

  } else if (input === "n"){
    curCmd = "n";
    newEntry();
   
  } else if ( curCmd === "n"){
      newEntry(input)
      curCmd = "";
      menuPrompt();

  } else if (input[0] === "c") {
      let num = parseInt(input.slice(1))
      completeItem(num);
      menuPrompt();
  }

});

const theList = [
    [true, "Take out the trash"], 
    [true, "Buy toothpaste"],
    [false, "Buy Snickerdoodles"],
    [false, "Fix the climate"],
    [false, "Find a cure for aging"]
];


