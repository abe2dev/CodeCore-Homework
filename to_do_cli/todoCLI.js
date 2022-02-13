const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> "
});


const theMenu = ( "(v) View.(n) New.(cX) Complete.(dX) Delete,(q) Quit")


console.log("Welcome to Todo CLI!\n--------------------");
console.log(theMenu);

rl.prompt();
rl.on("line", (action) => {

  if (action === "q") {
    rl.close();
    
  } else {
    console.log(theMenu);
    rl.prompt();
  }
});
