const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> " // the shape of the prompt > also we can put %
});
 
const theList = [];


function menuPrompt(){
    const theMenu = ( "(v) View.(n) New.(cX) Complete.(dX) Delete,(q) Quit")
    console.log(theMenu);
    rl.prompt()
}


function showList(){
        if (theList.length <= 0) {
            console.log("List is empty...");

        } else {
        theList.forEach((entry, index) => {
        let status = entry[0] === true ? "✔": " ";
        console.log(`${index} [${status}] ${entry[1]}`)
    });
  }
        
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

function deleteItem(num) {
    if (num >= 0 && num < theList.length) {
       console.log(`Deleted "${theList.splice(num, 1)[0][1]}"`); 
    }
}




console.log("Welcome to Todo CLI!\n--------------------");
menuPrompt();

let curCmd = "";
rl.on("line", (input) => {

  if (input === "q") {
      console.log("See you soon! 😊")
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
  } else if (input[0] === "d") {
    let num = parseInt(input.slice(1))
    deleteItem(num);
    menuPrompt();
}

});