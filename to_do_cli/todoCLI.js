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


console.log("Welcome to Todo CLI!\n--------------------");
menuPrompt();
rl.on("line", (action) => {

  if (action === "q") {
    rl.close();
    return;
  } else if (action === "v") {
    showList()
  } 
  menuPrompt()
});

const theList = [
    [true, "Take out the trash"], 
    [true, "Buy toothpaste"],
    [false, "Buy Snickerdoodles"],
    [false, "Fix the climate"],
    [false, "Find a cure for aging"]
];


